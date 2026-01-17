import { leaderboardData } from "../../../data/dashboardData"

/**
 * Avatar for leaderboard entries
 */
const LeaderboardAvatar = ({ initials }) => {
  const getAvatarColor = (text) => {
    const colors = ["bg-amber-500", "bg-teal-500", "bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-orange-500"]
    const index = text.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <div
      className={`w-8 h-8 ${getAvatarColor(initials)} rounded-full flex items-center justify-center text-white text-xs font-semibold`}
    >
      {initials}
    </div>
  )
}

const TrophyIcon = ({ className = "" }) => (
  <span className={className}><i class="fi fi-ss-trophy"></i></span>
)

const LeaderboardRow = ({ student }) => {
  const isFirst = student.rank === 1
  const isSecond = student.rank === 2
  const isThird = student.rank === 3

  const getRankColor = () => {
    if (isFirst) return "text-amber-500"
    if (isSecond) return "text-green-600"
    if (isThird) return "text-red-600"
    return "text-gray-400"
  }

  const getPointsColor = () => {
    if (isFirst) return "text-amber-500"
    if (isSecond || isThird) return "text-gray-900"
    return "text-gray-400"
  }

  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 rounded-4xl ${
        isFirst ? "bg-amber-100" : "hover:bg-gray-50"
      } transition-colors`}
    >
      {/* Rank - Trophy for 1st, number for others */}
      <span className={`w-6 font-bold ${getRankColor()}`}>
        {isFirst ? <TrophyIcon className="text-amber-500" /> : student.rank}
      </span>

      {/* Avatar */}
      <LeaderboardAvatar initials={student.avatar} />

      {/* Name */}
      <span className={`flex-1 font-medium ${isFirst ? "text-gray-900" : "text-gray-700"}`}>{student.name}</span>

      {/* Points */}
      <span className={`font-semibold ${getPointsColor()}`}>{student.points.toLocaleString()}</span>
    </div>
  )
}

const Leaderboard = () => {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <TrophyIcon className="text-amber-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Leaderboard</h2>
            <p className="text-sm text-gray-500">Top 15 Scholars this week</p>
          </div>
        </div>
        <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">View All</button>
      </div>

      {/* Table Header */}
      <div className="flex items-center gap-4 px-4 py-2 text-xs text-gray-400 uppercase tracking-wider border-b border-gray-100">
        <span className="w-6">#</span>
        <span className="flex-1 ml-6">Student</span>
        <span>Points</span>
      </div>

      {/* Leaderboard List */}
      <div className="mt-2 space-y-1">
        {leaderboardData.map((student) => (
          <LeaderboardRow key={student.rank} student={student} />
        ))}
      </div>
    </section>
  )
}

export default Leaderboard

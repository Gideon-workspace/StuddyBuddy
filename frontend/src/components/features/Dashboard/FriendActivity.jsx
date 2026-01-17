import { friendActivity } from "../../../data/dashboardData"

// Avatar component with specific colors matching the design
const ActivityAvatar = ({ initials }) => {
  const getAvatarColor = (text) => {
    const colorMap = {
      MS: "bg-amber-400",
      SK: "bg-amber-400",
      JM: "bg-pink-400",
      DK: "bg-blue-400",
    }
    return colorMap[text] || "bg-amber-500"
  }

  return (
    <div
      className={`w-9 h-9 ${getAvatarColor(initials)} rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0`}
    >
      {initials}
    </div>
  )
}

const ActivityItem = ({ activity }) => {
  return (
    <div className="flex items-start gap-3 py-2 md:py-3">
      <ActivityAvatar initials={activity.avatar} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-900">{activity.user}</span> {activity.action}{" "}
          <span className="font-semibold text-[#8B8B00]">{activity.highlight}</span>
          {activity.suffix && ` ${activity.suffix}`}
        </p>
        <span className="text-xs text-gray-400">{activity.time}</span>
      </div>
    </div>
  )
}

const FriendActivity = () => {
  return (
    <section className="bg-white rounded-2xl p-4 md:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">Friend Activity</h2>
        <button className="text-sm text-[#8B8B6D] hover:text-gray-700 transition-colors">View All</button>
      </div>

      {/* Activity List */}
      <div className="divide-y divide-gray-100">
        {friendActivity.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  )
}

export default FriendActivity

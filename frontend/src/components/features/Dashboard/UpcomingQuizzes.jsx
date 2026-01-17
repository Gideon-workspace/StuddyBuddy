import { upcomingQuizzes } from "../../../data/dashboardData"


const ListIcon = () => (
  <span className="text-xs"><i class="fi fi-rr-list"></i></span>
)

const ClockIcon = () => (
  <span className="text-xs"><i class="fi fi-ss-clock-five"></i></span>
)

const QuizCard = ({ quiz }) => {
  const isUrgent = quiz.dueType === "urgent"

  return (
    <div className="bg-[#F5F3EE] rounded-2xl p-4 border border-slate-300/80">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-[#8B8B6D] uppercase tracking-wider">{quiz.subject}</span>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            isUrgent ? "bg-red-200 text-red-600" : "bg-green-200 text-[#8B8B6D] "
          }`}
        >
          {quiz.dueDate}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 mb-3">{quiz.title}</h3>

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-xs text-[#8B8B6D] mb-4">
        <span className="flex items-center gap-1">
          <ListIcon />
          {quiz.questionsCount} Questions
        </span>
        <span className="flex items-center gap-1">
          <ClockIcon />
          {quiz.duration} Mins
        </span>
      </div>

      {/* Start Quiz Button */}
      <button className="w-full py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-200">
        Start Quiz
      </button>
    </div>
  )
}

const UpcomingQuizzes = () => {
  return (
    <section className="bg-white rounded-2xl p-5 mb-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
        <i class="fi fi-ss-calendar-clock"></i>
        </span>
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Quizzes</h2>
      </div>

      {/* Quiz Cards */}
      <div className="space-y-4">
        {upcomingQuizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </section>
  )
}

export default UpcomingQuizzes

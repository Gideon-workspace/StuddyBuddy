import { currentCourses } from "../../../data/dashboardData"

const CourseIcon = ({ iconType }) => {
  return <i className={`${iconType} text-2xl mt-1.5`} ></i>}

const ProgressCard = ({ course }) => {
  const statusColors = {
    "on-track": "bg-teal-600 text-white",
    "exam-soon": "bg-red-500 text-white",
    behind: "bg-red-700 text-white",
  }

  const iconBgColors = {
    "on-track": "bg-blue-500/20",
    "exam-soon": "bg-yellow-300/60",
    behind: "bg-red-500",
  }

  return (
    <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm  hover:shadow-md transition-shadow">
      {/* Course Icon */}
      <div className={`w-15 h-15 ${iconBgColors[course.status]} rounded-full flex items-center justify-center`}>
        <CourseIcon iconType={course.iconType} />
      </div>

      {/* Course Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-gray-900">{course.name}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[course.status]}`}>
            {course.statusLabel}
          </span>
        </div>

        {/* Progress Bar - Yellow */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full mb-2 max-w-45">
          <div className="h-full rounded-full bg-yellow-300" style={{ width: `${course.progress}%` }} />
        </div>

        <p className="text-sm text-gray-500">Next: {course.nextTopic}</p>
      </div>
    </div>
  )
}

const CurrentProgress = () => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentCourses.map((course) => (
          <ProgressCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default CurrentProgress

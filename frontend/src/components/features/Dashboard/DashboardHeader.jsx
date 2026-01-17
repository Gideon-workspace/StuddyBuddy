import { userData } from "../../../data/dashboardData"

const DashboardHeader = () => {
  return (
    <header className="mb-8 flex items-start justify-between">
      <div>
        {/* Greeting */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ready to learn, {userData.name}?</h1>

        {/* Streak */}
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-yellow-300 text-xl"><i class="fi fi-ss-flame"></i></span>
          <p className="text-md">
            You're on a {userData.streak}-day study streak! Keep
            it up.
          </p>
        </div>
      </div>

      {/* Notification & Profile */}
      <div className="flex items-center gap-3">
        {/* Notification Button */}
        <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-green-600 hover:bg-gray-50 transition-colors">
          <span><i class="fi fi-ss-bell"></i></span>
        </button>

        {/* Profile Button */}
        <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors">
          {/* ICON: Profile Avatar - Replace with <img src="your-avatar.jpg" /> */}
          <img src="/young-male-student-avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader

"use client"
import { userData } from "../../../data/dashboardData"
import { useSidebar } from "../../../hooks/useSidebar"

const DashboardHeader = () => {
  const { isMobile } = useSidebar()

  return (
    <header className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Ready to learn, {userData.name}?</h1>

        {/* Streak */}
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-yellow-300 text-xl">
            <i className="fi fi-ss-flame"></i>
          </span>
          <p className="text-sm md:text-md">You're on a {userData.streak}-day study streak! Keep it up.</p>
        </div>
      </div>

      {/* Notification & Profile */}
      <div className="flex items-center gap-3">
        {/* Notification Button */}
        <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-green-600 hover:bg-gray-50 transition-colors">
          <span>
            <i className="fi fi-ss-bell"></i>
          </span>
        </button>

        {/* Profile Button */}
        <button className="w-10 h-10 rounded-full overflow-hidden border-2 flex justify-center items-center border-gray-200 hover:border-gray-300 transition-colors">
          <i className="fi fi-ss-user"></i>
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader

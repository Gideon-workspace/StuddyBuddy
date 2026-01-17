"use client"
import { motion } from "framer-motion"

// Dashboard Components
import Sidebar from "../components/features/Dashboard/Sidebar"
import DashboardHeader from "../components/features/Dashboard/DashboardHeader"
import CurrentProgress from "../components/features/Dashboard/CurrentProgress"
import Leaderboard from "../components/features/Dashboard/Leaderboard"
import UpcomingQuizzes from "../components/features/Dashboard/UpcomingQuizzes"
import FriendActivity from "../components/features/Dashboard/FriendActivity"

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F5F3EE] flex"
    >
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Dashboard Header */}
        <DashboardHeader />

        {/* Content Grid */}
        <div className="flex gap-6">
          {/* Left Column - Progress & Leaderboard */}
          <div className="flex-1 max-w-2xl">
            <CurrentProgress />
            <Leaderboard />
          </div>

          {/* Right Column - Quizzes & Activity */}
          <div className="w-80 shrink-0">
            <UpcomingQuizzes />
            <FriendActivity />
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default HomePage

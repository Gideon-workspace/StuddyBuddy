"use client"
import { motion } from "framer-motion"

// Context
import { SidebarProvider } from "../context/SidebarContext"
import { useSidebar } from "../hooks/useSidebar"

// Dashboard Components
import Sidebar from "../components/features/Dashboard/Sidebar"
import MobileHeader from "../components/features/Dashboard/MobileHeader"
import DashboardHeader from "../components/features/Dashboard/DashboardHeader"
import CurrentProgress from "../components/features/Dashboard/CurrentProgress"
import Leaderboard from "../components/features/Dashboard/Leaderboard"
import UpcomingQuizzes from "../components/features/Dashboard/UpcomingQuizzes"
import FriendActivity from "../components/features/Dashboard/FriendActivity"

/**
 * Main content wrapper that responds to sidebar state
 */
const MainContent = () => {
  const { isMobile } = useSidebar()

  return (
    <main className="flex-1 min-w-0 overflow-auto">
      <MobileHeader />

      <div className={`p-4 md:p-8`}>
        {/* Dashboard Header */}
        <DashboardHeader />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Progress & Leaderboard */}
          <div className="flex-1 min-w-0">
            <CurrentProgress />
            <Leaderboard />
          </div>

          {/* Right Column - Quizzes & Activity */}
          <div className="w-full lg:w-80 shrink-0">
            <UpcomingQuizzes />
            <FriendActivity />
          </div>
        </div>
      </div>
    </main>
  )
}

const HomePage = () => {
  return (
    <SidebarProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-[#F5F3EE] flex"
      >
        {/* Left Sidebar - pushes content on desktop, overlays on mobile */}
        <Sidebar />

        {/* Main Content Area */}
        <MainContent />
      </motion.div>
    </SidebarProvider>
  )
}

export default HomePage

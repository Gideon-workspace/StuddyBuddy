"use client"
import { useSidebar } from "../../../hooks/useSidebar"

/**
 * Mobile header with hamburger menu button
 * Only visible on mobile devices
 */
const MobileHeader = () => {
  const { isMobile, toggleSidebar } = useSidebar()

  if (!isMobile) return null

  return (
    <header className="sticky top-0 z-30 bg-[#F5F3EE] border-b border-gray-200 px-4 py-3 flex items-center gap-3">
      <button
        onClick={toggleSidebar}
        className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
        aria-label="Open menu"
      >
        <span className="font-bold text-lg">S</span>
      </button>
      <span className="text-lg font-bold text-gray-900">StuddyBuddy</span>
    </header>
  )
}

export default MobileHeader

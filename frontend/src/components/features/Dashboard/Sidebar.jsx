"use client"
import { useNavigate } from "react-router-dom"
import { chatFriends } from "../../../data/dashboardData"

/**
 * Avatar component for chat friends
 */
const Avatar = ({ initials, size = "md", status = null }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
  }

  const getAvatarColor = (text) => {
    const colorMap = {
      JM: "bg-pink-400",
      DK: "bg-blue-400",
    }
    return colorMap[text] || "bg-amber-500"
  }

  return (
    <div className="relative">
      <div
        className={`${sizeClasses[size]} ${getAvatarColor(initials)} rounded-full flex items-center justify-center text-white font-semibold`}
      >
        {initials}
      </div>
      {status && (
        <span
          className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#FDFCF9] ${
            status === "online" ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      )}
    </div>
  )
}

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <aside className="w-68 bg-[#FDFCF9] border-r border-gray-200 flex flex-col h-screen sticky top-0">
      {/* ============ LOGO ============ */}
      <div className="px-5 py-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <span className="text-lg font-bold text-gray-900">StuddyBuddy</span>
      </div>

      {/* ============ MAIN NAVIGATION ============ */}
      <nav className="px-3 space-y-1">
        {/* Dashboard - Active */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-3xl text-left bg-yellow-300 text-gray-900 font-semibold"
        >
          <span className="text-base"><i class="fi fi-ss-layout-fluid"></i></span>
          <span className="text-sm">Dashboard</span>
        </button>

        {/* My Courses */}
        <button
          onClick={() => navigate("/courses")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-3xl text-left text-gray-600 hover:bg-gray-100"
        >
          <span className="text-base"><i class="fi fi-ss-book-bookmark"></i></span>
          <span className="text-sm">My Courses</span>
        </button>
      </nav>

      {/* ============ STUDY TOOLS ============ */}
      <div className="px-3 mt-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Study Tools</h3>
        <div className="space-y-0.5">
          {/* Summarize PDF */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-3xl text-gray-600 hover:bg-gray-100 text-left">
            <span className="text-base"><i class="fi fi-ss-file-upload"></i></span>
            <span className="text-sm">Summarize PDF</span>
          </button>

          {/* Link Video */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-3xl text-gray-600 hover:bg-gray-100 text-left">
            <span className="text-base"><i class="fi fi-brands-youtube"></i></span>
            <span className="text-sm">Link Video</span>
          </button>

          {/* Web Resources */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-3xl text-gray-600 hover:bg-gray-100 text-left">
            <span className="text-base"><i class="fi fi-rr-globe"></i></span>
            <span className="text-sm">Web Resources</span>
          </button>

          {/* Quiz Gen */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-3xl text-gray-600 hover:bg-gray-100 text-left">
            <span className="text-base"><i class="fi fi-ss-select"></i></span>
            <span className="text-sm">Quiz Gen</span>
          </button>
        </div>
      </div>

      {/* ============ CHAT & FRIENDS ============ */}
      <div className="px-3 mt-6">
        <div className="flex items-center justify-between px-3 mb-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Chat & Friends</h3>
          <button className="text-green-500 hover:text-green-600 text-lg font-bold">+</button>
        </div>
        <div className="space-y-1">
          {chatFriends.map((friend) => (
            <button
              key={friend.id}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-3xl text-gray-600 hover:bg-gray-100 text-left"
            >
              <Avatar initials={friend.avatar} size="sm" status={friend.status} />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{friend.name}</span>
                <span className="text-xs text-gray-400">
                  {friend.status === "online" ? "Online" : `Last seen ${friend.lastSeen}`}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />


      {/* ============ NEW SESSION BUTTON ============ */}
      <div className="px-3 pb-4">
        <button className="w-full flex items-center justify-center gap-2 bg-[#1C1C1E] text-white py-2.5 rounded-3xl text-sm font-medium hover:bg-gray-800">
          <span>+</span>
          <span>New Session</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar

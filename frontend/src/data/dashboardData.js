// Dashboard data - Replace with API calls when connecting to backend
// This file serves as a centralized data source for easy backend integration

export const userData = {
  id: 1,
  name: "Alex",
  streak: 5,
  avatar: null, // Can be a URL to user's profile image
}

export const currentCourses = [
  {
    id: 1,
    name: "Calculus II",
    status: "on-track", // 'on-track' | 'exam-soon' | 'behind'
    statusLabel: "On Track",
    nextTopic: "Integration by Parts",
    iconType: "fi fi-bs-total text-blue-400", 
    color: "blue",
    progress: 65, 
  },
  {
    id: 2,
    name: "Biology 101",
    status: "exam-soon",
    statusLabel: "Exam Soon",
    nextTopic: "Cell Structure Quiz",
    iconType: "fi fi-ss-disease text-yellow-500",
    progress: 40, 
    
  },
]

export const leaderboardData = [
  { rank: 1, name: "Alex R.", points: 2400, avatar: "AR", isCurrentUser: true },
  { rank: 2, name: "Maya S.", points: 2150, avatar: "MS", isCurrentUser: false },
  { rank: 3, name: "Sam K.", points: 1980, avatar: "SK", isCurrentUser: false },
  { rank: 4, name: "Jessica M.", points: 1850, avatar: "JM", isCurrentUser: false },
  { rank: 5, name: "David K.", points: 1720, avatar: "DK", isCurrentUser: false },
  { rank: 6, name: "Sarah L.", points: 1650, avatar: "SL", isCurrentUser: false },
  { rank: 7, name: "Mike T.", points: 1590, avatar: "MT", isCurrentUser: false },
  { rank: 8, name: "Emily W.", points: 1540, avatar: "EW", isCurrentUser: false },
  { rank: 9, name: "Chris P.", points: 1480, avatar: "CP", isCurrentUser: false },
  { rank: 10, name: "Olivia H.", points: 1420, avatar: "OH", isCurrentUser: false },
]

export const upcomingQuizzes = [
  {
    id: 1,
    subject: "CALCULUS II",
    title: "Integration Methods",
    dueDate: "Due Tomorrow",
    dueType: "urgent", // 'urgent' | 'normal'
    questionsCount: 23,
    duration: 30, // minutes
  },
  {
    id: 2,
    subject: "HISTORY",
    title: "Cold War Origins",
    dueDate: "Friday, 3 PM",
    dueType: "normal",
    questionsCount: 15,
    duration: 20,
  },
]

export const friendActivity = [
  {
    id: 1,
    user: "Maya S.",
    avatar: "MS",
    action: "aced the",
    highlight: "Physics",
    suffix: "quiz with a score of 98%!",
    time: "10 mins ago",
  },
  {
    id: 2,
    user: "Sam K.",
    avatar: "SK",
    action: "is studying",
    highlight: "Calculus II",
    suffix: "",
    time: "45 mins ago",
  },
  {
    id: 3,
    user: "Jessica M.",
    avatar: "JM",
    action: "shared a new",
    highlight: "summarization PDF",
    suffix: "",
    time: "2 hours ago",
  },
  {
    id: 4,
    user: "David K.",
    avatar: "DK",
    action: "leveled up to",
    highlight: "Scholar III",
    suffix: "",
    time: "5 hours ago",
  },
]

export const studyTools = [
  { id: 1, name: "Summarize PDF", icon: "📄" },
  { id: 2, name: "Link Video", icon: "🔗" },
  { id: 3, name: "Web Resources", icon: "🌐" },
  { id: 4, name: "Quiz Gen", icon: "❓" },
]

export const chatFriends = [
  { id: 1, name: "Jessica M.", status: "online", avatar: "JM" },
  { id: 2, name: "David K.", status: "offline", lastSeen: "5m", avatar: "DK" },
]

export const navItems = [
  { id: 1, name: "Dashboard", icon: "📊", path: "/dashboard", active: true },
  { id: 2, name: "My Courses", icon: "📚", path: "/courses", active: false },
]

import { Heart } from "lucide-react"
import fs from "fs"
import path from "path"

// 👇 Forces the page to refresh data every time you visit
export const dynamic = "force-dynamic"

// --- 1. DEFINE THE INTERFACES ---
interface RawConfession {
  message: string
  nickname?: string
  faction?: string
  createdAt: string
}

interface Confession {
  id: string
  message: string
  nickname?: string
  faction?: string
  timestamp: Date
}

// --- CUSTOM FACTION ICONS ---
function FireIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  )
}
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  )
}
function DefaultHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

const stickyNoteColors = [
  "bg-[#DDF2FD]",
  "bg-[#D7EDFF]",
  "bg-[#DBEAFE]",
  "bg-[#C5ECFF]",
]
const stickyNoteRotations = [
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-2",
  "rotate-0",
]

export default function ConfessionsPage() {
  const filePath = path.join(process.cwd(), "confessions.json")
  let confessionsData = []

  try {
    const fileContents = fs.readFileSync(filePath, "utf8")
    confessionsData = JSON.parse(fileContents)
  } catch (error) {
    confessionsData = []
  }

  // 2. TYPES ADDED HERE: Added RawConfession and index: number
  const formattedConfessions: Confession[] = confessionsData
    .map((item: RawConfession, index: number) => ({
      id: index.toString(),
      message: item.message,
      nickname: item.nickname,
      faction: item.faction,
      timestamp: new Date(item.createdAt),
    }))
    .reverse()

  const getFactionIcon = (factionName?: string) => {
    switch (factionName) {
      case "Santelmos":
        return <FireIcon className="w-5 h-5 text-orange-600" />
      case "Diwatas":
        return <StarIcon className="w-5 h-5 text-yellow-600" />
      case "Bakunawas":
        return <MoonIcon className="w-5 h-5 text-blue-600" />
      case "Minokawas":
        return <SunIcon className="w-5 h-5 text-yellow-600" />
      default:
        return <DefaultHeartIcon className="w-5 h-5 text-red-500" />
    }
  }

  const formatTimestamp = (date: Date) => {
    const now = new Date()
    const validDate = new Date(date)
    const diff = now.getTime() - validDate.getTime()
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`
    if (minutes > 0) return `${minutes} min${minutes > 1 ? "s" : ""} ago`
    return "Just now"
  }

  return (
    <div className="w-full max-w-350 mx-auto px-6 py-10 bg-white">
      <h1
        className="text-4xl md:text-6xl text-[#4D6B92] mb-12 mt-5 text-center"
        style={{ fontFamily: "Homemade Apple, cursive" }}
      >
        Confessions Board
      </h1>

      {formattedConfessions.length === 0 ? (
        <div className="bg-[#E4F3FF] rounded-lg p-8 text-center text-[#4D6B92] font-tinos">
          No confessions yet. Be the first to share your feelings! 💕
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* 3. TYPE ADDED HERE: confession: Confession */}
          {formattedConfessions.map((confession: Confession, index: number) => {
            const colorClass = stickyNoteColors[index % stickyNoteColors.length]
            const rotationClass =
              stickyNoteRotations[index % stickyNoteRotations.length]

            return (
              <div
                key={confession.id}
                className={`${colorClass} ${rotationClass} rounded-sm shadow-md hover:shadow-xl transition-all p-6 relative hover:scale-105 hover:rotate-0 cursor-default min-h-[220px] flex flex-col`}
                style={{
                  boxShadow:
                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/40 backdrop-blur-sm rounded-sm shadow-sm"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    {getFactionIcon(confession.faction)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-800 text-sm font-tinos">
                      {confession.nickname || "Anonymous"}
                    </div>
                    <div className="text-xs text-gray-500 font-tinos">
                      {formatTimestamp(confession.timestamp)}
                    </div>
                  </div>
                </div>
                <p
                  className="text-gray-800 leading-relaxed text-[15px] flex-1 whitespace-pre-wrap"
                  style={{ fontFamily: "Kalam, cursive", lineHeight: "1.6" }}
                >
                  {confession.message}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

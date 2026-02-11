export function FireIcon({ className }: { className?: string }) {
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

export function StarIcon({ className }: { className?: string }) {
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

export function MoonIcon({ className }: { className?: string }) {
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

export function SunIcon({ className }: { className?: string }) {
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

function HeartIcon({ className }: { className?: string }) {
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

export default function Confess() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-white font-sans p-4">
      <div className="relative flex flex-col min-h-[80vh] items-center justify-center text-center bg-[#E4F3FF] drop-shadow-2xl rounded-lg w-[98%] md:w-[50%] max-w-none p-8">
        <h1 className="text-[#4D6B92] text-xl md:text-2xl lg:text-4xl font-tinos">
          What does your heart have to say, Game Changer?
        </h1>

        <div className="md:flex grid grid-cols-2 gap-3 mt-5 mb-5">
          <button className="flex items-center text-xs md:text-xl gap-3 border-[#213D66] border-2 rounded-full drop-shadow-2xl text-[#213D66] py-2 px-4 font-tinos hover:bg-[#5f8ac5] transition-colors cursor-pointer">
            <FireIcon className="w-4 h-4 " />
            <span>Santelmos</span>
          </button>

          <button className="flex items-center text-xs md:text-xl gap-3 rounded-full drop-shadow-2xl text-[#213D66] border-2 py-2 px-4 font-tinos hover:bg-[#5f8ac5] transition-colors cursor-pointer">
            <StarIcon className="w-4 h-4 " />
            <span>Diwatas</span>
          </button>

          <button className="flex items-center text-xs md:text-xl gap-3 rounded-full drop-shadow-2xl text-[#213D66] border-2 py-2 px-4 font-tinos hover:bg-[#5f8ac5] transition-colors cursor-pointer">
            <MoonIcon className="w-4 h-4 " />
            <span>Bakunawas</span>
          </button>

          <button className="flex items-center text-xs md:text-xl gap-3 rounded-full drop-shadow-2xl text-[#213D66] border-2 py-2 px-4 font-tinos hover:bg-[#5f8ac5] transition-colors cursor-pointer">
            <SunIcon className="w-4 h-4 " />
            <span>Minokawas</span>
          </button>
        </div>

        <div className="mt-4 mb-5 h-px w-16 rounded bg-[#4D6B92] md:w-32"></div>

        <div className="w-full">
          <textarea
            className="bg-white resize-none text-black inset-shadow-sm font-tinos p-5 text-xs md:text-lg w-full h-40 md:h-64 lg:h-50 mb-4"
            placeholder="Pour your heart out anonymously..."
          />

          <p className="text-right text-xs md:text-lg text-black/30 font-tinos mb-5">
            0 Characters
          </p>
        </div>

        <div className="w-full gap-2 flex justify-center items-center flex-col-reverse md:flex-row mb-5">
          <button className="flex border-[#759FD7] text-[#759FD7] items-center text-xs md:text-xl gap-3 rounded-full drop-shadow-2xl border-2 py-2 px-4 font-tinos hover:bg-[#5f8ac5] hover:text-white transition-colors cursor-pointer">
            Cancel
          </button>

          <button className="flex items-center bg-[#759FD7] border-[#759FD7] text-white text-xs md:text-xl gap-3 rounded-full drop-shadow-2xl border-2 py-2 px-4 font-tinos hover:bg-[#5f8ac5] transition-colors cursor-pointer">
            <HeartIcon className="h-4" />
            <span>Send Anonymously</span>
          </button>
        </div>

        <div className="w-full text-black/20 text-xs p-2 font-tinos">
          <p>YOUR MESSAGE IS COMPLETELY ANONYMOUS</p>
        </div>
      </div>
    </div>
  )
}

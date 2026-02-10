import Image from "next/image"
import Link from "next/link"

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

export default function Home() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-white font-sans p-4">
      <div className="relative flex flex-col min-h-[80vh] items-center justify-center text-center bg-[#E4F3FF] drop-shadow-2xl rounded-lg w-[98%] md:w-[85%] max-w-none p-8">
        <div className="absolute top-6 left-6 md:top-10 md:left-50 text-[#A8BDD4] opacity-50 ">
          <HeartIcon className="w-12 h-12" />
        </div>

        <div className="hidden md:block absolute  bottom-6 right-6 md:bottom-10 md:right-50 text-[#A8BDD4] opacity-50 ">
          <HeartIcon className="w-12 h-12" />
        </div>

        <h1 className="text-[#4D6B92] text-4xl md:text-7xl lg:text-6xl font-tinos">
          Anonymous
        </h1>
        <h1 className="text-[#4D6B92] text-4xl md:text-5xl lg:text-6xl font-tinos mb-2">
          Confessions
        </h1>
        <div className="mt-4 h-px w-16 rounded bg-[#4D6B92] md:w-32"></div>
        <p className="text-[#4D6B92] m-6 font-tinos md:text-2xl lg:mx-80">
          Happy Valentines Day Game Changers! Want to share your thoughts to
          your crush or special someone? Submit a confession below!
        </p>

        <Link
          className="flex items-center gap-3 rounded-full bg-[#759FD8] drop-shadow-2xl text-white py-4 px-8 font-tinos hover:bg-[#5f8ac5] transition-colors cursor-pointer"
          href="/confess"
        >
          <HeartIcon className="w-6 h-6" />
          <span>Write a Message</span>
        </Link>

        <p className="text-[#4D6B92] text-xs font-tinos opacity-60 mt-15 mb-5">
          COMPLETELY ANONYMOUS
        </p>
        <div className="flex items-center justify-center gap-4 text-[#A8BDD4]">
          <Image src="/gcc.webp" alt="GCC" width={50} height={50} />
          <span className="text-2xl">X</span>
          <Image src="/idea.webp" alt="IDE.a" width={50} height={50} />
        </div>
      </div>
    </div>
  )
}

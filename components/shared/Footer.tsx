import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaDev, FaHackerrank, FaInstagram, FaLinkedin, FaThreads, FaYoutube } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="max-w-6xl w-full mx-auto border rounded-xl overflow-hidden shadow-2xl bg-secondary group p-3 mt-8">
      <div className="overflow-hidden group p-1.5 flex items-center justify-center space-x-4 border-b border-zinc-800">
        <Link href="https://github.com/aleksanderpalamar" target="_blank" className="flex items-center gap-2">
          <FaGithub className="w-8 h-8 mb-4 border-[1px] border-zinc-700 rounded-md p-1 hover:bg-zinc-700" />
        </Link>
        <Link href="https://dev.to/aleksanderpalamar" target="_blank" className="flex items-center gap-2">
          <FaDev className="w-8 h-8 mb-4 border-[1px] border-zinc-700 rounded-md p-1 hover:bg-zinc-700" />
        </Link>
        <Link href="https://www.linkedin.com/in/aleksanderpalamar" target="_blank" className="flex items-center gap-2">
          <FaLinkedin className="w-8 h-8 mb-4 border-[1px] border-zinc-700 rounded-md p-1 hover:bg-zinc-700" />
        </Link>
        <Link href="https://bsky.app/profile/aleksanderpalamar.dev" target="_blank" className="flex items-center gap-2">
          <SiBluesky className="w-8 h-8 mb-4 border-[1px] border-zinc-700 rounded-md p-1 hover:bg-zinc-700" />
        </Link>
        <Link href="https://www.threads.net/@palamar.dev" target="_blank" className="flex items-center gap-2">
          <FaThreads className="w-8 h-8 mb-4 border-[1px] border-zinc-700 rounded-md p-1 hover:bg-zinc-700" />
        </Link>
      </div>
      <p className="text-center text-xs mt-4">© 2024 Aleksander Palamar. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
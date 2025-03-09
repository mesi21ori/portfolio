import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Meseret Shumet. All rights reserved.
            </span>
          </div>

          <div className="flex space-x-6">
            <Link href="#home" className="text-sm text-gray-400 hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm text-gray-400 hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm text-gray-400 hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-gray-400 hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


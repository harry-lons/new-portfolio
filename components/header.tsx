"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-xl px-4 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl gradient-text ml-2">
          HL
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#home" className="text-sm font-medium hover:text-[#00e0ff] transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-[#d580ff] transition-colors">
            About
          </Link>
          <Link href="/#projects" className="text-sm font-medium hover:text-[#ffb300] transition-colors">
            Projects
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-[#00e0ff] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden text-[#00e0ff]" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl gradient-text ml-2">
              JD
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} className="text-[#00e0ff]">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-8">
            <Link href="/#home" className="text-xl font-medium hover:text-[#00e0ff]" onClick={handleNavClick}>
              Home
            </Link>
            <Link href="/#about" className="text-xl font-medium hover:text-[#d580ff]" onClick={handleNavClick}>
              About
            </Link>
            <Link href="/#projects" className="text-xl font-medium hover:text-[#ffb300]" onClick={handleNavClick}>
              Projects
            </Link>
            <Link href="/#contact" className="text-xl font-medium hover:text-[#00e0ff]" onClick={handleNavClick}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

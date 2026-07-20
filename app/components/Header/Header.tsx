'use client'

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const Header = () => {
  const navLinks = [
    
    { url: "#experiencia", label: "Experiencia" },
    { url: "#projeto", label: "Projeto" },
    { url: "#contato", label: "Contato" },
  ]

  const [active, setActive] = useState("Experiencia")

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex h-14 sm:h-16 items-center justify-between">

          {/* LOGO + NOME */}
          <div className="flex items-center gap-3 text-white">
            <Image
              src="/logoRobot.svg"
              alt="Logo"
              width={40}
              height={40}
              className="sm:w-10 sm:h-10"
              priority
            />
            <span className="hidden sm:inline text-sm sm:text-base font-medium tracking-wide">
              Juliana Mininel
            </span>
          </div>

          {/* NAV */}
          <nav>
           <ul className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => {
                const isActive = active === link.label

                return (
                  <li key={link.url} className="relative">
                    <Link
                      href={link.url}
                      scroll={true}
                      onClick={() => setActive(link.label)}
                      className="relative px-2 py-2 sm:px-4 text-xs sm:text-sm font-medium text-white">

                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-md bg-linear-to-r from-[#ff00cc] to-[#333399]"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}

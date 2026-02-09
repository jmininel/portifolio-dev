'use client'

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const Header = () => {
  const navLinks = [
    { url: "#projeto", label: "Projeto" },
    { url: "#experiencia", label: "Experiencia" },
    { url: "#contato", label: "Contato" },
  ]

  const [active, setActive] = useState("Projeto")

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO + NOME */}
          <div className="flex items-center gap-3 text-white">
            <Image
              src="/logoRobot.svg"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
            <span className="font-medium tracking-wide">
              Juliana Mininel Dev
            </span>
          </div>

          {/* NAV */}
          <nav>
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = active === link.label

                return (
                  <li key={link.url} className="relative">
                    <Link
                      href={link.url}
                      onClick={() => setActive(link.label)}
                      className="relative px-4 py-2 text-sm font-medium text-white"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-md bg-gradient-to-r from-[#ff00cc] to-[#333399]"
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

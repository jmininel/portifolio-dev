'use client'

import Link from "next/link"

import { useState } from "react"
import { motion } from "framer-motion";
export const Header = () => {

  const navLinks = [
    {url:"#projeto", label:"Projeto"},
    {url:"#experiencia", label:"Experiencia"},
    {url:"#contato", label:"Contato"},
  ]

  const [active, setActive] = useState("Projeto")

    return(
       <header className="fixed top-0 left-0 right-0 h-14 bg-black/80 w-full backdrop-blur-lg  ">
        <div className="flex  justify-between container mx-auto px-24 py-4">
         <div>
            <div>Logo</div>
         </div>

         <nav>
            <ul className="flex justify-center items-center gap-10">
               {navLinks.map((link) => {
                const isActive = active === link.label
               
                return (
                  <li key={link.url} className="relative">
                        <Link
                            href={link.url}
                            onClick={() => setActive(link.label)}
                            className="relative px-4 py-4 text-sm font-medium text-white"
                            >

                            {isActive && (
                            <motion.span
                                layoutId="nav-indicator"
                                className="absolute inset-0 rounded-md bg-linear-to-r from-purple-600 to-green-500"
                                transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                         }}
                      />
                    )}

                    {/* Texto */}
                    <span className="relative z-10">
                      {link.label}
                    </span>
                     </Link>
                  </li>
                );
               })}
            </ul>
          </nav>
         </div>
       </header>
    )
}
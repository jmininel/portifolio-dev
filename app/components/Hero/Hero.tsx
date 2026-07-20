"use client"

import FallingText from "../animations/FallingText/FallingText"
import ProfileCard from "../animations/ProfileCard/ProfileCard"
import { motion } from "framer-motion"
import { BsGithub } from "react-icons/bs"

export const Hero = () => {
  return (
    <section className="min-h-screen px-6 pt-24 flex items-center mb-20">
      <div className="container mx-auto grid md:grid-cols-[1.4fr_1fr] gap-16 items-center">


        {/* 🔹 COLUNA DIREITA — CARD + CTA */}
        <aside className="flex flex-col items-center gap-6 w-full max-w-[450px]">

          <ProfileCard
            name="Juliana Mininel"
            title="Frontend Developer"
            handle="jmininel"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/photo.png"
            showUserInfo={false}
            enableTilt
            enableMobileTilt={false}
            showBehindGlow={false}
            innerGradient="transparent"
          />

          <motion.a
            href="https://github.com/jmininel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-center gap-4 w-full py-5 rounded-2xl overflow-hidden cursor-pointer">

            {/* REAL NEON BORDER */}
            <span
              className="absolute inset-0 rounded-2xl border-2 bg-linear-to-r from-[#ff00cc] to-[#333399] shadow-[0_0_10px_#ff00cc,0_0_25px_#ff00cc,0_0_50px_#ff00cc]"/>

            {/* BLUE SIDE GLOW */}
            <span
              className="absolute right-0 h-full w-[45%] bg-[#333399] blur-[70px] opacity-90"/>

            {/* PINK SIDE GLOW */}
            <span
              className="absolute left-0 h-full w-[45%] bg-[#ff00cc] blur-[70px] opacity-90"/>

            {/* INNER DARK */}
            <span
              className="absolute inset-[3px] rounded-2xl bg-[#070707]"/>

            {/* EXTRA LIGHT LINE */}
            <span
              className="absolute inset-0 rounded-2xl shadow-[inset_0_0_18px_rgba(255,255,255,0.15)]"/>

            {/* SHINE */}
            <span
              className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/20 blur-2xl transition-all duration-700 group-hover:left-[120%]"/>

            {/* CONTENT */}
            <BsGithub
              size={28}
              className="relative z-10 text-white drop-shadow-[0_0_12px_white]"/>

            <span
              className="relative z-10 text-2xl font-semibold text-white tracking-wide drop-shadow-[0_0_12px_white]">
              GitHub
            </span>
          </motion.a>

        </aside>

        {/* 🔹 COLUNA ESQUERDA — TEXTO */}
        <div className="flex flex-col gap-2 max-w-xl">

          <header className="flex flex-col gap-1">
            <p className="text-purple-400 text-lg font-medium tracking-wide">
            </p>

            <h1 className="sm:inline text-2xl sm:text-base lg:text-5xl font-bold leading-tight text-white">
              Juliana Mininel
            </h1>

            <div className="flex items-center gap-2 text-2xl lg:text-3xl text-gray-300">
              <span>Frontend Developer</span>
              <span className="w-2 h-2 bg-purple-500 rounded-md animate-pulse" />
            </div>
          </header>

          <p className="text-gray-400 text-lg leading-relaxed">
            Criando experiências digitais incríveis e soluções
            inovadoras através do código.
            Transformo ideias em realidade digital.
          </p>

          <div className="w-full max-w-[700px] h-[300px]">
            <FallingText
              text="React Tailwind Javascript Typescript Next Git GitHub Figma Node SQL Prisma PostgreSQL"
              highlightWords={["React", "Next", "Javascript", "GitHub", "Node", "PostgreSQL"]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem" 
              className="sm:text-4xl"
              mouseConstraintStiffness={0.9}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import FallingText from "../FallingText/FallingText"
import ProfileCard from "../ProfileCard/ProfileCard"

export const Hero = () => {
  return (
    <section className="min-h-screen px-6 pt-24 flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">


         {/* 🔹 COLUNA DIREITA — CARD + CTA */}
        <aside className="flex flex-col items-center gap-6">

          <ProfileCard
            name="Juliana Mininel"
            title="Frontend Developer"
            handle="jmininel"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/Juliana_Mininel.png"
            showUserInfo={false}
            enableTilt
            enableMobileTilt={false}
            showBehindGlow
            behindGlowColor="#7c3aed"
            customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            className="brightness-70 contrast-100 saturate-200"
          />

          <button className="py-5 px-20 bg-amber-300 rounded-xl font-semibold w-[400px]">
            GitHub
          </button>

        </aside>

        {/* 🔹 COLUNA ESQUERDA — TEXTO */}
        <div className="flex flex-col gap-6 max-w-xl">

          <header className="flex flex-col gap-2">
            <p className="text-purple-400 text-lg font-medium tracking-wide">
              Olá, eu sou
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              Juliana Mininel
            </h1>

            <div className="flex items-center gap-2 text-2xl lg:text-3xl text-gray-300">
              <span>Developer</span>
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            </div>
          </header>

          <p className="text-gray-400 text-lg leading-relaxed">
            Apaixonada por criar experiências digitais incríveis e soluções
            inovadoras através do código. Transformo ideias em realidade digital.
          </p>

          <div className="w-full max-w-[700px] h-[400px]">
            <FallingText
              text="React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow."
              highlightWords={["React", "Bits", "animated", "components", "simplify"]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

        </div>

       

      </div>
    </section>
  )
}
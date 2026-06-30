"use client";

import LogoLoop from '../animations/LogoLoop/LogoLoop';

const imageLogos = [
  { src: '/nextjs.svg', alt: 'Next.js', href: 'https://nextjs.org' },
  { src: '/javascript.svg', alt: 'JavaScript', href: 'https://openjsf.org' },
  { src: '/typescript.svg', alt: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { src: '/github.svg', alt: 'GitHub', href: 'https://github.com' },
  { src: '/git.svg', alt: 'Git', href: 'https://git-scm.com' },
  { src: '/figma.svg', alt: 'Figma', href: 'https://www.figma.com' },
  { src: '/nodejs.svg', alt: 'Node.js', href: 'https://nodejs.org/pt-br' },
  { src: '/mysql.svg', alt: 'MySQL', href: 'https://www.mysql.com/' },
  { src: '/postgresql.svg', alt: 'PostgreSQL', href: 'https://www.postgresql.org' },
  { src: '/sql.svg', alt: 'SQL Server', href: 'https://www.microsoft.com/pt-br/sql-server' },
  { src: '/prisma.svg', alt: 'Prisma', href: 'https://www.prisma.io' },
  { src: '/aws.svg', alt: 'AWS', href: 'https://aws.amazon.com/pt' }
];

export const Stack = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="mb-6 max-w-fit rounded-full border border-cyan-200/15 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-200 shadow-sm shadow-cyan-500/10">
          Tecnologias que eu uso com confiança
        </div>

        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Stack técnica</p>
          <h2 className="mt-4 text-lg font-semibold tracking-tight text-white sm:text-2xl">
            Stack de tecnologias para desenvolver aplicações de alta qualidade.
          </h2>
          
        </div>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-white/5 bg-slate-950/85 p-6 shadow-[0_30px_100px_-60px_rgba(14,165,233,0.5)] backdrop-blur-xl">
          <div className="mb-5 rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-100">
            <span className="font-medium text-cyan-200">::: Ferramentas de desenvolvimento :::</span>
          </div>
          <div className="min-h-[260px] rounded-[28px] bg-slate-900/80 p-4 flex items-center justify-center">
            <div className="w-full max-w-5xl">
              <LogoLoop
                logos={imageLogos}
                width="100%"
                speed={95}
                direction="left"
                logoHeight={110}
                gap={64}
                hoverSpeed={28}
                scaleOnHover
                fadeOut
                fadeOutColor="rgba(15, 23, 42, 1)"
                ariaLabel="Technology stack logos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

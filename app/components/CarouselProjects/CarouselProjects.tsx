import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ExternalLink, ArrowUpRight} from "lucide-react";

import { getSelectedRepos } from "@/app/services/Github";
import { BsGithub } from "react-icons/bs";

export const CarouselProjects = async () => {
  const repos = await getSelectedRepos();

  return (
    <section
      id="projeto"
      className="mb-20 scroll-mt-24 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Título da seção */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 bg-linear-to-r from-[#ff00cc] to-[#333399] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Projetos
          </h2>

          <p className="text-lg text-muted-foreground md:text-xl">
            Projetos desenvolvidos com tecnologias modernas
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full">
          <CarouselContent className="-ml-4">
            {repos.map((repo) => (
              <CarouselItem
                key={repo.id}
                className="basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="group relative flex h-full min-h-175 flex-col overflow-hidden
                   border-white/10 bg-[#08090d] p-6 transition-all duration-300 hover:border-[#ff00cc]/60 hover:shadow-[0_0_35px_rgba(255,0,204,0.12)]">

                  {/* Brilho superior */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-linear-to-r from-transparent via-[#ff00cc] to-transparent opacity-70"/>

                  {/* Cabeçalho do projeto */}
                  <div className="mb-5 flex items-start justify-between gap-4">

                    <div className="min-w-0">

                      {/* Label */}
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-[0.25em] text-[#ff00cc]">
                          PROJETO
                        </span>

                        <span className="h-px w-10 bg-gradient-to-r from-[#ff00cc] to-[#333399]" />
                      </div>

                      {/* Nome */}
                      <h3 className="wrap-break-words text-2xl font-bold leading-tight text-white md:text-[26px]">
                        {repo.name}
                      </h3>
                    </div>

                    {/* Link externo */}
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir ${repo.name}`}
                        className="shrink-0 rounded-md p-2 text-[#ff00cc]
                          transition-all duration-300 hover:bg-[#ff00cc]/10 hover:text-[#ff5cdd]">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>

                  {/* Preview */}
                  {repo.gifUrl && (
                    <div
                      className="relative mb-6 aspect-video w-full overflow-hidden
                        rounded-xl border border-[#ff00cc]/30 bg-black shadow-[0_0_25px_rgba(255,0,204,0.08)]">
                      <Image
                        src={repo.gifUrl}
                        alt={`Preview do projeto ${repo.name}`}
                        fill
                        unoptimized
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-[1.02]" />

                      {/* Overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Descrição */}
                  <div className="mb-6 min-h-[100px]">
                    <p className="line-clamp-4 text-base leading-7 text-muted-foreground">
                      {repo.description || "Sem descrição disponível."}
                    </p>
                  </div>

                  {/* Tecnologias */}
                  <div className="mb-8 min-h-[72px]">
                    <div className="flex flex-wrap gap-2">
                      {repo.topics?.map((topic: string) => (
                        <span
                          key={topic}
                          className="
                            rounded-full
                            border
                            border-[#ff00cc]
                            px-4
                            py-1.5
                            text-xs
                            font-medium
                            text-white
                            transition-colors
                            duration-300
                            hover:bg-[#ff00cc]/10">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">

                    {/* GitHub */}
                    <Button
                      asChild
                      className="
                        h-12
                        flex-1
                        rounded-full
                        border
                        border-[#ff00cc]
                        bg-gradient-to-r
                        from-[#ff00cc]
                        to-[#b000ff]
                        text-white
                        shadow-[0_0_20px_rgba(255,0,204,0.15)]
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        hover:shadow-[0_0_30px_rgba(255,0,204,0.3)]" >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <BsGithub className="mr-2 h-5 w-5" />
                        GitHub
                        <ArrowUpRight className="ml-auto h-4 w-4" />
                      </a>
                    </Button>

                    {/* Ver Projeto */}
                    {repo.homepage && (
                      <Button
                        asChild
                        variant="outline"
                        className="h-12 flex-1 rounded-full border-white/30 bg-transparent text-white
                          transition-all duration-300 hover:border-[#ff00cc] hover:bg-[#ff00cc]/5 hover:text-white">
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer" >
                          Ver Projeto
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navegação */}
          <CarouselPrevious
            className="-left-5 border-[#ff00cc]/40 bg-[#08090d] text-white hover:bg-[#ff00cc]/10" />

          <CarouselNext
            className="-right-5 border-[#ff00cc]/40 bg-[#08090d] text-white hover:bg-[#ff00cc]/10" />
        </Carousel>
      </div>
    </section>
  );
};
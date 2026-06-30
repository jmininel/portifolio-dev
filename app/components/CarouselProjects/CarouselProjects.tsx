import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { getSelectedRepos } from "@/app/services/Github"

export const CarouselProjects = async () => {

    const repos = await getSelectedRepos()

    return (
        <section
            id="projeto"
            className="py-10 px-6 mb-20 scroll-mt-24">
            <div>
                <div className="text-center mb-10">
                    <h2 className="text-4xl mb-4 font-bold bg-gradient-to-r from-[#ff00cc] to-[#333399] bg-clip-text text-transparent">
                        Projetos
                    </h2>
                    <p className="text-muted-foreground text-2xl">
                        Projetos pessoais desenvolvidos com tecnologias modernas
                    </p>
                </div>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full max-w-6xl mx-auto">
                    <CarouselContent>
                        {repos.map((repo) => (
                            <CarouselItem
                                key={repo.id}
                                className="basis-full md:basis-1/2 lg:basis-1/3">
                                <Card className="flex flex-col p-6 w-full max-w-sm h-full">

                                    {/* Nome */}
                                    <div className="min-h-[64px] flex items-start">
                                        <h3 className="text-2xl font-bold line-clamp-2">
                                            {repo.name}
                                        </h3>
                                    </div>

                                    {/* Descrição */}
                                    <div className="min-h-[96px] mt-3">
                                        <p className="text-muted-foreground line-clamp-4">
                                            {repo.description || "Sem descrição"}
                                        </p>
                                    </div>

                                    {/* Topics */}
                                    <div className="min-h-[72px] mt-4 flex flex-wrap content-start gap-2">
                                        {repo.topics?.map((topic: string) => (
                                            <div
                                                key={topic}
                                                className="border border-[#ff00cc] rounded-2xl px-4 py-0.5 text-primary text-sm">
                                                {topic}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Botões */}
                                    <div className="mt-auto pt-6 flex items-center justify-between gap-6 flex-wrap">
                                        {/* Grupo 1 */}
                                        <div className="flex gap-3 flex-wrap">
                                            <Button
                                                asChild
                                                variant="outline"
                                                className="px-6 border border-[#333399] hover:border-[#f00eb7]">
                                                <a href={repo.html_url} target="_blank">
                                                    GitHub
                                                </a>
                                            </Button>

                                            {repo.homepage && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="px-6 border border-[#333399] hover:border-[#2a2a7d]">
                                                    <a href={repo.homepage} target="_blank">
                                                        Demo
                                                    </a>
                                                </Button>
                                            )}
                                        </div>

                                        {/* Grupo 2 */}
                                        <div className="flex gap-3 flex-wrap">
                                            <Button
                                                asChild
                                                variant="outline"
                                                className="px-6 border border-[#333399] hover:border-[#2a2a7d]">
                                                <a href={repo.html_url} target="_blank">
                                                    Ver Projeto
                                                </a>
                                            </Button>

                                            {repo.homepage && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    className="px-6 border border-[#333399] hover:border-[#2a2a7d]">
                                                    <a href={repo.homepage} target="_blank">
                                                        Demo
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="border-primary/50 hover:bg-primary/10" />
                    <CarouselNext className="border-primary/50 hover:bg-primary/10" />
                </Carousel>
            </div>
        </section>
    )
}
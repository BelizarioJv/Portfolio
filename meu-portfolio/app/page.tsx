"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import JoaoBelizario from "@/public/JoaoBelizario.jpeg";
import linkedinLogo from "@/public/linkedin.png";
import whatsappLogo from "@/public/whatsapp.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  GitCommit,
  GitBranch,
  Terminal,
  Phone,
  ExternalLink,
  Circle,
  Sun,
  Moon,
} from "lucide-react";
import { STACK } from "@/data/dataPage";
import { useCommits } from "@/hooks/git/useCommits";

// Mock data for commits and stack , vou consumir a API do GitHub depois, mas por enquanto vou usar dados mockados para o portfólio

export default function PortfolioDev() {
  const { setTheme, theme } = useTheme();
  const { data: commits, isLoading, error } = useCommits();

  if (isLoading) return <p>Carregando commits...</p>;
  if (error) return <p>Erro ao carregar commits</p>;

  return (
    <div className="font-body text-ink w-full bg-paper">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-ink/10">
        <div className="md:max-w-6xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
          <span className="font-display font-semibold text-lg flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-accent-blue" />
            joaoBelizario.dev
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-slate font-mono">
            <a href="#projetos" className="hover:text-ink transition-colors">
              projetos
            </a>
            <a href="#about" className="hover:text-ink transition-colors">
              sobre
            </a>
            <a href="#stack" className="hover:text-ink transition-colors">
              stack
            </a>
            <a href="#contato" className="hover:text-ink transition-colors">
              contato
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="/Curriculo_Joao_Victor_Belizario_Dev.pdf"
              download="Curriculo_Joao_Victor_Belizario_Dev.pdf">
              <Button className="bg-accent-blue text-paper hover:bg-ink/90 font-mono text-sm w-full sm:w-auto">
                Ver currículo (PDF)
              </Button>
            </a>
            <Button
              className="rounded-md"
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <Badge className="bg-added/10 text-added border border-added/30 mb-6 font-mono text-xs">
              <Circle className="w-2 h-2 mr-1.5 fill-added text-added" />
              disponível para novos projetos
            </Badge>
            <h1 className="font-display font-semibold text-4xl md:text-5xl leading-[1.2] mb-6">
              João Victor Belizario
              <br />
              <span className="text-accent-blue">desenvolvedor full-stack</span>
            </h1>
            <p className="text-muted-slate text-lg max-w-md mb-8">
              Eu aprendo a construir APIs e produtos web que funcionam de
              verdade, desde o banco de dados até o deploy, sem depender de
              serviços prontos de terceiros
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/BelizarioJv/BelizarioJv"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110">
                <Button
                  size="lg"
                  className="bg-accent-blue hover:bg-accent-blue/90 text-white font-mono">
                  ver projetos
                  <GitCommit className="w-4 h-4 ml-2" />
                </Button>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5531991615017"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-ink/20 text-ink hover:bg-ink/5 font-mono">
                  falar comigo <Phone />
                </Button>
              </a>
            </div>
            <div className="flex gap-10 mt-12 font-mono">
              <div>
                <p className="text-2xl text-accent-blue">2+</p>
                <p className="text-sm text-muted-slate">anos de estudos</p>
              </div>
              <div>
                <p className="text-2xl text-accent-blue">+50</p>
                <p className="text-sm text-muted-slate">
                  repositórios no GitHub
                </p>
              </div>
              <div>
                <p className="text-2xl text-accent-blue">100%</p>
                <p className="text-sm text-muted-slate">focado em aprender</p>
              </div>
            </div>
          </div>

          {/* ASIDE — card estilo terminal */}
          <aside className="md:sticky md:top-24">
            <Card className="bg-ink text-paper border-none rounded-lg overflow-hidden">
              <CardContent className="p-5 font-mono text-sm space-y-3">
                <h1 className=" pl-4 text-accent-blue">joao_belizario</h1>
                <p>
                  <span className="text-added ">$</span> cat status.txt
                </p>
                <p className="pl-4 text-accent-blue">
                  disponível para estagio/Dev.junior
                </p>
                <p>
                  <span className="text-added">$</span> cat location.txt
                </p>
                <p className=" pl-4 text-accent-blue">
                  Belo Horizonte, MG (remoto)/(presencial)
                </p>
                <Separator className="bg-white/10 my-2" />
                <p>
                  <span className="text-added">$</span> ls stack/
                </p>
                <div className="flex flex-wrap gap-2 pl-4">
                  {["Node.js", "Python", "PostgreSQL", "AWS", "Docker"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-accent text-accent-blue p-2 font-mono text-xs">
                        {tech}
                      </Badge>
                    ),
                  )}
                </div>
                <Separator className="bg-white/10 my-2" />
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-ink/5">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">
          {/* ESQUERDA — Mimnha Foto / Card Visual */}
          <aside className="relative flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-square bg-ink rounded-lg overflow-hidden border border-ink/10 shadow-xl group">
              <Image
                src={JoaoBelizario}
                alt="Foto de João Victor Belizario"
                placeholder="blur"
                className="object-cover w-full h-full"
              />
              {/* Detalhe estético no canto da foto */}
              <div className="absolute bottom-3 left-3 bg-ink/80 backdrop-blur-sm px-3 py-1.5 rounded font-mono text-xs text-accent-blue border border-white/10">
                <span className="text-added">$</span> echo "Olá, mundo!"
              </div>
            </div>
          </aside>

          {/* DIREITA — Texto Sobre Mim */}
          <div>
            <Badge className="bg-accent-blue/10 text-accent-blue border border-accent-blue/30 mb-6 font-mono text-xs">
              <GitCommit className="w-2 h-2 mr-1.5 text-accent-blue" />
              root / quem_sou_eu
            </Badge>

            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-[1.2] mb-6">
              Desenvolvendo soluções <br />
              <span className="text-muted-slate">de ponta a ponta</span>
            </h2>

            <div className="text-muted-slate text-base space-y-4 max-w-xl mb-8">
              <p>
                Minha jornada na programação começou pelo desejo de entender
                como a engrenagem funciona por trás dos sistemas ERP´S. Em vez
                de apenas consumir ferramentas prontas, gosto de abrir a caixa
                preta e entender do protocolo HTTP até a persistência dos dados.
              </p>
              <p>
                Focado no ecossistema{" "}
                <span className="text-accent-blue font-mono">Node.js</span> e
                automações com
                <span className="text-accent-blue font-mono"> Python</span>,
                construo arquiteturas backend robustas, modelagem de dados
                eficiente no PostgreSQL e isolamento de ambientes com Docker.
              </p>
              <p>
                Atualmente moro em Belo Horizonte e estou em busca da minha
                primeira oportunidade formal como <strong>Estagiário</strong> ou{" "}
                <strong>Desenvolvedor Júnior</strong>, pronto para contribuir
                com código limpo e aprender com problemas de escala real.
              </p>
            </div>

            {/* Mini grid de soft-skills */}
            <div className="flex gap-10 font-mono border-t border-ink/5 pt-8">
              <div>
                <p className="text-xs text-muted-slate uppercase tracking-wider">
                  Metodologia
                </p>
                <p className="text-sm text-ink font-semibold mt-1">
                  Código Limpo / Autônomo
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-slate uppercase tracking-wider">
                  Foco Atual
                </p>
                <p className="text-sm text-ink font-semibold mt-1">
                  Arquitetura de APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS — carrossel estilo commit log */}
      <section id="projetos" className="bg-accent py-24 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs uppercase text-accent-blue tracking-wide mb-2">
                git log --projetos
              </p>
              <h2 className="font-display font-semibold text-3xl">
                Últimos projetos
              </h2>
            </div>
            <Terminal className="w-8 h-8 text-ink/20 hidden md:block" />
          </div>

          <Carousel>
            <CarouselContent>
              {commits?.map((commit) => (
                <CarouselItem
                  key={commit.sha}
                  className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href={commit.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full">
                    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col p-6">
                        <p className="font-body mb-2 text-base font-semibold text-ink">
                          Commit #{commit.sha.slice(0, 7)}
                        </p>

                        <p className="mb-4 line-clamp-3 text-sm text-muted-slate">
                          {commit.commit.message}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-ink/5 pt-4 text-[11px] text-muted-slate">
                          <span className="truncate max-w-[120px]">
                            @{commit.commit.author.name}
                          </span>

                          <span>
                            {new Date(
                              commit.commit.author.date,
                            ).toLocaleDateString("pt-BR")}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="static mt-6 mr-2 translate-y-0 border-ink/20" />
            <CarouselNext className="static mt-6 translate-y-0 border-ink/20" />
          </Carousel>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="bg-paper py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-semibold text-3xl mb-10">Stack</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {Object.entries(STACK).map(([categoria, techs]) => (
              <div key={categoria}>
                <p className="font-mono text-xs uppercase text-accent-blue tracking-wide mb-4">
                  {categoria}
                </p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-ink/15 text-ink font-mono text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <footer id="contato" className="bg-ink text-paper py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Textos da esquerda */}
          <div>
            <h3 className="font-display font-semibold text-accent-blue text-2xl mb-2">
              Tem um projeto em mente?
            </h3>
            <p className="text-accent-blue text-sm font-mono">
              $ Vamos desenvolver juntos! Escolha o melhor canal para
              conversarmos sobre o seu projeto.
            </p>
          </div>

          {/* Links de contato da direita */}
          <div className="flex gap-6 items-center justify-center md:justify-end">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5531991615017"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110">
              <Image
                src={whatsappLogo}
                alt="Ícone do WhatsApp"
                placeholder="blur"
                className="w-12 h-12 object-contain"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/joaobelizariodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110">
              <Image
                src={linkedinLogo}
                alt="Ícone do LinkedIn"
                placeholder="blur"
                className="w-12 h-12 object-contain"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

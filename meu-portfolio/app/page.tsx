"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import JoaoBelizario from "@/public/JoaoBelizario.jpeg";
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
  Mail,
  ExternalLink,
  Circle,
} from "lucide-react";
import { STACK } from "@/data/dataPage";

// Mock data for commits and stack , vou consumir a API do GitHub depois, mas por enquanto vou usar dados mockados para o portfólio
const COMMITS = [
  {
    hash: "a3f9c1e",
    projeto: "Nimbus Pay — gateway de pagamentos",
    mensagem: "feat: reduz latência do checkout em 40%",
    stack: ["Node.js", "PostgreSQL", "Redis"],
    added: 842,
    removed: 210,
  },
  {
    hash: "7d21b04",
    projeto: "Trilha Saúde — API de agendamento",
    mensagem: "feat: sincroniza agenda de 3 clínicas em tempo real",
    stack: ["Go", "gRPC", "PostgreSQL"],
    added: 1204,
    removed: 88,
  },
  {
    hash: "e88f2a1",
    projeto: "Fluxo Contábil — motor de relatórios",
    mensagem: "perf: reescreve pipeline de exportação, -70% tempo de build",
    stack: ["Python", "Airflow", "S3"],
    added: 640,
    removed: 512,
  },
  {
    hash: "a3f9c1e",
    projeto: "Nimbus Pay — gateway de pagamentos",
    mensagem: "feat: reduz latência do checkout em 40%",
    stack: ["Node.js", "PostgreSQL", "Redis"],
    added: 842,
    removed: 210,
  },
  {
    hash: "a3f9c1e",
    projeto: "Nimbus Pay — gateway de pagamentos",
    mensagem: "feat: reduz latência do checkout em 40%",
    stack: ["Node.js", "PostgreSQL", "Redis"],
    added: 842,
    removed: 210,
  },
  {
    hash: "a3f9c1e",
    projeto: "Nimbus Pay — gateway de pagamentos",
    mensagem: "feat: reduz latência do checkout em 40%",
    stack: ["Node.js", "PostgreSQL", "Redis"],
    added: 842,
    removed: 210,
  },
];

export default function PortfolioDev() {
  const [email, setEmail] = useState("");

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
          <Button className="bg-accent-blue text-paper hover:bg-ink/90 font-mono text-sm px-3 py-2 md:px-4 md:py-2 w-auto md:w-fit">
            Ver currículo (PDF)
          </Button>
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
              <Button
                size="lg"
                className="bg-accent-blue hover:bg-accent-blue/90 text-white font-mono">
                ver projetos
                <GitCommit className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-ink/20 text-ink hover:bg-ink/5 font-mono">
                falar comigo
              </Button>
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
                        className="border-white/20 text-accent-blue font-mono text-xs">
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
      <section id="projetos" className="bg-white py-24 border-y border-ink/10">
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

          <Carousel className="w-full">
            <CarouselContent>
              {COMMITS.map((c) => (
                <CarouselItem
                  key={c.hash}
                  className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border border-ink/10 hover:border-accent-blue/40 transition-colors cursor-pointer">
                    <CardContent className="p-6 flex flex-col h-full font-mono">
                      <div className="flex items-center justify-between mb-4 text-xs text-muted-slate">
                        <span className="flex items-center gap-1.5">
                          <GitCommit className="w-3.5 h-3.5" />
                          {c.hash}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-accent-blue" />
                      </div>
                      <p className="font-body font-semibold text-base mb-1">
                        {c.projeto}
                      </p>
                      <p className="text-sm text-muted-slate mb-4">
                        {c.mensagem}
                      </p>
                      <p className="text-sm mb-4">
                        <span className="text-added">+{c.added}</span>{" "}
                        <span className="text-removed">-{c.removed}</span>
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {c.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-ink/15 text-ink text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="static translate-y-0 mr-2 mt-6 border-ink/20" />
            <CarouselNext className="static translate-y-0 mt-6 border-ink/20" />
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
          <div>
            <h3 className="font-display font-semibold text-accent-blue text-2xl mb-2">
              Tem um projeto em mente?
            </h3>
            <p className="text-accent-blue text-sm font-mono">
              $ Vamos desenvolver juntos! Me mande um e-mail e vamos conversar
              sobre o seu projeto.
            </p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="font-mono bg-white/5 border border-white/15 rounded-md px-4 py-2 text-sm  text-accent-blue placeholder:text-paper/40 focus:outline-none focus:border-accent-blue md:w-64"
              />
              <Button className="bg-added hover:bg-added/90 text-white font-mono shrink-0">
                enviar
              </Button>
            </div>
          </form>
        </div>
        <Separator className="bg-white/10 my-10 max-w-6xl mx-auto" />
        <p className="max-w-6xl mx-auto px-6 text-xs text-accent-blue font-mono">
          joaoBelizario.dev — desenvolvedor full-stack. Belo Horizonte, Brasil.
        </p>
      </footer>
    </div>
  );
}

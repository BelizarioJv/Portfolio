"use client";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Typewriter from "typewriter-effect";
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
  Globe,
  Star,
  CircleAlert,
  GitCommit,
  GitBranch,
  Terminal,
  Phone,
  ExternalLink,
  Circle,
  Sun,
  Moon,
} from "lucide-react";
import { STACK, TRANSLATIONS } from "@/dictionary/dataPage";
import { Language } from "@/types/Language";
import { useCommits } from "@/hooks/git/useCommits";
import { useRepo } from "@/hooks/git/useRepo";

export default function PortfolioDev() {
  const { setTheme, theme } = useTheme();
  const { data: commits, isLoading, error } = useCommits();
  const [lang, setLang] = useState<Language>("pt");
  const { data: repo, isLoading: isLoadingRepo, error: errorRepo } = useRepo();

  const t = TRANSLATIONS[lang];

  return (
    <div className="font-body text-ink w-full bg-paper">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-ink/10">
        <div className="md:max-w-6xl mx-auto flex items-center justify-between px-4 sm:flex flex-col">
          {/* Brand Logo */}
          <span className="font-display font-semibold text-base sm:text-lg flex items-center gap-1.5 sm:gap-2 shrink-0">
            <GitBranch className="w-4 h-4 text-accent-blue" />
            joaoBelizario.dev
          </span>

          {/* Links (Desktop apenas) */}
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

          {/* Ações (Ajustado para Mobile e Desktop) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Botão Currículo */}
            <a
              href="/Curriculo_Joao_Victor_Belizario_Dev.pdf"
              download="Curriculo_Joao_Victor_Belizario_Dev.pdf"
              className="shrink-0">
              <Button className="bg-accent-blue text-paper hover:bg-ink/90 font-mono text-xs sm:text-sm px-2.5 sm:px-4 py-1.5">
                <span className="hidden sm:inline">Ver currículo (PDF)</span>
                <span className="sm:hidden">Currículo</span>
              </Button>
            </a>

            {/* Botão Tema */}
            <Button
              className="rounded-md shrink-0 h-8 w-8 sm:h-9 sm:w-9"
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            {/* Seletor de Idioma */}
            <div className="flex items-center gap-1 sm:gap-1.5 bg-ink/40 border border-slate-800 rounded-lg p-0.5 sm:p-1 font-mono text-[10px] sm:text-xs shrink-0">
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 ml-0.5 sm:ml-1 hidden xs:block" />
              <button
                onClick={() => setLang("pt")}
                className={`px-1.5 sm:px-2 py-0.5 rounded transition-colors ${
                  lang === "pt"
                    ? "bg-accent-blue text-black font-bold"
                    : "text-slate-400 hover:text-white"
                }`}>
                PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-1.5 sm:px-2 py-0.5 rounded transition-colors ${
                  lang === "en"
                    ? "bg-accent-blue text-black font-bold"
                    : "text-slate-400 hover:text-white"
                }`}>
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <Badge className="bg-added/10 text-added border border-added/30 mb-6 font-mono text-xs">
              <Circle className="w-2 h-2 mr-1.5 fill-added text-added" />
              {t.hero.subtitle}
            </Badge>
            <p className="font-display font-semibold text-4xl md:text-5xl leading-[1.2] mb-6">
              <span className="inline-block overflow-hidden whitespace-wrap border-r-4 border-accent-blue animate-typing animate-blink pr-2">
                <Typewriter
                  options={{
                    strings: [
                      'João Victor Belizario, <span class="text-accent-blue">desenvolvedor full-stack</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    cursor: "|",
                  }}
                />
              </span>
            </p>
            <p className="text-muted-slate text-lg max-w-md mb-8">
              {t.hero.description}
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
                  {t.hero.ctaProjects}
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
                  {t.hero.ctaContact} <Phone />
                </Button>
              </a>
            </div>
            <div className="flex gap-10 mt-12 font-mono">
              <div>
                <p className="text-2xl text-accent-blue">2+</p>
                <p className="text-sm text-muted-slate">
                  {t.hero.aboutContent1}
                </p>
              </div>
              <div>
                <p className="text-2xl text-accent-blue">+50</p>
                <p className="text-sm text-muted-slate">
                  {t.hero.aboutContent2}
                </p>
              </div>
              <div>
                <p className="text-2xl text-accent-blue">100%</p>
                <p className="text-sm text-muted-slate">
                  {t.hero.aboutContent3}
                </p>
              </div>
            </div>
          </div>

          {/* ASIDE — card estilo terminal */}
          <aside className="md:sticky md:top-24">
            <Card className="bg-accent text-paper border-none rounded-lg overflow-hidden">
              <CardContent className="p-5 font-mono text-sm space-y-3">
                <h1 className=" pl-4 text-accent-blue">joao_belizario</h1>
                <p className="text-accent-foreground">
                  <span className="text-added ">$</span> cat status.txt
                </p>
                <p className="pl-4 text-accent-blue">{t.status.available}</p>
                <p className="text-accent-foreground">
                  <span className="text-added">$</span> cat location.txt
                </p>
                <p className=" pl-4 text-accent-blue">{t.status.location}</p>
                <Separator className="bg-white/10 my-2" />
                <p className="text-accent-foreground">
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
          {/* ESQUERDA — Minha Foto / Card Visual */}
          <aside className="relative flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-square bg-ink rounded-lg overflow-hidden border border-ink/10 shadow-xl group">
              <Image
                src={JoaoBelizario}
                alt="Foto de João Victor Belizario"
                placeholder="blur"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-ink/80 backdrop-blur-sm px-3 py-1.5 rounded font-mono text-xs text-accent-blue border border-white/10">
                <span className="text-emerald-500">$</span> echo "Olá, mundo!"
              </div>
            </div>
          </aside>

          {/* DIREITA — Texto Sobre Mim */}
          <div>
            <Badge className="bg-accent-blue/10 text-accent-blue border border-accent-blue/30 mb-6 font-mono text-xs px-3 py-1">
              <GitCommit className="w-3 h-3 mr-1.5 text-accent-blue" />
              {t.about.badge}
            </Badge>

            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-[1.2] mb-6">
              {t.about.title} <br />
              <span className="text-muted-slate">{t.about.titleAccent}</span>
            </h2>

            <div className="text-muted-slate text-base space-y-4 max-w-xl mb-8">
              <p>{t.about.p1}</p>
              <p>
                {lang === "pt" ? "Focado no ecossistema " : "Focused on the "}
                <span className="text-accent-blue font-mono font-medium">
                  Node.js
                </span>
                {lang === "pt" ? " e automações com " : " ecosystem and "}
                <span className="text-accent-blue font-mono font-medium">
                  {" "}
                  Python
                </span>
                ,{t.about.p2.split("Python")[1] || t.about.p2}
              </p>
              <p>{t.about.p3}</p>
            </div>

            {/* Mini grid de soft-skills */}
            <div className="flex flex-wrap gap-10 font-mono border-t border-ink/5 pt-8">
              <div>
                <p className="text-[10px] text-muted-slate uppercase tracking-[0.15em] mb-1">
                  {t.about.labelMethod}
                </p>
                <p className="text-sm text-ink font-semibold">
                  {t.about.valMethod}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-muted-slate uppercase tracking-[0.15em] mb-1">
                  {t.about.labelFocus}
                </p>
                <p className="text-sm text-ink font-semibold">
                  {t.about.valFocus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS — card estilo GitHub */}
      <section id="projetos" className="bg-accent py-24 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Cabeçalho */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs uppercase text-accent-blue tracking-wide mb-2">
                git show --repo:senzalas-bar
              </p>
              <h2 className="font-display font-semibold text-3xl">
                {t.projectRepo.title}
              </h2>
            </div>
            <Terminal className="w-8 h-8 text-ink/20 hidden md:block" />
          </div>

          {isLoadingRepo ? (
            <div className="text-center py-12 font-mono text-sm text-muted-slate animate-pulse">
              Carregando dados do repositório...
            </div>
          ) : errorRepo ? (
            <div className="text-center py-12 font-mono text-sm text-destructive">
              Erro ao carregar dados do GitHub.
            </div>
          ) : repo ? (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-2xl mx-auto group">
              <Card className="transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg border-ink/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex flex-col p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-mono text-xl font-bold text-ink group-hover:text-accent-blue transition-colors flex items-center gap-2">
                        {repo.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-xs text-muted-slate font-mono mt-1">
                        {repo.full_name}
                      </p>
                    </div>
                    {repo.language && (
                      <span className="px-3 py-1 bg-ink/5 rounded-full text-xs font-mono text-ink/80 border border-ink/10">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <p className="mb-8 font-body text-sm leading-relaxed text-muted-slate">
                    {repo.description ||
                      "Nenhuma descrição fornecida para este repositório."}
                  </p>
                  <div className="mt-auto flex items-center gap-6 border-t border-ink/5 pt-6 font-mono text-xs text-muted-slate">
                    <div className="flex items-center gap-1.5 hover:text-ink transition-colors">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500/10" />
                      <span>{repo.stargazers_count} stars</span>
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-ink transition-colors">
                      <span>{repo.forks_count} forks</span>
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-ink transition-colors">
                      <CircleAlert className="w-4 h-4 text-emerald-500" />
                      <span>{repo.open_issues_count} issues</span>
                    </div>
                    <span className="ml-auto text-[10px] opacity-60 hidden sm:inline">
                      @{repo.owner?.login}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ) : null}
        </div>
      </section>

      {/* PROJETOS — carrossel estilo commit  */}
      <section id="projetos" className="bg-accent py-24 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs uppercase text-accent-blue tracking-wide mb-2">
                git log --projetoSenzalasBar
              </p>
              <h2 className="font-display font-semibold text-3xl">
                {t.projectCommit.title}
              </h2>
            </div>
            <Terminal className="w-8 h-8 text-ink/20 hidden md:block" />
          </div>

          {/* Tratamento isolado para os COMMITS */}
          {isLoading ? (
            <div className="text-center py-12 font-mono text-sm text-muted-slate animate-pulse">
              Carregando commits...
            </div>
          ) : error ? (
            <div className="text-center py-12 font-mono text-sm text-destructive">
              Erro ao carregar commits do GitHub.
            </div>
          ) : (
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
                            <span className="truncate max-w-120px">
                              @{commit.commit.author?.name}
                            </span>
                            <span>
                              {new Date(
                                commit.commit.author?.date,
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
          )}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="bg-paper py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-semibold text-3xl mb-10">Stack´s</h2>
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
      <footer id="contato" className="bg-accent text-paper py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Textos da esquerda */}
          <div>
            <h3 className="font-display font-semibold text-accent-blue text-2xl mb-2">
              {t.footer.title}
            </h3>
            <p className="text-accent-blue text-sm font-mono">
              {t.footer.discription}
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

export const STACK = {
  Backend: [
    "Node.js",
    "Python",
    "PostgreSQL",
    "Prisma",
    "SQL",
    "Express.js",
    "Supabase",
  ],
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Tanstack Query",
    "Zod",
    "React Hook Form",
  ],
  Infra: ["Docker", "AWS", "GitHub Actions"],
};

export const TRANSLATIONS = {
  pt: {
    hero: {
      subtitle: "desenvolvedor full-stack",
      description:
        "Eu aprendo a construir APIs e produtos web que funcionam de verdade...",
      ctaProjects: "Ver projetos",
      ctaContact: "Falar comigo",
      aboutContent1: "anos de estudos",
      aboutContent2: "repositorios no github",
      aboutContent3: "focado em aprender",
    },
    status: {
      available: "disponível para estágio/Dev.junior",
      location: "Belo Horizonte, MG (remoto)/(presencial)",
    },
    about: {
      badge: "root / quem_sou_eu",
      title: "Desenvolvendo soluções",
      titleAccent: "de ponta a ponta",
      p1: "Minha jornada na programação começou pelo desejo de entender como a engrenagem funciona por trás dos sistemas ERP´S. Em vez de apenas consumir ferramentas prontas, gosto de abrir a caixa preta e entender do protocolo HTTP até a persistência dos dados.",
      p2: "Focado no ecossistema Node.js e automações com Python, construo arquiteturas backend robustas, modelagem de dados eficiente no PostgreSQL e isolamento de ambientes com Docker.",
      p3: "Atualmente moro em Belo Horizonte e estou em busca da minha primeira oportunidade formal como Estagiário ou Desenvolvedor Júnior, pronto para contribuir com código limpo e aprender com problemas de escala real.",
      labelMethod: "Metodologia",
      valMethod: "Código Limpo / Autônomo",
      labelFocus: "Foco Atual",
      valFocus: "Arquitetura de APIs",
    },
    projectRepo: {
      title: "Projeto favorito : Senzalas Bar",
    },
    projectCommit: {
      title: "Ultimos commits do projeto",
    },
    footer: {
      title: "Tem um projeto em mente?",
      discription:
        "$ Vamos desenvolver juntos! Escolha o melhor canal para conversarmos sobre o seu projeto.",
    },
  },
  en: {
    hero: {
      title: "John Victor Belizario",
      subtitle: "full-stack developer",
      description:
        "I learn to build APIs and web products that actually work...",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      aboutContent1: "years of study",
      aboutContent2: "gitHub repositories",
      aboutContent3: "focused on learning",
    },
    status: {
      available: "available for internship/Junior Dev",
      location: "Belo Horizonte, MG (remote)/(on-site)",
    },
    about: {
      badge: "root / who_am_i",
      title: "Developing solutions",
      titleAccent: "from end to end",
      p1: "My programming journey began with a desire to understand how the gears work behind ERP systems. Instead of just consuming ready-made tools, I like to open the black box and understand everything from the HTTP protocol to data persistence.",
      p2: "Focused on the Node.js ecosystem and Python automation, I build robust backend architectures, efficient data modeling in PostgreSQL, and environment isolation with Docker.",
      p3: "I currently live in Belo Horizonte and am looking for my first formal opportunity as an Intern or Junior Developer, ready to contribute with clean code and learn from real-scale problems.",
      labelMethod: "Methodology",
      valMethod: "Clean Code / Autonomous",
      labelFocus: "Current Focus",
      valFocus: "API Architecture",
    },
    projectRepo: {
      title: "Favorite project: Senzalas Bar",
    },
    projectCommit: {
      title: "Latest project commits",
    },
    footer: {
      title: "Do you have a project in mind?",
      discription:
        "$ Let's build something together! Choose the best channel to discuss your project.",
    },
  },
};

export type Language = "pt" | "en";

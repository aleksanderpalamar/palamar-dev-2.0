interface Props {
  lang: string;
}

type Texts = {
  [key: string]: {
    name?: string;
    title?: string;
    description?: string;
    banner?: {
      role?: string;
      contact?: string;
      contactPlaceholder?: string;
      send?: string;
    };
    download?: string;
    role?: string;
    status?: string;
    about?: {
      title?: string;
      description?: string;
      phrase?: string;
      more?: string;
    };
    projects?: {
      title?: string;
      description?: string;
    };
    contact?: string;
  };
};

export const getText = (lang: Props["lang"]) => {
  const texts = {
    pt: {
      name: "Olá, eu sou PalamarDev 👋",
      title: "Sobre mim",
      description: `
              Meu nome é Aleksander Palamar, mais conhecido como Palamar.
              Sou programador Full-Stack em média 5 anos de experiência,
              com essas tecnologias: JavaScript, TypeScript, React, Node.js, Python e Golang.
              Ao longo da minha trajetória como desenvolvedor, adquiri experiência nas metodologias ágeis como Scrum e Kanban.
              Estou sempre aberto a novos desafios e tenho facilidade para aprender novas tecnologias.
              Além disso gosto de desenvolver projetos pessoais e colaborar com equipes.
      `,
      banner: {
        role: "Engenheiro de Software",
        contact: "Contato",
        contactPlaceholder: "Digite sua mensagem aqui 👇",
        send: "Enviar"
      },
      download: "Currículo (PDF)",
      role: "Desenvolvedor Full-Stack",
      phrase: "Sigo resolvendo problemas e impactando a vida das pessoas através do código.",
      about: {
        title: "Sobre mim",
        description: "Tecnologias favoritas",
        phrase: "Sigo resolvendo problemas e impactando a vida das pessoas através do código.",
        more: "Mais sobre mim"
      },
      projects: {
        title: "Projetos",
        description: "Mais projetos"
      },
      contact: "Contato"
    },
    en: {
      name: "Hello, I'm PalamarDev 👋",
      title: "About me",
      description: `
              My name is Aleksander Palamar, known as Palamar.
              I am a Full-Stack developer with over 5 years of experience,
              with these technologies: JavaScript, TypeScript, React, Node.js, Python and Golang.
              Alongside my professional journey, I have experience in agile methodologies such as Scrum and Kanban.
              I am always open to new challenges and I have a good ability to learn new technologies.
            `,
      banner: {
        role: "Software Engineer",
        contact: "Lets Talk",
        contactPlaceholder: "Type your message here 👇",
        send: "Send"
      },
      download: "Resume (PDF)",
      role: "Full-Stack Software Engineer",
      phrase: "I keep solving problems and impacting people's lives through code.",
      about: {
        title: "About me",
        description: "My Stacks favorites",
        phrase: "I keep solving problems and impacting people's lives through code.",
        more: "More about me"
      },
      projects: {
        title: "Projects",
        description: "More projects"
      },
      contact: "Contact"
    }
  } as Texts;
  return texts[lang] || texts.en;
};

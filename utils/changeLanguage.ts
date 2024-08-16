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
    contact?: {
      title?: string;
      description?: string;
      placeholder?: string;
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      send?: string;
    };
  };
};

export const getText = (lang: Props["lang"]) => {
  const texts = {
    pt: {
      name: "Olá, eu sou Palamar 👋",
      title: "Sobre mim",
      description: `
              Meu nome é Aleksander Palamar, mais conhecido como Palamar.
              Sou programador Full-Stack em média 6 anos de experiência,
              com essas tecnologias: JavaScript, TypeScript, React, Node.js, Python e Golang.
              Ao longo da minha trajetória como desenvolvedor, adquiri experiência nas metodologias ágeis como Scrum e Kanban.
              Estou sempre aberto a novos desafios e tenho facilidade para aprender novas tecnologias.
              Além disso gosto de desenvolver projetos pessoais e colaborar com equipes.
      `,
      banner: {
        role: "Engenheiro de Software",
        contact: "Vamos conversar!",
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
      contact: {
        title: "Contato",
        description: "Tem alguma ideia para o projeto, sinta-se a vontade para me contatar.",
        placeholder: "Digite sua mensagem aqui 👇",
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        message: "Mensagem",
        send: "Enviar"
      },
    },
    en: {
      name: "Hello, I'm Palamar 👋",
      title: "About me",
      description: `
              My name is Aleksander Palamar, known as Palamar.
              I am a Full-Stack developer with over 6 years of experience,
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
      contact: {
        title: "Contact",
        description: "Have an idea for the project, feel free to contact me.",
        placeholder: "Type your message here 👇",
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send"
      },
    }
  } as Texts;
  return texts[lang] || texts.en;
};

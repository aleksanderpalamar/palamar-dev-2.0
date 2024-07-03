interface Props {
  lang: string;
}

type Texts = {
  [key: string]: {
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
      title: "Sobre mim",
      description: `
              Eu sou um engenheiro de software e desenvolvedor full-stack.
              Sou apaixonado por construir soluções de software escaláveis e eficientes.
              Tenho experiência em várias linguagens de programação e tecnologias,
              incluindo JavaScript, TypeScript, React e Node.js.
              Além disso, sou familiarizado com frameworks e bibliotecas populares como
              Next.js, Redux e React, entre outras.
              Sou um forte defensor da aprendizagem contínua e melhoria.
              Gosto de me manter atualizado com as últimas tendências e tecnologias,
              e estou sempre procurando por novos jeitos de melhorar minhas habilidades e conhecimentos.
              Sou comprometido a ser um ativo na comunidade de desenvolvimento de software e contribuir
              para o crescimento e sucesso da indústria.
            `,
      banner: {
        role: "Desenvolvedor Full-Stack",
        contact: "Contato",
        contactPlaceholder: "Digite sua mensagem aqui 👇",
        send: "Enviar",
      },
      download: "Currículo (PDF)",
      role: "Desenvolvedor Full-Stack",
      phrase: "Unindo design e código, sigo criando projetos únicos.",
      about: {
        title: "Sobre mim",
        description: "Tecnologias favoritas",
        phrase: "Unindo design e código, sigo criando projetos únicos.",
        more: "Mais sobre mim",
      },
      projects: {
        title: "Projetos",
        description: "Mais projetos",
      },
      contact: "Contato",
    },
    en: {
      title: "About me",
      description: `
              I am a full-stack software engineer.
              I am passionate about building scalable and efficient software solutions.
              I have experience in various programming languages and technologies,
              including JavaScript, TypeScript, React, and Node.js.
              In addition, I am familiar with popular frameworks and libraries such as
              Next.js, Redux, and React, among others.
              I am a strong advocate for continuous learning and improvement. 
              I enjoy staying up-to-date with the latest trends and technologies,
              and I am always looking for new ways to improve my skills and knowledge.
              I am committed to being an active member of the software development community and contributing
              to the growth and success of the industry.
            `,
      banner: {
        role: "Full-Stack Software Engineer",
        contact: "Lets Talk",
        contactPlaceholder: "Type your message here 👇",
        send: "Send",
      },
      download: "Resume (PDF)",
      role: "Full-Stack Software Engineer",
      phrase: "Combining design and code, I am creating unique projects.",
      about: {
        title: "About me",
        description: "My Stacks favorites",
        phrase: "Combining design and code, I am creating unique projects.",
        more: "More about me",
      },
      projects: {
        title: "Projects",
        description: "More projects",
      },
      contact: "Contact",
    },
  } as Texts;
  return texts[lang] || texts.en;
};
interface Props {
  lang: string;
}

type Texts = {
  [key: string]: {
    title: string;
    description: string;
    download: string;
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
      download: "Currículo (PDF)",
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
      download: "Resume (PDF)",
    },
  } as Texts;
  return texts[lang] || texts.en;
};
import { Contact } from "lucide-react";
import Heading from "../Heading";
import MaxContainer from "../MaxContainer";
import { ButtonAboutMe } from "@/components/ui/button-aboutme";

const Tags = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
        JavaScript
      </span>
      <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
        TypeScript
      </span>
      <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
        ReactJS
      </span>
      <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
        NextJS
      </span>
      <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
        TailwindCSS
      </span>
      <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
        NodeJS
      </span>
      <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
        Golang
      </span>
      <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
        Python
      </span>
    </div>
  )
}

const AboutSection = () => {
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-10 lg:pt-20">
      <Heading text="About me" icon={Contact} />
      <div className="flex flex-col gap-3 flex-1">
        <p className="italic text-xs md:text-sm leading-6 md:leading-7 font-bold text-muted-foreground border-l-2 border-violet-500 bg-violet-500/10 p-2">
          Unindo design e código, sigo criando projetos únicos.
        </p>
        <p className="text-xs md:text-sm leading-6 md:leading-7 font-normal text-muted-foreground">
          My favorite technologies:
        </p>
        <Tags />
        <ButtonAboutMe lang="en" />
      </div>
    </MaxContainer>
  )
}

export default AboutSection;
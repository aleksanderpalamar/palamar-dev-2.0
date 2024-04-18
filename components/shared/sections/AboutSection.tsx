import { Contact } from "lucide-react";
import Heading from "../Heading";
import MaxContainer from "../MaxContainer";

const AboutSection = () => {
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-10 lg:pt-20">
      <Heading text="About me" icon={Contact}/>
      <div className="flex flex-col gap-3 flex-1">
        <p className="text-xs md:text-sm leading-6 md:leading-7 font-normal text-muted-foreground">
          Hi there, I&apos;m a web developer passionate about building
          visually captivating user interfaces and cutting-edge web
          applications. My specializing in{" "}
          <span className="tracking-widest uppercase text-foreground font-semibold">, {" "}
            HTML
          </span>, {" "}
          <span className="tracking-widest uppercase text-foreground font-semibold">
           CSS 
          </span>, {" "}
          <span className="tracking-widest uppercase text-foreground font-semibold">
            JavaScript
          </span>, {" "}
          <span className="tracking-widest uppercase text-foreground font-semibold">
            ReactJS
          </span>, {" "}
          <span className="tracking-widest uppercase text-foreground font-semibold">
            TypeScript
          </span>, {" "}
          <span className="tracking-widest uppercase text-foreground font-semibold">
            NextJS
          </span>, {" "}
          <span className="tracking-widest uppercase text-foreground font-semibold">
            TailwindCSS
          </span>, and {" "}
          <span className="tracking-widest uppercase text-foreground font-semibold">
            Linux
          </span>
          , I excel in merging functionality with design
        </p>
        <p className="text-xs md:text-sm leading-6 md:leading-7 font-normal text-muted-foreground">
          I enjoy collaborating in any teams, translating abstract concepts into
          beautiful code, and pushing the boundaries of technology—whether
          
          to improve user interfaces. Aside from coding, my hobbies include
          reading, playing games on PC and watching movies/series.
        </p>
        <p className="text-xs md:text-sm leading-6 md:leading-7 font-normal text-muted-foreground">
          Let&apos;s connect and create something extraordinary together. Feel
          free to reach out—I&apos;d love to chat!
        </p>
      </div>
    </MaxContainer>
  )
}

export default AboutSection;
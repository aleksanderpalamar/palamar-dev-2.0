import { Contact } from "lucide-react";
import Heading from "../Heading";
import MaxContainer from "../MaxContainer";
import { ButtonAboutMe } from "@/components/ui/button-aboutme";
import { getText } from "@/utils/changeLanguage";
import { useLanguage } from "@/context/LanguageContext";
import Banner from "../Banner";

const AboutSection = () => {
  const { language } = useLanguage();
  const text = getText(language)
  return (
    <MaxContainer className="max-w-6xl flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-10 lg:pt-20">
      <Heading text={text.about?.title} icon={Contact} />
      <div className="flex flex-col items-center lg:items-start gap-1 md:gap-2">
        <Banner />
        <ButtonAboutMe lang="en" />
      </div>
    </MaxContainer>
  )
}

export default AboutSection;
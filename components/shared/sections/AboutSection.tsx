import { ButtonAboutMe } from "@/components/ui/button-aboutme";
import { getText } from "@/utils/changeLanguage";
import { useLanguage } from "@/context/LanguageContext";
import Banner from "../Banner";

const AboutSection = () => {
  const { language } = useLanguage();
  const text = getText(language)
  return (
    <section className="container px-4 py-16 max-w-6xl mx-auto">
      <div className="flex flex-col space-y-4">
        <Banner />
      </div>
    </section>
  )
}

export default AboutSection;
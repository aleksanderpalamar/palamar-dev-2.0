import Image from "next/image";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useLanguage } from "@/context/LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <header className="sticky top-0 z-50 shadow-sm h-full bg-zinc-950 w-full border-b border-zinc-800 p-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                width={100}
                height={100}
                className="h-20 w-20 rounded-full"
                src="/images/favicon.png"
                alt="PalamarDev"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-3xl font-medium text-white">
                PalamarDev
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
              <Switch
                onCheckedChange={toggleLanguage}
                checked={language === "pt"}
              />
              <Label htmlFor="language">
                {language === "pt" ? "PT" : "EN"}
              </Label>
            </div>
        </div>
      </div>    
    </header>
  )
};

export default Header;
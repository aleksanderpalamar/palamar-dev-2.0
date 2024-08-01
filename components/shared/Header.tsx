"use client";

import { useIsMobile } from "@/hooks/use-ismobile";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { Avatar } from "./Avatar";

const Header = () => {
  const { isMobile } = useIsMobile();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 shadow-sm h-full bg-background w-full border-b border-zinc-800 p-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Avatar />
            {!isMobile &&
              <h1 
                className="text-2xl font-extrabold text-zinc-100 tracking-wide ml-2"
              >
                PalamarDev
              </h1>
            }
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
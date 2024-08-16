"use client";

import { useIsMobile } from "@/hooks/use-ismobile";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { getText } from "@/utils/changeLanguage";
import Image from "next/image";
import NavigationMenu from "./navigation-Menu";

const Header = () => {
  const { isMobile } = useIsMobile();
  const { language, toggleLanguage } = useLanguage();

  const text = getText(language)

  return (
    <header className="bg-zinc-950 shadow-md py-4 text-white border-b border-zinc-800">
      <div className="container px-4 justify-between items-center max-w-6xl mx-auto flex">
        <div className="flex items-center gap-4 max-w-6xl">
          <Image
            src="/images/favicon.png"
            width={100}
            height={100}
            className="rounded-full mx-auto w-10 h-10"
            priority
            quality={100}
            alt="Logo"
          />
          <h1 className="text-2xl font-bold">Palamar</h1>
        </div>
        <NavigationMenu />
      </div>
    </header>
  )
};

export default Header;
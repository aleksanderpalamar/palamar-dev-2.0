"use client";
import Image from "next/image";
import { getText } from "@/utils/changeLanguage";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { FormContact } from "@/components/shared/sections/FormContact";
import { useEffect, useState } from "react";

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

const About = () => {
  const { language } = useLanguage();
  const text = getText(language)
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/cv/cv.pdf"; // Endereço do arquivo para download
    a.download = "CV.pdf"; // Nome do arquivo para download (opcional)
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <>
      <div className="flex flex-col gap-4 p-2 items-center justify-center mt-8">
        <div
          className="max-w-6xl p-0 rounded-lg border-[1px] border-secondary overflow-hidden">
          <header className="w-full h-8 flex items-center justify-between bg-secondary p-2 object-cover">
            <div className="flex items-center gap-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/">
                      <div className="w-4 h-4 rounded-full bg-red-500" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{language === "pt" ? "Voltar" : "Go back"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div className="w-4 h-4 rounded-full bg-green-500" />

            </div>
            <p className="text-center text-sm uppercase">{text.about?.title}</p>
          </header>
          <div className="flex flex-col gap-2 p-2">
            <div className="md:block lg:flex space-x-2 space-y-2">
              <Image
                src="/images/avatar.jpg"
                width={1000}
                height={1000}
                alt="PalamarDev"
                className="w-64 h-96 rounded-xl object-cover outline-double outline-2 outline-violet-500 border-4 border-transparent hidden lg:flex"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <p className="text-sm text-justify">{text.description}</p>
            </div>

            <p className="text-xs md:text-sm leading-6 md:leading-7 font-normal text-muted-foreground">
              {text.about?.description}
            </p>
            <Tags />
          </div>
          <div className="p-2">
            <Button
              onClick={handleDownload}
              variant="ghost" size="sm"
            >
              <Download className="mr-2 h-4 w-4"
              />
              {text.download}
            </Button>
          </div>
        </div>
      </div>

      <FormContact />
    </>
  )
}

export default About
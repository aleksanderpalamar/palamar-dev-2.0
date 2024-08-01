"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ArrowRight, Download } from "lucide-react";
import { getText } from "@/utils/changeLanguage";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

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

export const ButtonAboutMe = ({ lang }: { lang: string }) => {
  const { language } = useLanguage();
  const text = getText(language)

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
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="primary"
            size="sm"
            className="self-start"
          >
            {text.about?.more}
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </DialogTrigger>
        <div className="flex w-full p-4">
          <DialogContent
            className="sm:max-w-[800px] w-full p-0 border-[1px] border-violet-500 overflow-hidden">
            <header className="w-full h-8 flex items-center justify-between bg-violet-500 p-2 object-cover">
              <div className="flex items-center gap-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <div className="w-4 h-4 rounded-full bg-green-500" />
              </div>
              <p className="text-center text-sm uppercase">{text.about?.title}</p>
            </header>
            <DialogDescription className="flex flex-col gap-2 p-2">
              <div className="md:block lg:flex space-x-2 space-y-2">
              <Image 
                src="/images/avatar.jpg" 
                width={1000} 
                height={1000} 
                alt="PalamarDev"
                className="w-64 h-96 rounded-xl object-cover outline-double outline-2 outline-violet-500 border-4 border-transparent"
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
            </DialogDescription>
            <DialogFooter className="p-2">
              <Button
                onClick={handleDownload}
                variant="ghost" size="sm"
              >
                <Download className="mr-2 h-4 w-4"
                />
                {text.download}
              </Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </>
  )
}
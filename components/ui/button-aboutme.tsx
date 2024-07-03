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
import { Download } from "lucide-react";
import { getText } from "@/utils/changeLanguage";
import { useLanguage } from "@/context/LanguageContext";

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
            variant="link"
            size="sm"
            className="self-start"
          >
            {text.about?.more}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] w-full">
          <DialogTitle asChild>
            <h2 className="text-lg font-semibold">
              {text.title}
            </h2>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-2">
            <p className="text-sm">{text.description}</p>
          </DialogDescription>
          <DialogFooter>
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
      </Dialog>
    </>
  )
}
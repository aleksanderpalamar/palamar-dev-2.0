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
import {
  Switch,
} from "@/components/ui/switch"
import { Download } from "lucide-react";
import { useState } from "react";
import { Label } from "./label";
import { getText } from "@/utils/changeLanguage";

export const ButtonAboutMe = ({ lang }: { lang: string }) => {
  const [language, setLanguage] = useState(lang);

  const text = getText(language);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

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
            More about me
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] w-full">
          <div className="flex items-center space-x-2">            
            <Switch
              onCheckedChange={toggleLanguage}
              checked={language === "pt"}
            />
            <Label htmlFor="language">
              {language === "pt" ? "PT" : "EN"}
            </Label>
          </div>
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
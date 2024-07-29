"use client";
import { FormEvent, useState } from "react";
import { AtSign, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "./textarea";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { getText } from "@/utils/changeLanguage";

export const ButtonLetsTalk = () => {
  const [message, setMessage] = useState("");
  const { language } = useLanguage();

  const text = getText(language)

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/5541987938328?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="link"
            size="sm"
          >
            {text.banner?.contact}
            <FaWhatsapp className="w-5 h-5 ml-1.5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] w-full p-0 border-[1px] border-violet-500 overflow-hidden">
          <header className="w-full h-8 flex items-center justify-between bg-violet-500 p-2 object-cover">
            <div className="flex items-center gap-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>
            <p className="text-center text-sm uppercase">
              {text.banner?.contact}
            </p>
          </header>
          <form onSubmit={handleFormSubmit}>
            <div className="mt-2 flex flex-col gap-2 p-4">
              <textarea
                name="message"
                placeholder={text.banner?.contactPlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none bg-transparent px-4 py-[1.3rem] text-sm text-white outline-none 
                placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500  
                rounded-md disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="self-end mt-2"
              >
                <FaWhatsapp className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:block">
                  {text.banner?.send}
                </span>
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
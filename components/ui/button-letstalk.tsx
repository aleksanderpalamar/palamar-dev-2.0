"use client";
import { FormEvent, useState } from "react";
import { AtSign } from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "./textarea";
import { FaWhatsapp } from "react-icons/fa";

export const ButtonLetsTalk = () => {
  const [message, setMessage] = useState("");

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
            <AtSign className="w-3 h-3 mr-1.5" />
            Lets Talk
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] w-full">
          <DialogTitle asChild>
            <h2 className="text-lg font-semibold">
              Lets talk! 🤝
            </h2>
          </DialogTitle>
          <form onSubmit={handleFormSubmit}>
            <div className="mt-2 flex flex-col gap-2">
              <Textarea
                name="message"
                placeholder="Type your message here 👇"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none bg-transparent px-4 py-[1.3rem] 
                focus-within:outline-none sm:text-sm text-base"
              />
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="self-end mt-2"
              >
                <FaWhatsapp className="w-4 h-4 mr-1.5" />
                <span className="hidden sm:block">
                  Send
                </span>               
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
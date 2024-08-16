"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getText } from "@/utils/changeLanguage";
import { FormEvent, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export const FormContact = () => {
  const [message, setMessage] = useState("");
  const { language } = useLanguage();
  const text = getText(language);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/5541987938328?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="bg-transparent py-16 max-w-6xl mx-auto rounded-lg mt-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          {text.contact?.title}
        </h2>
        <form
          onSubmit={handleFormSubmit}
          target="_blank"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-500"
            >
              {text.contact?.description}
            </label>
            <textarea
              name="message"
              placeholder={text.contact?.placeholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full resize-none bg-secondary/55 mt-2 px-4 py-[1.3rem] text-sm text-white outline-none 
                placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500  
                rounded-md disabled:cursor-not-allowed disabled:opacity-50"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600"
          >
            <FaWhatsapp className="w-6 h-6 mr-1.5 text-emerald-500" />
            {text.contact?.send}
          </button>
        </form>
      </div>
    </section>
  );
};

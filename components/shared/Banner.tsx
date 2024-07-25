"use client";

import { useEffect, useState } from "react";
import { ButtonLetsTalk } from "../ui/button-letstalk";
import { useLanguage } from "@/context/LanguageContext";
import { getText } from "@/utils/changeLanguage";

const Banner = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [status, setStatus] = useState("")

  const text = getText(language)

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const hour = new Date().getHours();

      if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 5 && hour < 15) {
        setStatus("Coding now");
      } else {
        setStatus("Available");
      }
    };

    updateStatus(); // Chame a função updateStatus uma vez para definir o status inicial

    const interval = setInterval(updateStatus, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center flex-col lg:flex-row gap-4 lg:gap-8">
      <div className="flex flex-col items-center lg:items-start gap-1 md:gap-2 flex-1">
        <h1 className="flex flex-col text-2xl md:text-2xl font-semibold uppercase tracking-widest">
          {text.name}
          <span
            className="text-xs text-muted-foreground font-semibold uppercase tracking-widest"
          >{text.banner?.role}</span>
        </h1>
        <p className="italic text-xs md:text-sm leading-6 md:leading-7 font-bold text-muted-foreground tracking-widest">
          {text.about?.phrase}
        </p>
        <div className="flex items-center justify-center gap-x-5 gap-y-2 flex-wrap">
          {status === "Available" ? (
            <p className="flex items-center text-emerald-500 text-xs font-semibold uppercase tracking-widest">
              <span className="h-2.5 w-2.5 bg-emerald-500 rounded-full mr-1 flex justify-center items-center animation-pulse"
              />
              Available
            </p>
          ) : (
            <p className="flex items-center text-rose-500 text-xs font-semibold uppercase tracking-widest">
              <span className="h-2.5 w-2.5 bg-rose-500 rounded-full mr-1 flex justify-center items-center animation-pulse"
              />
              Working now
            </p>
          )}
          <ButtonLetsTalk />
        </div>
      </div>
    </div>
  )
}

export default Banner;
"use client";

import { useEffect, useState } from "react";
import { ButtonLetsTalk } from "../ui/button-letstalk";
import { useLanguage } from "@/context/LanguageContext";
import { getText } from "@/utils/changeLanguage";

const Banner = () => {
  const { language } = useLanguage();
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

    updateStatus();

    const interval = setInterval(updateStatus, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-start flex-col lg:flex-row gap-4 lg:gap-8">
      <div className="flex flex-col gap-4 md:gap-8 flex-1">
        <h1 className="flex flex-col text-2xl md:text-5xl font-medium">
          {text.name}
          <span
            className="text-base font-normal"
          >{text.banner?.role}</span>
        </h1>
        <p className="text-sm md:text-base leading-6 md:leading-7 font-normal text-muted-foreground">
          {text.about?.phrase}
        </p>
        <div className="flex items-start gap-x-5 gap-y-2 flex-wrap">
          
        </div>
      </div>
    </div>
  )
}

export default Banner;
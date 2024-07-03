"use client";

import { useEffect, useState } from "react";
import MaxContainer from "./MaxContainer";
import Image from "next/image";
import { ButtonLetsTalk } from "../ui/button-letstalk";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
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
    <div className="w-full lg:h-[239px] py-10 lg:py-0 border-b bg-secondary flex flex-col lg:justify-end">
      <MaxContainer className="flex items-center flex-col lg:flex-row gap-4 lg:gap-8">
        <div
          className="bg-secondary w-[150px] h-[150px] rounded-full overflow-hidden lg:-mb-14 border-[5px] border-background relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/images/favicon.png"
            alt="Aleksander Palamar"
            priority
            width={150}
            height={150}
            className="object-contain object-center rounded-full w-full h-full transition duration-500 ease-in-out"
            style={{ opacity: isHovered ? 0 : 1 }}
          />
          <Image
            src="/images/avatar.jpg"
            alt="Aleksander Palamar"
            priority
            width={150}
            height={150}
            className="object-cover object-center rounded-full w-full h-full transition duration-500 ease-in-out absolute top-0 left-0 inset-0"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-1 md:gap-2 flex-1">
          <h1 className="flex flex-col text-xl md:text-2xl font-semibold uppercase tracking-widest">
            Aleksander Palamar
            <span
              className="text-xs text-muted-foreground font-semibold uppercase tracking-widest"
            >{text.banner?.role}</span>
          </h1>
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
            <div className="flex items-center space-x-2">
              <Switch
                onCheckedChange={toggleLanguage}
                checked={language === "pt"}
              />
              <Label htmlFor="language">
                {language === "pt" ? "PT" : "EN"}
              </Label>
            </div>
          </div>
        </div>
      </MaxContainer>
    </div>
  )
}

export default Banner;
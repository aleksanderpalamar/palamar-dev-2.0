"use client";

import { useState } from "react";
import MaxContainer from "./MaxContainer";
import Image from "next/image";
import Link from "next/link";
import { AtSign } from "lucide-react";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false)
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
            src="/images/favicon.png"
            alt="Aleksander Palamar"
            priority
            width={150}
            height={150}
            className="object-cover object-center rounded-full w-full h-full transition duration-500 ease-in-out absolute top-0 left-0 inset-0"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </div>
        <div className="flex flex-col items-center lg:items-start gap-1 md:gap-2 flex-1">
          <h1 className="text-xl md:text-2xl font-semibold uppercase tracking-widest">
            Aleksander Palamar
          </h1>
          <div className="flex items-center justify-center gap-x-5 gap-y-2 flex-wrap">
            <p className="flex items-center text-green-500 text-xs font-semibold uppercase tracking-widest">
              <span className="h-2.5 w-2.5 bg-green-500 rounded-full mr-1 flex justify-center items-center animation-pulse"></span>{" "}
              Available for work
            </p>
            <Link 
              href="tel:+5541987938328"
              className="flex items-center text-muted-foreground text-xs font-semibold uppercase tracking-widest"
            >
              <AtSign className="w-3 h-3 mr-1.5"/>
              Lets Talk
            </Link>
          </div>
        </div>
      </MaxContainer>
    </div>
  )
}

export default Banner;
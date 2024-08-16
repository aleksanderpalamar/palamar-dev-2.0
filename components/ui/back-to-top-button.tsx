"use client";

import { ArrowUp } from "lucide-react"
import { useEffect } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const BackToTopButton = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById("back-to-top");
    if (backToTopButton) {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          backToTopButton.classList.remove("hidden");
        } else {
          backToTopButton.classList.add("hidden");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            id="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-10 right-10 bg-violet-500 hover:bg-violet-600 text-white p-2 shadow-xl items-center justify-center rounded-full hidden"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          Back to top
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
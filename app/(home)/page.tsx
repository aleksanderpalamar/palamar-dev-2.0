"use client";

import AboutSection from "@/components/shared/sections/AboutSection";
import BlogSection from "@/components/shared/sections/BlogSection";
import { FormContact } from "@/components/shared/sections/FormContact";
import ProjectSection from "@/components/shared/sections/ProjectSection";

export default function Home() {
  return (
    <div className="w-full px-2">
      <AboutSection />
      <ProjectSection />
      <FormContact />
    </div>
  );
}

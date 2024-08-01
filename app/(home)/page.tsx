"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import AboutSection from "@/components/shared/sections/AboutSection";
import ProjectSection from "@/components/shared/sections/ProjectSection";

export default function Home() {
  return (
    <div className="w-full">      
      <AboutSection />
      <ProjectSection />
      {/*<BlogSection />*/}
      {/*<ContactSection />*/}
    </div>
  );
}

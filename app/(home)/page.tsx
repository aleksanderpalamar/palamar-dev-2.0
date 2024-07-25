"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import AboutSection from "@/components/shared/sections/AboutSection";
import ProjectSection from "@/components/shared/sections/ProjectSection";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <AboutSection />
      <ProjectSection />
      {/*<BlogSection />*/}
      {/*<ContactSection />*/}
      <div className="p-2">
        <Footer />
      </div>
    </div>
  );
}

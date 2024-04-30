"use client";

import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import AboutSection from "@/components/shared/sections/AboutSection";
import BackgroundSection from "@/components/shared/sections/BackgroundSection";
import BlogSection from "@/components/shared/sections/BlogSection";
import ContactSection from "@/components/shared/sections/ContactSection";
import ProjectSection from "@/components/shared/sections/ProjectSection";
import { useFetchAllEducations, useFetchAllExperience } from "@/hooks";


export default function Home() {
  const educations = useFetchAllEducations()
  const experience = useFetchAllExperience()
  return (
    <div className="w-full">
      <Banner />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <BackgroundSection type="edu" data={educations}/>
      <BackgroundSection type="exp" data={experience}/>
      <ContactSection />
      <Footer />
    </div>
  );
}

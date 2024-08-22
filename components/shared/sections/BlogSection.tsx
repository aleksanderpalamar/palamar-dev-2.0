"use client";

import { ArticleCard } from "../cards/ArticleCard";
import { useLanguage } from "@/context/LanguageContext";

const BlogSection = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-transparent py-16 px-4 max-w-6xl mx-auto rounded-lg">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        {language === "pt" ? "Artigos" : "Articles"}
      </h2>
      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, _key) => (
            <ArticleCard 
              key={_key} id={0} title="" description="" url="" social_image=""                           
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

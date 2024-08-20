"use client";


import { ErrorCard } from "../cards/ErrorCard";
import { ArticleCard } from "../cards/BlogCard";
import { LoadingProject } from "../LoadingProject";

import { useFetchOnlyOneArticle } from "@/hooks";
import { useLanguage } from "@/context/LanguageContext";

const BlogSection = () => {
  const { language } = useLanguage();
  const { isLoading, isError, articles } = useFetchOnlyOneArticle()

  return (
    <section className="bg-transparent py-16 px-4 max-w-6xl mx-auto rounded-lg">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        {language === "pt" ? "Artigos" : "Articles"}
      </h2>
      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, _key) => (
              <LoadingProject key={_key} />
            ))
          ) ? isError : (
            <ErrorCard message={isError} />
          ) : (
            articles.map((article: any) => (
              <ArticleCard key={article._id} {...article} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogSection;
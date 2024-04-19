"use client";

import { ArticleCard } from "@/components/shared/cards/BlogCard";
import { ErrorCard } from "@/components/shared/cards/ErrorCard";
import { GoBack } from "@/components/shared/GoBack";
import { LoadingProject } from "@/components/shared/LoadingProject";
import MaxContainer from "@/components/shared/MaxContainer";
import { useFetchAllArticles } from "@/hooks";
import { Loader2, ScrollText } from "lucide-react";

const BlogPage = () => {
  const { isLoading, isError, articles } = useFetchAllArticles()
  return (
    <MaxContainer className="pb-12">
      <div className="flex items-center justify-between sticky top-0 z-10 py-6 bg-background">
        <GoBack route="/" />
        {isLoading ? (
          <p className="text-xs md:text-sm font-bold tracking-widest uppercase">
            <Loader2 className="w-5 h-5 animate-spin"/>
          </p>
        ) : (
          <p className="text-xs md:text-sm uppercase text-muted-foreground flex font-semibold items-center gap-1.5">
            <ScrollText className="w-4 h-4" />
            Total Articles:
            <span className="text-foreground font-bold tracking-widest">
              {articles.length}
            </span>
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {isLoading ? (
          Array.from({ length: 6 }).map((_, _key) => (
            <LoadingProject key={_key} />
          ))
        ) : isError ? (
          <ErrorCard message={isError} />
        ) : (
          articles.map((article: any) => (
            <ArticleCard key={article._id} {...article} />
          ))
        )}
      </div>
    </MaxContainer>
  )
}

export default BlogPage;
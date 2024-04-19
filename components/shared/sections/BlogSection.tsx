import Link from "next/link";
import { FaBookReader } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import Heading from "../Heading";
import MaxContainer from "../MaxContainer";
import { ErrorCard } from "../cards/ErrorCard";
import { ArticleCard } from "../cards/BlogCard";
import { LoadingProject } from "../LoadingProject";
import { buttonVariants } from "@/components/ui/button";

import { useFetchOnlyOneArticle } from "@/hooks";

const BlogSection = () => {
  const { isLoading, isError, articles } = useFetchOnlyOneArticle()
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-10 lg:pt-20">
      <Heading text="Latest Updates" icon={FaBookReader} />
      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, _key) => (
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
        {!isLoading && (
          <div className="flex justify-end mt-4">
            <Link
              href="/blog"
              className={buttonVariants({
                size: "sm",
                variant: "primary",
                className: "border",
              })}>
              View More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </MaxContainer>
  )
}

export default BlogSection;
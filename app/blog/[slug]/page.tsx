"use client";

import Image from "next/image";
import { GoBack } from "@/components/shared/GoBack";
import MaxContainer from "@/components/shared/MaxContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchArticleDetails } from "@/hooks";

const ArticleDetails = ({ params }: {
  params: { slug: string }
}) => {
  const { isLoading, isError, articles } = useFetchArticleDetails(params.slug);

  return (
    <MaxContainer className="pt-6 pb-20 space-y-6">
      <GoBack route="/blog" />
      <div className="flex flex-col gap-2">
        {isLoading ? (
          <Skeleton className="w-full aspect-[1.3] h-auto lg:h-[500px] lg:aspect-auto rounded-xl mb-2 lg:mb-4" />
        ) : (
          <div className="w-full aspect-[1.3] h-auto lg:h-[500px] lg:aspect-auto bg-secondary rounded-xl border mb-2 lg:mb-4 overflow-hidden relative">
            <Image
              priority
              quality={100}
              src={articles?.banner ? articles?.banner : "/placeholder.svg"}
              alt={articles?.title ? articles?.title : "Article name"}
              className="w-full aspect-[1.3] h-auto lg:h-[500px] lg:aspect-auto object-cover rounded-xl"
              width={800}
              height={500}
            />
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 pb-4">
            <div className="flex flex-col gap-3 flex-1">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-32 rounded-full" />
                  <Skeleton className="h-4 w-4 rounded-full" />
                </div>
              ) : (
                <h1 className="text-xl md:text-2xl">{articles?.title}</h1>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 py-4 border-t">
          <div className="flex flex-col flex-1 gap-2 w-full">
              {isLoading ? (
                <div className="flex flex-col flex-1 gap-2">
                  <Skeleton className="h-4 w-full rounded-full" />
                  <Skeleton className="h-4 w-[calc(100%-40%)] rounded-full" />
                  <Skeleton className="h-4 w-[calc(100%-20%)] rounded-full" />
                  <Skeleton className="h-4 w-[calc(100%-60%)] rounded-full" />
                </div>
              ) : (
                articles?.content?.map((cont: string) => (
                  <p
                    className="text-xs md:text-sm font-normal leading-5 md:leading-6"
                    key={cont}>
                    {cont}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </MaxContainer>
  )
}

export default ArticleDetails;
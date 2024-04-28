/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";

import { Layers } from "lucide-react";


import Heading from "@/components/shared/Heading";
import MaxContainer from "@/components/shared/MaxContainer";

import { GoBack } from "@/components/shared/GoBack";
import { Skeleton } from "@/components/ui/skeleton";

import { useFetchArticleDetails } from "@/hooks";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ArticleDetails = ({
  params
}: {
  params: { slug: string }
}) => {
  const { isLoading, articles } = useFetchArticleDetails(params.slug);

  console.log(articles)

  return (
    <MaxContainer className="pt-6 pb-20 space-y-6">
      <GoBack route="/articles" />
      <div className="flex flex-col gap-2">
        {isLoading ? (
          <Skeleton className="w-full aspect-[1.3] h-auto lg:h-[500px] lg:aspect-auto rounded-xl mb-2 lg:mb-4" />
        ) : (
          <div className="w-full aspect-[1.3] h-auto lg:h-[500px] lg:aspect-auto bg-secondary rounded-xl border mb-2 lg:mb-4 overflow-hidden relative">
            <Image
              priority
              quality={100}
              src={articles?.banner ? articles?.banner : "/placeholder.svg"}
              alt={articles?.title ? articles?.title : "Project name"}
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
                <p className="text-xl md:text-sm text-blue-400 font-bold">{articles?.title}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 py-4 border-t">
            <Heading
              text="Tags"
              icon={Layers}
              color="text-purple-400"
            />
            <div className="flex flex-wrap gap-2 flex-1">
              {isLoading
                ? Array.from({ length: 5 }).map((_, _key) => (
                  <Skeleton className="h-5 w-16 rounded" key={_key} />
                ))
                : articles?.tags?.map((tag: string) => (
                  <p
                    className="text-[10px] md:text-xs font-semibold bg-secondary py-1 px-2 rounded uppercase tracking-widest"
                    key={tag}>
                    {tag}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 py-4 border-t">
            <div className="flex flex-col flex-1 gap-2 w-full">
              {isLoading
                ? Array.from({ length: 5 }).map((_, _key) => (
                  <div className="flex flex-col flex-1 gap-2" key={_key}>
                    <Skeleton className="h-4 w-full rounded-full" />
                    <Skeleton className="h-4 w-[calc(100%-40%)] rounded-full" />
                    <Skeleton className="h-4 w-[calc(100%-20%)] rounded-full" />
                    <Skeleton className="h-4 w-[calc(100%-60%)] rounded-full" />
                  </div>
                ))
                : articles?.contents?.map((contentBlock, index) => (
                  <div key={index} className="flex flex-col flex-1 gap-2">
                    {/*// @ts-ignore next-line */}
                    {contentBlock.children.map((child: any, childIndex: any) => (
                      <ReactMarkdown
                        key={childIndex}
                        components={{
                          h2: ({ node, ...props }) => (
                            <h2
                              className="text-2xl text-white font-semibold"
                              {...props}
                            />
                          ),
                          ol: ({ node, ...props }) => (
                            <ol className="list-decimal list-inside text-sm text-justify" {...props}>
                              {props.children}
                            </ol>
                          ),
                          blockquote: ({ node, ...props }) => (
                            <blockquote
                              className="border-l-4 border-[#8257e6] px-3 py-2 
                        my-4 font-light bg-[#48424e] text-sm text-ellipsis"
                              {...props}
                            />
                          ),
                          img: ({ node, ...props }: any) => (
                            <img
                              className="w-full"
                              src={props.src}
                              alt={props.alt}
                              {...props}
                            />
                          ),
                          code: ({ node, ...props }) => (
                            <code
                              className="text-[#8257e6] bg-[#48424e] px-1 py-0.5 rounded"
                              {...props}
                            />
                          ),
                          strong: ({ node, ...props }) => (
                            <strong className="text-[#8257e6]" {...props} />
                          ),
                          p: ({ node, ...props }) => <p className="text-[12px] md:text-sm font-semibold py-1 px-2 tracking-widest text-justify" {...props} />,
                          ul: ({ node, ...props }) => (
                            <ul className="list-disc list-inside" {...props} />
                          ),
                          li: ({ node, ...props }) => <li className="my-2" {...props} />,
                          a: ({ node, ...props }) => (
                            <a
                              className="text-[#8257e6] hover:underline underline-offset-4"
                              href={props.href}
                              {...props}
                            />
                          ),
                        }}
                        remarkPlugins={[remarkGfm]}>
                        {child.text}
                      </ReactMarkdown>
                    ))}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </MaxContainer>
  )
}

export default ArticleDetails;
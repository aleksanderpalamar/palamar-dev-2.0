"use client";

import Image from "next/image";

import { GoBack } from "@/components/shared/GoBack";
import MaxContainer from "@/components/shared/MaxContainer";
import { Skeleton } from "@/components/ui/skeleton";

import { useFetchProjectDetails } from "@/hooks";
import { AlertOctagon, CheckCircle, Clock, FileSymlink, Folder, FolderPen, Layers, Link2, List, ListCollapse, Terminal } from "lucide-react";
import Preview from "@/components/shared/Preview";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import Heading from "@/components/shared/Heading";
import { formatDateAndTime } from "@/lib/utils";

const ProjectDetails = ({
  params
}: {
  params: { slug: string}
}) => {
  const { isLoading, projects } = useFetchProjectDetails(params.slug);
  const liveSiteDomain = projects?.domains?.find(
    (domain: any) => domain.label === "Live Site"
  );

  const colorIcon = `${
    projects?.status?.toLowerCase() === "production"
      ? "text-emerald-500"
      : projects?.status?.toLowerCase() === "development"
      ? "text-orange-500"
      : projects?.status?.toLowerCase() === "issues" && "text-orange-500"
  }`

  const statusIcon = 
  projects?.status?.toLowerCase() === "production"
  ? CheckCircle
  : projects?.status?.toLowerCase() === "development"
  ? Terminal
  : projects?.status?.toLowerCase() === "issues" && AlertOctagon;

  return (
    <MaxContainer className="pt-6 pb-20 space-y-6">
      <GoBack route="/projects" />
      <div className="flex flex-col gap-2">
      {isLoading ? (
          <Skeleton className="w-full aspect-[1.3] h-auto lg:h-[500px] lg:aspect-auto rounded-xl mb-2 lg:mb-4" />
        ) : (
          <div className="w-full aspect-[1.3] h-auto lg:h-[500px] lg:aspect-auto bg-secondary rounded-xl border mb-2 lg:mb-4 overflow-hidden relative">
            <Image
              priority
              quality={100}
              src={projects?.banner ? projects?.banner : "/placeholder.svg"}
              alt={projects?.name ? projects?.name : "Project name"}
              className="w-full aspect-[1.3] h-auto lg:h-[500px] lg:aspect-auto object-cover rounded-xl"
              width={800}
              height={500}
            />

            {projects?.domains && <Preview url={liveSiteDomain} />}
          </div>
        )}

<div className="flex flex-col">
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 pb-4">
            <Heading text="Name" icon={Folder} color="text-blue-400" />
            <div className="flex flex-col gap-3 flex-1">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-32 rounded-full" />
                  <Skeleton className="h-4 w-4 rounded-full" />
                </div>
              ) : (
                <p className="text-xs md:text-sm">{projects?.name}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 py-4 border-t">
            <Heading
              text="Description"
              icon={List}
              color="text-red-400"
            />
            <div className="flex flex-col flex-1 gap-2 w-full">
              {isLoading ? (
                <div className="flex flex-col flex-1 gap-2">
                  <Skeleton className="h-4 w-full rounded-full" />
                  <Skeleton className="h-4 w-[calc(100%-40%)] rounded-full" />
                  <Skeleton className="h-4 w-[calc(100%-20%)] rounded-full" />
                  <Skeleton className="h-4 w-[calc(100%-60%)] rounded-full" />
                </div>
              ) : (
                projects?.description?.map((desc: string) => (
                  <p
                    className="text-xs md:text-sm font-normal leading-5 md:leading-6"
                    key={desc}>
                    {desc}
                  </p>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 py-4 border-t">
            <Heading
              text="Technologies"
              icon={Layers}
              color="text-purple-400"
            />
            <div className="flex flex-wrap gap-2 flex-1">
              {isLoading
                ? Array.from({ length: 5 }).map((_, _key) => (
                    <Skeleton className="h-5 w-16 rounded" key={_key} />
                  ))
                : projects?.technologies?.map((technology: string) => (
                    <p
                      className="text-[10px] md:text-xs font-semibold bg-secondary py-1 px-2 rounded uppercase tracking-widest"
                      key={technology}>
                      {technology}
                    </p>
                  ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 py-4 border-t">
            <Heading
              text="Status"
              icon={statusIcon ? statusIcon : Clock}
              color={colorIcon ? colorIcon : "text-foreground"}
            />

            <div className="flex flex-wrap gap-2 flex-1">
              {isLoading ? (
                <Skeleton className="h-4 w-32 rounded-full" />
              ) : (
                <p className="text-xs md:text-sm">{projects?.status}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 py-4 border-t">
            <Heading text="Created" icon={Clock} color="text-teal-500" />

            <div className="flex flex-wrap gap-2 flex-1">
              {isLoading ? (
                <Skeleton className="h-4 w-32 rounded-full" />
              ) : (
                <p className="text-xs md:text-sm">
                  {formatDateAndTime(projects?.createdAt)}
                </p>
              )}
            </div>
          </div>

          {projects?.domains && (
            <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 pt-4 border-t">
              <Heading
                text="Link access"
                icon={FileSymlink}
                color="text-blue-700"
              />

              <div className="flex flex-col flex-1 w-full lg:w-auto gap-2">
                {isLoading ? (
                  <>
                    <Skeleton className="h-9 w-full rounded" />
                    <Skeleton className="h-9 w-full rounded" />
                  </>
                ) : (
                  projects?.domains?.map((url: any) => (
                    <Link
                      href={url.url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "outline",
                        className: "w-full h-11",
                      })}
                      key={url._key}>
                      {url.label.toLowerCase() === "repository" ? (
                        <FaGithub className="w-4 h-4 mr-2" />
                      ) : (
                        <Link2 className="w-4 h-4 mr-2" />
                      )}
                      <p className="text-xs">{url.label}</p>
                    </Link>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </MaxContainer>
  )
}

export default ProjectDetails
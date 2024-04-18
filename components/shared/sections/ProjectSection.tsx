import { ArrowRight, ScrollText } from "lucide-react";
import Heading from "../Heading";
import MaxContainer from "../MaxContainer";
import { useFetchOnlyTwoProjects } from "@/hooks";
import { LoadingProject } from "../LoadingProject";
import { ErrorCard } from "../cards/ErrorCard";
import { ProjectCard } from "../cards/ProjectCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const ProjectSection = () => {
  const { isLoading, isError, projects } = useFetchOnlyTwoProjects()
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-10 lg:pt-20">
      <Heading text="Projects" icon={ScrollText}/>
      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isLoading ? (
            Array.from({ length: 2 }).map((_, _key) => (
              <LoadingProject key={_key} />
            ))
          ) : isError ? (
            <ErrorCard message={isError} />
          ) : (
            projects.map((project: any) => (
              <ProjectCard key={project._id} {...project} />
            ))
          )}
        </div>
        {!isLoading && (
          <div className="flex justify-end mt-4">
            <Link
              href="/projects"
              className={buttonVariants({
                size: "sm",
                variant: "primary",
                className: "border",
              })}>
              View More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </MaxContainer>
  )
}

export default ProjectSection;
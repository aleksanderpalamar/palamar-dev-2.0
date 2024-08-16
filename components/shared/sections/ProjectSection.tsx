import { ArrowRight, ScrollText } from "lucide-react";
import { useFetchOnlyTwoProjects } from "@/hooks";
import { LoadingProject } from "../LoadingProject";
import { ErrorCard } from "../cards/ErrorCard";
import { ProjectCard } from "../cards/ProjectCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { getText } from "@/utils/changeLanguage";

const ProjectSection = () => {
  const { language } = useLanguage();
  const text = getText(language)
  const { isLoading, isError, projects } = useFetchOnlyTwoProjects()
  return (
    <section className="bg-transparent py-16 px-4 max-w-6xl mx-auto rounded-lg">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">{text.projects?.title}</h2>
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
              {text.projects?.description}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectSection;
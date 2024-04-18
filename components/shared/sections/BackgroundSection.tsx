import { Briefcase, Library } from "lucide-react";
import Heading from "../Heading";
import MaxContainer from "../MaxContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorCard } from "../cards/ErrorCard";
import DetailsCard from "../cards/DetailsCard";

interface BackgroundSectionProps {
  data: any,
  type: string
}

const BackgroundSection = ({
  data,
  type
}: BackgroundSectionProps) => {
  const { isLoading, isError, projects } = data
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-10 lg:pt-20">
      <Heading 
        text={type === "exp" ? "Experience" : "Educations"} 
        icon={type === "exp" ? Briefcase : Library}
      />
      <div className="flex flex-col gap-4 flex-1 w-full">
        {isLoading ? (
          Array.from({ length: 2 }).map((_, _key) => (
            <Skeleton
              className="w-full aspect-[2.2] md:aspect-[2.6] rounded-xl"
              key={_key}
            />
          ))
        ) : isError ? (
          <ErrorCard message={isError} />
        ) : (
          projects?.map((data: any) => <DetailsCard key={data._id} {...data} />)
        )}
      </div>
    </MaxContainer>
  )
}

export default BackgroundSection;

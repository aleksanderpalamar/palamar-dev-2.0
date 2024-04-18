import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface DetailsCardProps {
  description: string;
  endDate: string;
  location: string;
  startDate: string;
  position: string;
  url: string;
}

const DetailsCard = ({
  description,
  endDate,
  location,
  startDate,
  position,
  url
}: DetailsCardProps) => {
  return (
    <div className="flex flex-col gap-1.5 bg-secondary p-4 border rounded-lg shadow sticky top-10">
      <p className="text-xs md:text-sm text-muted-foreground">{position}</p>
      <Link 
        href={url}
        target="_blank"
        className="text-sm md:text-base font-medium w-max hover:underline flex items-center"
      >{location}</Link>
      <p className="text-xs font-normal text-muted-foreground">
        from{" "}
        <span className="text-foreground font-semibold">
          {formatDate(startDate)}
        </span>{" "}
        to{" "}
        <span className="text-foreground font-semibold">
          {formatDate(endDate)}
        </span>
      </p>
      <p className="text-foreground text-xs leading-5 pt-2 border-t mt-2">
        {description}
      </p>
    </div>
  )
}

export default DetailsCard;
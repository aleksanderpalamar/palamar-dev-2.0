import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  description: string[];
  slug: string;
  name: string;
  banner: string
}

export const ProjectCard = ({
  description,
  slug,
  name,
  banner
}: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="border rounded-xl overflow-hidden shadow-2xl bg-secondary group p-3"
    >
      <div className="aspect-[1.5] overflow-hidden group bg-background rounded-xl border p-1.5">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <Image
            src={banner}
            alt={name}
            priority
            quality={100}
            width={800}
            height={500}
            className="object-cover h-full w-full group-hover:scale-110 group-hover: transition duration-500 rounded-md"
          />
        </div>
      </div>
      <div className="gap-1 flex flex-col mt-2.5">
      <h2 className="text-foreground font-medium text-sm line-clamp-1">
          {name}
        </h2>
        {description && (
          <p className="text-xs text-muted-foreground line-clamp-1">
            {description[0]}
          </p>
        )}
      </div>
    </Link>
  )
}
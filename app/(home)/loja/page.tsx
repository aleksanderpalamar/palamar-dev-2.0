import { GoBack } from "@/components/shared/GoBack";
import MaxContainer from "@/components/shared/MaxContainer";
import Image from "next/image";
import Link from "next/link";

import { loja } from "@/app/(home)/loja/utils/loja";

const Template = () => {
  return (
    <MaxContainer className="pb-12">
      <div className="flex items-center justify-between sticky top-0 z-10 py-6 bg-background">
        <GoBack route="/" />
      </div>
      <h1 className="text-3xl font-bold">
        Loja
        <p className="text-sm text-muted-foreground mb-4">
          Explore our templates and more.
        </p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loja.map((item) => (
          <Link
          key={item.name}
          href={`${item.url}`}
          className="border rounded-xl overflow-hidden shadow-2xl bg-secondary group p-3"
        >
          <div className="aspect-[1.5] overflow-hidden group bg-background rounded-xl border p-1.5">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Image
                src={`${item.image}`}
                alt=""
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
              {item.name}
            </h2>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {item.description}
            </p>
          </div>
        </Link>
        ))}
      </div>
    </MaxContainer>
  )
};

export default Template
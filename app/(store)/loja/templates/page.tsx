"use client";

import { GoBack } from "@/components/shared/GoBack";
import MaxContainer from "@/components/shared/MaxContainer";
import products from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

const TemplatePage = () => {  
  return (
    <MaxContainer className="pb-12 min-h-screen">
      <div className="flex items-center justify-between sticky top-0 z-10 py-6 bg-background">
        <GoBack route="/loja" />
      </div>
      <h1 className="text-3xl font-bold">
        Templates
        <p className="text-muted-foreground font-medium text-sm">
          Template page
        </p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {products.map((template) => (
          <Link
            key={template.product.id}
            href={template.product.href}
            className="border rounded-xl overflow-hidden shadow-2xl bg-secondary group p-3">
            <div className="aspect-[1.5] overflow-hidden group bg-background rounded-xl border p-1.5">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={template.product.imageUrl}
                  alt={template.product.name}
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
                {template.product.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </MaxContainer>
  )
};

export default TemplatePage
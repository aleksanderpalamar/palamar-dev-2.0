import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Subscribe } from "./subscribe"

type Loja = {
  id?: number
  name?: string
  description?: string
  image?: string
  url?: string
  tags?: string[]
  category?: string
  status?: string
  price?: number
}

type LojaList = Pick<Loja, "id" | "name" | "image" | "description" | "tags" | "url" | "status" | "price">

export const loja: LojaList[] = [
  {
    id: 1,
    name: "Landing Page",
    description: "Landing Page for furniture store",
    tags: [
      "React",
      "Typescript",
      "Nextjs",
      "Tailwindcss",
    ],
    price: 12,
    status: "Payment",
    image: "/images/hole.svg",
    url: "/loja/templates",
  },
  {
    id: 2,
    name: "Landing Page",
    description: "Landing Page for coffee shop",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
    ],
    price: 0,
    status: "Free",
    image: "/images/hole.svg",
    url: "/loja/templates",
  }
];

export const getLojaList = () => loja

export const TemplateCards = ({ name, image, description, tags, status, price }: LojaList) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-2xl bg-secondary group p-3">
      <div className="aspect-[1.5] overflow-hidden group bg-background rounded-xl border p-1.5">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <Dialog>
            <DialogTrigger>
              <Image
                src={`${image}`}
                alt=""
                priority
                quality={100}
                width={800}
                height={500}
                className="object-cover h-full w-full group-hover:scale-110 group-hover: transition duration-500 rounded-md"
              />
            </DialogTrigger>
            <DialogContent
              className="sm:max-w-[800px]"
            >
              <Image
                src={`${image}`}
                alt=""
                priority
                quality={100}
                width={800}
                height={500}
                className="object-cover h-full w-full group-hover:scale-110 group-hover: transition duration-500 rounded-md"
              />
              <div className="mt-4 flex flex-col space-y-4">
                <h2 className="text-foreground font-medium text-sm line-clamp-1">
                  {name}
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {description}
                  </p>
                </h2>
                {status === "Payment" ? (
                  <Subscribe />
                ) : (
                  <Button variant="ghost" className="sm:max-w-[200px] mt-4 self-end gap-2 flex-1 
                        flex items-center justify-between">
                    Get Free
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="gap-1 flex flex-col mt-2.5">
        <h2 className="text-foreground font-medium text-sm line-clamp-1 flex items-center justify-between">
          {name}
          <span className="text-base text-muted-foreground line-clamp-1 flex items-center">
            $US {price}
            <span className="text-xs text-muted-foreground line-clamp-1">,00</span>
          </span>
        </h2>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {description}
        </p>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full 
                    bg-violet-500 px-2.5 py-0.5 text-xs font-medium text-zinc-100 mr-2 mt-2 last:mr-0"
            >
              {tag}
            </span>
          ))}
        </p>
      </div>
      {status === "Payment" ? (
        <Subscribe />
      ) : (
        <Button variant="primary" className="w-[200px] text-violet-100 self-end mt-2 flex-1 
                        flex items-center">
          Get Free
        </Button>
      )}
    </div>
  )
}
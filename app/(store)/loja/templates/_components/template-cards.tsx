import { Button } from "@/components/ui/button"
import Image from "next/image"

type Props = {
  priceId?: string
  price?: string
  description?: string
  product: Product
}

export const TemplateCards = ({ priceId, price, description, product }: Props) => {  
  return (
    <div className="border rounded-xl overflow-hidden shadow-2xl bg-secondary group p-3">
      <div className="aspect-[1.5] overflow-hidden group bg-background rounded-xl border p-1.5">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="object-cover h-full w-full group-hover:scale-110 group-hover: transition duration-500 rounded-md"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-lg font-bold">
            ${product.price}
            <span className="text-xs text-muted-foreground">
              ,00
            </span>
          </p>
        </div>
        <Button
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
        >
          Comprar
        </Button>
      </div>
    </div>
  )
}
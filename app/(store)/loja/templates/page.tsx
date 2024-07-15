import { GoBack } from "@/components/shared/GoBack";
import MaxContainer from "@/components/shared/MaxContainer";

import { loja } from "@/app/(store)/loja/utils/loja";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";

const TemplatePage = () => {
  return (
    <MaxContainer className="pb-12">
      <div className="flex items-center justify-between sticky top-0 z-10 py-6 bg-background">
        <GoBack route="/loja" />
      </div>
      <h1 className="text-3xl font-bold">
        Templates
        <p className="text-sm text-muted-foreground mb-4">
          Templates for landing pages and e-commerce.
        </p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loja.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl overflow-hidden shadow-2xl bg-secondary group p-3 w-full"
            title={item.name}
          >
            <div className="aspect-[1.5] overflow-hidden group bg-background rounded-xl border p-1.5">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <Dialog>
                  <DialogTrigger>
                    <Image
                      src={`${item.image}`}
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
                      src={`${item.image}`}
                      alt=""
                      priority
                      quality={100}
                      width={800}
                      height={500}
                      className="object-cover h-full w-full group-hover:scale-110 group-hover: transition duration-500 rounded-md"
                    />
                    <div className="mt-4 flex flex-col space-y-4">
                      <h2 className="text-foreground font-medium text-sm line-clamp-1">
                        {item.name}
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {item.description}
                        </p>
                      </h2>
                      {item.status === "Payment" ? (
                        <Button variant="ghost" className="sm:max-w-[200px] mt-4 self-end gap-2 flex-1 
                        flex items-center justify-between">
                          Buy
                          <span className="text-base line-clamp-1 flex items-center">
                            $US {item.price}
                            <span className="text-xs line-clamp-1">,00</span>
                          </span>
                        </Button>
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
                {item.name}
                <span className="text-base text-muted-foreground line-clamp-1 flex items-center">
                  $US {item.price}
                  <span className="text-xs text-muted-foreground line-clamp-1">,00</span>
                </span>
              </h2>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {item.description}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {item.tags?.map((tag) => (
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
            {item.status === "Payment" ? (
              <Button variant="primary" className="w-full mt-4">
                Buy Template
              </Button>
            ) : (
              <Button variant="primary" className="w-full mt-4">
                Get Free
              </Button>
            )}
          </div>
        ))}
      </div>
    </MaxContainer>
  )
};

export default TemplatePage;
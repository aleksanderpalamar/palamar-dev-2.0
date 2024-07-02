"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";

export const ButtonAboutMe = () => {
  const downloadCV = () => {
    window.open("/cv/cv.pdf", "_blank");
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="link"
            size="sm"
            className="self-start"
          >
            More about me
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] w-full">
          <DialogTitle asChild>
            <h2 className="text-lg font-semibold">
              About me
            </h2>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-2">
            <p className="text-sm">
              Eu sou um engenheiro de software e desenvolvedor full-stack.
              Sou apaixonado por construir soluções de software escaláveis e eficientes.
              Tenho experiência em várias linguagens de programação e tecnologias,
              incluindo JavaScript, TypeScript, React e Node.js.
              Além disso, sou familiarizado com frameworks e bibliotecas populares como
              Next.js, Redux e React, entre outras.
            </p>
            <p className="text-sm">
              Sou um forte defensor da aprendizagem contínua e melhoria. 
              Gosto de me manter atualizado com as últimas tendências e tecnologias, 
              e estou sempre procurando por novos jeitos de melhorar minhas habilidades e conhecimentos. 
              Sou comprometido a ser um ativo na comunidade de desenvolvimento de software e contribuir 
              para o crescimento e sucesso da indústria.
            </p>
          </DialogDescription>
          <DialogFooter>
            <Button variant="ghost" size="sm">
              <Download
                onClick={downloadCV}
                className="mr-2 h-4 w-4" 
              />
              CV (PDF)
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
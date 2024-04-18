import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MaxContainerProps = {
  className?: string;
  children: ReactNode
}

const MaxContainer = ({
  className,
  children
}: MaxContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 md:px-10 max-w-[880px]",
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxContainer;
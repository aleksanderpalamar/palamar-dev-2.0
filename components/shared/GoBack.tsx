"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const GoBack = ({ route }: {route: string}) => {
  const router = useRouter()
  const OnClick = () => {
    router.push(route)
  }
  return (
    <div 
      className="text-xs md:text-sm uppercase flex items-center font-semibold tracking-widest cursor-pointer"
      onClick={OnClick}
    >
      <MoveLeft className="w-4 h-4 mr-2"/> Go Back
    </div>
  )
}
import Image from "next/image"

export const Avatar = () => {
  return (
    <div
      className="shrink-1 outline outline-2 outline-violet-500 rounded-full border-2 border-transparent p-[1px] overflow-hidden"
    >
      <Image
        width={100}
        height={100}
        className="h-11 w-11 rounded-full object-cover bg-violet-500"      
        src="/images/avatar.jpg"
        alt="PalamarDev"
      />
    </div>
  )
}
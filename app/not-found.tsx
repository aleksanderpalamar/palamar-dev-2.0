import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image
        src="/images/hole.svg"
        width={500}
        height={500}
        alt="404"
      />
      <div className="lg:flex flex-col gap-y-4">
        <div className="items-center gap-2 hidden lg:flex">
          <Image src="/images/favicon.png" width={40} height={40} alt="Mascot" />
          <h1 className="text-2xl text-start font-extrabold text-violet-500 tracking-wide">
            Palamar
          </h1>
        </div>
        <h1 className="text-9xl font-bold text-violet-500 tracking-wide">404...</h1>
        <span className="text-white text-4xl font-semibold">
          I repeat, 404. Over!
        </span>
        <p className="text-white text-lg">
          I think you&apos;ve reached the edge of the universe.
          The page you requested was not found.
        </p>
        <Button variant="ghost" className="w-80 items-center mx-auto" asChild>
          <Link href="/">
            Return to the homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound
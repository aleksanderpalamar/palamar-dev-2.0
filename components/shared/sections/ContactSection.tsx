import { PhoneCall } from "lucide-react";
import Heading from "../Heading";
import MaxContainer from "../MaxContainer";
import { links } from "@/lib/utils";
import Link from "next/link";

const ContactSection = () => {
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-10 lg:pt-20">
      <Heading text="Contact" icon={PhoneCall} />
      <div className="flex flex-col gap-2 flex-1 w-full">
        {links.map((link) => (
          <div key={link.path} className="flex items-center w-full gap-4">
            <p className="font-normal text-muted-foreground text-sm">
              <span className="font-bold text-foreground">{link.name}: </span>{" "}
              <Link
                href={link.path}
                target={link.target ? "_blank" : undefined}
                className="text-xs md:text-sm hover:underline">
                {link.text}
              </Link>
            </p>

            <hr className="w-full flex-1 hidden md:flex" />

            <link.icon className="w-4 h-4 text-muted-foreground hidden md:flex" />
          </div>
        ))}
      </div>
    </MaxContainer>
  )
}

export default ContactSection;
import {
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";


const NavigationMenu = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <NavigationMenuPrimitive>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-6 md:w-full lg:w-[500px] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end
                    hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
                    href="/about"
                  >

                    <div className="mb-2 mt-4 text-lg font-medium">
                      About
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Conheça um pouco mais sobre mim.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end 
                    hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
                    href="/contact"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Projetos
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Veja alguns dos projetos que desenvolvi.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background 
        px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent 
        focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 
        data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
          <NavigationMenuLink href="/loja">Shop</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="flex items-center space-x-2">
        <Switch
          onCheckedChange={toggleLanguage}
          checked={language === "pt"}
        />
        <Label htmlFor="language">
          {language === "pt" ? "PT" : "EN"}
        </Label>
      </div>
    </NavigationMenuPrimitive>
  )
}

export default NavigationMenu
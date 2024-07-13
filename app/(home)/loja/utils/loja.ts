type Loja = {
  name?: string
  slug?: string
  description?: string
  image?: string
  url?: string
  category?: string
  type?: string
}

type LojaList = Pick<Loja, "name" | "description" | "image" | "url" >

export const loja: LojaList[] = [
  {
    name: "Templates",    
    description: "Explore our templates and more.",
    image: "/images/hole.svg",
    url: "/loja/templates",
  },
  {
    name: "Wallpapers",
    description: "Wallpapers from the web and more.",
    image: "/images/hole.svg",
    url: "/loja/wallpapers",   
  },
];
type Loja = {
  id?: number
  name?: string
  description?: string
  image?: string
  url?: string
  tags?: string[]
  category?: string
  status?: string
  price?: number
}

type LojaList = Pick<Loja, "id" | "name" | "image" | "description" | "tags" | "url" | "status" | "price" >


export const loja: LojaList[] = [
  {
    id: 1,
    name: "Landing Page",
    description: "Landing Page for furniture store",
    tags: [
      "React",
      "Typescript",
      "Nextjs",
      "Tailwindcss",
    ],
    price: 12,
    status: "Payment",
    image: "/images/hole.svg",
    url: "/loja/templates",
  },
  {
    id: 2,
    name: "Landing Page",
    description: "Landing Page for coffee shop",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
    ],
    price: 0,
    status: "Free",
    image: "/images/hole.svg",
    url: "/loja/templates",
  }
];
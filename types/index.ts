interface Project {
  _id: string;
  slug?: string;
  name?: string;
  description?: string[];
  status?: string;
  createdAt?: string;
  technologies?: string[];
  banner?: string;
  domains?: string[];
}

interface Articles {
  _id: string;
  slug?: string;
  title?: string;
  description?: string[];  
  createdAt?: string;
  tags?: string[];
  banner?: string;
  contents?: string[];
}

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

type LojaList = Pick<Loja, "id" | "name" | "image" | "description" | "tags" | "url" | "status" | "price">

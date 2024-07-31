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

type Product = {
  id: number
  name: string
  price: number
  image: string
}
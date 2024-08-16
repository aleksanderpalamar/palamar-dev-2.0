interface ProductsProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
    href: string;
  }
}

const products: ProductsProps[] = [
  {
    product: {
      id: "1",
      name: "Template 1",
      imageUrl: "/placeholder.svg",
      price: "12.00",
      description: "Descrição do Template 1",
      defaultPriceId: "1",
      href: "/loja/template/1",
    },
  },
  {
    product: {
      id: "2",
      name: "Template 2",
      imageUrl: "/placeholder.svg",
      price: "12.00",
      description: "Descrição do Template 2",
      defaultPriceId: "2",
      href: "/loja/template/2",
    },
  }
];

export default products
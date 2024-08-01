"use client";

import { GoBack } from "@/components/shared/GoBack";
import MaxContainer from "@/components/shared/MaxContainer";

import products from "@/lib/products";
import { TemplateCards } from "./_components/template-cards";
import { useLanguage } from "@/context/LanguageContext";

const TemplatePage = () => {
  const topProducts = products.slice(0, 4);
  const { language } = useLanguage();

  return (
    <MaxContainer className="pb-12 min-h-screen">
      <div className="flex items-center justify-between sticky top-0 z-10 py-6 bg-background">
        <GoBack route="/loja" />
      </div>
      <h1 className="text-3xl font-bold">
        {language === "pt" ? "Templates" : "Templates"}
        <p className="text-sm text-muted-foreground mb-4">
          {language === "pt" ? "Templates disponíveis para o seu projeto em react" : "Available templates for your project in react"}
        </p>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topProducts.map((product) => (
          <TemplateCards key={product.id} product={product} />          
        ))}
      </div>
    </MaxContainer>
  )
};

export default TemplatePage;
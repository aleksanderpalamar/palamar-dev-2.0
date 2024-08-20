"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDev } from "react-icons/fa6";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  social_image: string;
}

export const ArticleCard = ({
  id,
}: Article) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?username=aleksanderpalamar"
        );
        const data: Article[] = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Erro ao buscar os artigos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div key={id} className="gap-2 flex flex-col">
      {articles.map((article) => (
        <>
          <div
            className="border rounded-xl overflow-hidden shadow-2xl bg-secondary group p-3">
            <div key={article.id} className="aspect-[1.5] overflow-hidden group bg-background rounded-xl border p-1.5 mt-4">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={article.social_image}
                  alt={article.title}
                  priority
                  quality={100}
                  width={800}
                  height={500}
                  className="object-cover h-full w-full group-hover:scale-110 group-hover: transition duration-500 rounded-md"
                />
              </div>
            </div>
            <div className="gap-1 flex flex-col mt-2.5">
              <h2 className="text-foreground font-medium text-sm line-clamp-1">
                {article.title}
              </h2>
              <p className="text-xs text-muted-foreground line-clamp-4">
                {article.description}
              </p>
              <Link
                href={article.url}
                className="w-[128px] text-xs mt-2 flex items-center justify-between
                text-white line-clamp-1 bg-violet-500 py-1 
                px-2 rounded-lg hover:bg-violet-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDev className="w-4 h-4 mr-1 " />
                Read on Dev.to
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}
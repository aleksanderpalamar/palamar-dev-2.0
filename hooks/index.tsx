"use client";

import { useEffect, useState } from "react";
import { client } from "@/constants/client";


export const useFetchAllArticles = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "article"] | order(_createdAt desc) {
          _id,
          "slug": slug.current,
          title,
          description,
          createdAt,
          tags,
          "banner": banner.asset->url
        }`;
        const data: Articles[] = await client.fetch(query);
        setArticles(data);
      } catch (error: any) {
        setIsError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, isError, articles };
};

export const useFetchAllProjects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "project"] | order(createdAt desc) {
          _id,
          "slug": slug.current,
          name,
          description,
          status,
          createdAt,
          technologies,
          "banner": banner.asset->url,
          domains
        }`;
        const data: Project[] = await client.fetch(query);
        setProjects(data);
      } catch (error: any) {
        setIsError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, isError, projects };
};

export const useFetchOnlyTwoProjects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "project"] | order(_createdAt desc)[0...2] {
          _id,
          "slug": slug.current,
          name,
          description,
          status,
          createdAt,
          technologies,
          "banner": banner.asset->url,
          domains
        }`;
        const data: Project[] = await client.fetch(query);
        setProjects(data);
      } catch (error: any) {
        setIsError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, isError, projects };
};

export const useFetchOnlyOneArticle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [articles, setArticles] = useState<Articles[]>([]); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "article"] | order(_createdAt desc)[0...2] {
          _id,
          "slug": slug.current,
          title,
          description,
          createdAt,
          tags,
          "banner": banner.asset->url
        }`;        
        const data: Articles[] = await client.fetch(query);
        setArticles(data);
      } catch (error: any) {
        setIsError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, isError, articles };
}

export const useFetchProjectDetails = (slug: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [projects, setProjects] = useState<Project>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "project" && slug.current == "${slug}"][0] {
          _id,
          "slug": slug.current,
          name,
          description,
          status,
          createdAt,
          technologies,
          "banner": banner.asset->url,
          domains
        }`;
        const data: Project = await client.fetch(query);

        setProjects(data);
      } catch (error: any) {
        setIsError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { isLoading, isError, projects };
};

export const useFetchArticleDetails = (slug: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [articles, setArticles] = useState<Articles>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "article" && slug.current == "${slug}"][0] {
          _id,
          "slug": slug.current,
          title,
          description,
          createdAt,
          tags,
          "banner": banner.asset->url,
          contents
        }`;
        console.log("Query:", query);
        const data: Articles = await client.fetch(query);
        console.log("Data:", data);
        setArticles(data);        
      } catch (error: any) {
        console.error("Ocorreu um erro ao buscar os detalhes do artigo:", error);
        setIsError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };
    console.log('Slug:', slug);
    fetchData();
  }, [slug]);

  return { isLoading, isError, articles };
}

export const useFetchAllEducations = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [projects, setProjects] = useState<Project>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "educations"] | order(_createdAt desc){
          _id,
          url,
          location,
          position,
          description,
          startDate,
          endDate
        }`;
        const data: Project = await client.fetch(query);

        setProjects(data);
      } catch (error: any) {
        setIsError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, isError, projects };
};

export const useFetchAllExperience = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");
  const [projects, setProjects] = useState<Project>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "experiences"] | order(_createdAt desc){
          _id,
          url,
          location,
          position,
          description,
          startDate,
          endDate
        }`;
        const data: Project = await client.fetch(query);

        setProjects(data);
      } catch (error: any) {
        setIsError(error.message || "An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, isError, projects };
};

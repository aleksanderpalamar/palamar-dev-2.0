import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/LanguageContext";
import { Provider } from "react-wrap-balancer";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "aleksanderpalamar.dev | Software Engineer | Portfolio",
  description: "My personal portfolio and blog",
  keywords: [
    'Aleksander Palamar',
    'Desenvolvedor Web',
    'Frontend',
    'Backend',
    'Fullstack'
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: 'Aleksander Palamar',
      url: 'https://aleksanderpalamar.dev'
    }
  ],
  creator: 'Aleksander Palamar'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={cn(
        "bg-zinc-950 text-white",
        fontPoppins.className
      )} suppressHydrationWarning>
        <LanguageProvider>
          <Provider>
            <Header />
            {children}
          <div className="py-16 px-2 max-w-6xl mx-auto rounded-lg">
            <Footer />
          </div>
          <BackToTopButton />        
          </Provider>
        </LanguageProvider>
      </body>
    </html>
  );
}

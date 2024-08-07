import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/LanguageContext";
import { Provider } from "react-wrap-balancer";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
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
    <html lang="en">
      <body className={cn(
        "min-h-screen font-sans antialiased flex flex-col flex-1",
        fontPoppins.variable
      )}>
        <LanguageProvider>
          <Provider>
            <Header />
            {children}
            <div className="p-2">
              <Footer />
            </div>
          </Provider>
        </LanguageProvider>
      </body>
    </html>
  );
}

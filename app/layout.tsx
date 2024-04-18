import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontPoppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "PalamarDev",
  description: "My portfolio",
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
        {children}
      </body>
    </html>
  );
}

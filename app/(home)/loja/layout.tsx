import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

export default function LojaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("min-h-screen font-sans antialiased flex flex-col flex-1")}>
      <main className="flex flex-col flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import stripe from "@/lib/stripe";
import { FaSpinner } from "react-icons/fa6";
import Link from "next/link";
import { ArrowLeft, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Success({ session }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    if (session) {
      setLoading(true);
      const downloadUrl = `http://localhost:3000/loja/templates/downloads/${session.metadata.template_id}.zip`
      setDownloadUrl(downloadUrl);
    }
  }, [session]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader flex flex-col items-center justify-center">
          <FaSpinner className="animate-spin w-10 h-10" />
          <p className="text-lg font-bold text-white tracking-wide mt-4">
            Pagamento sendo processado...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold flex items-center gap-x-2">
        Pagamento efetuado!
        <Check className="w-8 h-8 bg-emerald-500 p-1 rounded-full text-white" />
      </h1>
      {downloadUrl ? (
        <Link
          href={downloadUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 flex items-center gap-x-2"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Link>)
        : (
          <Button
            variant="primary"
            onClick={() => router.push("/loja/templates")}
            className="flex items-center gap-x-2 mt-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
    </div>
  )
}

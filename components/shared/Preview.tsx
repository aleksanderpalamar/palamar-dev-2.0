import { Fullscreen, X } from "lucide-react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const Preview = ({ url }: { url: any }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full absolute top-4 right-4 w-10 h-10 hidden lg:flex bg-[#8257e6] hover:bg-[#8257e6]/80">
          <Fullscreen className="w-5 h-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-full">
        <div className="w-full h-full relative">
          <AlertDialogCancel
            asChild
            className="rounded-full absolute top-4 right-4 min-w-10 min-h-10 p-2 cursor-pointer">
            <X className="w-5 h-5 bg-rose-500/10 text-rose-500 border-none hover:bg-rose-500" />
          </AlertDialogCancel>
          {error ? (
            <div className="flex items-center justify-center w-full h-full text-rose-500">
              {error}
            </div>
          ) : (
            <iframe
            className="w-full h-full"
            src={url.url}
            title="Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Preview;
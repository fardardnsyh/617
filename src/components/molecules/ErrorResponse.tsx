import { ErrorResponseProps } from "@/types";
import Image from "next/image";

export default function ErrorResponse({ title }: ErrorResponseProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="mb-4 w-max bg-gradient-to-r from-emerald-200 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
        {title}
      </h3>
      <Image
        className="mb-6"
        src="/not-found.png"
        width={150}
        height={150}
        alt="Not found image"
      />
    </div>
  );
}

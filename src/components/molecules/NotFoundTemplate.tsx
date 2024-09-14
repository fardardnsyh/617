import Image from "next/image";
import Link from "next/link";

export default function NotFoundTemplate() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="w-max bg-gradient-to-r from-emerald-200 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
        404
      </h2>
      <p className="mb-4">Page Not Found.</p>
      <Image
        className="mb-6"
        src="/not-found.png"
        width={150}
        height={150}
        alt="Not found image"
      />
      <Link
        className="font-bold underline hover:text-zinc-950 dark:hover:text-white"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}

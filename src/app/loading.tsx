import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen">
      <div className="flex h-full w-full items-center justify-center">
        <Image
          className="animate-spin"
          src="/logo.png"
          width={100}
          height={100}
          alt="Logo image"
        />
      </div>
    </div>
  );
}

import { CareerItemProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function CareerItem({
  company,
  position,
  duration,
  type,
  logo,
  link,
}: CareerItemProps) {
  return (
    <section className="w-full rounded-md border border-zinc-200 p-4 pb-6 dark:border-zinc-800">
      <div className="flex gap-4">
        <div className="flex items-center">
          <Image
            className="rounded-md"
            src={logo}
            width={80}
            height={80}
            alt={`${company} logo`}
            unoptimized
            priority={true}
          />
        </div>
        <div>
          <h4 className="font-semibold text-slate-950 dark:text-white">
            {position}
          </h4>
          <div className="gap-2 sm:flex">
            <Link
              className="underline hover:text-slate-950 dark:hover:text-white"
              href={link}
            >
              {company}
            </Link>
            <p>
              <span> -</span> {type}
            </p>
          </div>
          <p>{duration}</p>
        </div>
      </div>
    </section>
  );
}

import { BlogCard } from "@/types";
import { urlFor } from "@/utils/sanity";
import Image from "next/image";
import Link from "next/link";
import { IoMdTime } from "react-icons/io";
import TagList from "../molecules/TagList";
import formattedDate from "@/utils/formattedDate";

export default function BlogItem({
  title,
  smallDescription,
  currentSlug,
  titleImage,
  readingTime,
  createdAt,
  tags,
}: BlogCard) {
  return (
    <section className="overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
      <div className="relative mb-4 overflow-hidden">
        <Image
          className="h-60 w-full transform object-cover transition-transform duration-300 hover:scale-125 sm:h-80"
          src={urlFor(titleImage).url()}
          width={486.667}
          height={320}
          alt={`${title} image`}
          unoptimized
          priority={true}
        />
        <div className="absolute bottom-4 right-4 flex w-4/5 flex-wrap justify-end gap-2">
          <TagList tags={tags} />
        </div>
      </div>
      <div className="my-2 px-6 pb-4">
        <div className="mb-2 flex items-center gap-6 font-light dark:text-white">
          <p className="flex items-center gap-2">
            <IoMdTime className="text-xl" />
            <span className="bg-gradient-to-r from-emerald-200 to-cyan-400 px-1 dark:from-emerald-300 dark:to-cyan-500">
              {readingTime} min read
            </span>
          </p>
        </div>
        <h3 className="relative line-clamp-2 block text-lg font-bold">
          <Link
            href={`/blog/${currentSlug}`}
            className="group relative inline-block hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
          >
            {title}
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </h3>

        <p className="mb-2 font-light">{formattedDate(createdAt)}</p>
        <p className="line-clamp-3 text-justify">{smallDescription}</p>
      </div>
    </section>
  );
}

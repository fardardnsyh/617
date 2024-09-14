import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import NotFoundTemplate from "@/components/molecules/NotFoundTemplate";
import TableOfContents from "@/components/molecules/TableOfContents";
import TagList from "@/components/molecules/TagList";
import { getBlogDetail } from "@/data/remote/blog";
import { FullBlog } from "@/types";
import formattedDate from "@/utils/formattedDate";
import { urlFor } from "@/utils/sanity";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogDetail: FullBlog | null = await getBlogDetail(params.slug);

  if (!blogDetail) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `Blog - ${blogDetail.title}`,
    description: blogDetail.content.slice(0, 160),
    keywords: blogDetail.tags.join(", "),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogDetail: FullBlog | null = await getBlogDetail(params.slug);

  if (!blogDetail) {
    return (
      <article>
        <HeaderPage title="Error" description="Page not found" />
        <ContentSection>
          <NotFoundTemplate />
        </ContentSection>
      </article>
    );
  }

  const { title, createdAt, readingTime, titleImage, tags, content } =
    blogDetail;

  return (
    <article>
      <HeaderPage title="Blog Detail" backButton={true} backTo="blog" />
      <ContentSection>
        <div className="relative overflow-hidden rounded-md">
          <Image
            className="h-60 w-full transform object-cover transition-transform duration-300 hover:scale-125 sm:h-96"
            src={urlFor(titleImage).url()}
            width={736}
            height={384}
            alt={`${title} image`}
            unoptimized
            priority={true}
          />
          <div className="absolute bottom-4 right-4 flex w-4/5 flex-wrap justify-end gap-2 lg:w-1/2">
            <TagList tags={tags} />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
          <p className="mb-4">
            Written on {formattedDate(createdAt)} by Ekorahy
          </p>
          <div className="flex items-center gap-6 font-light dark:text-white">
            <p className="flex items-center gap-2">
              <IoMdTime className="text-xl" />
              <span className="bg-gradient-to-r from-emerald-200 to-cyan-400 px-1 dark:from-emerald-300 dark:to-cyan-500">
                {readingTime} min read
              </span>
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <div className="flex flex-col lg:flex-row-reverse lg:gap-8">
          <TableOfContents content={content} />
          <div className="prose mt-0 !max-w-none p-4 pt-0 text-zinc-700 dark:text-zinc-400 dark:prose-headings:text-white dark:prose-strong:text-white lg:w-3/4">
            {content.map((block: any, index: number) => {
              if (block._type === "block" && block.style.startsWith("h")) {
                const text = block.children
                  .map((child: any) => child.text)
                  .join("");
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <div key={id} id={id}>
                    <PortableText value={[block]} />
                  </div>
                );
              }
              return <PortableText key={index} value={[block]} />;
            })}
          </div>
        </div>
      </ContentSection>
    </article>
  );
}

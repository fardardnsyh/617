import BlogArticle from "@/components/molecules/BlogArticle";
import { getBlog } from "@/data/remote/blog";
import { BlogCard } from "@/types";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Page() {
  const blog: BlogCard[] = await getBlog();
  return <BlogArticle initialBlog={blog} />;
}

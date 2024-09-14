import { client } from "@/utils/sanity";
import { groq } from "next-sanity";

export async function getBlog() {
  try {
    const query = `
  *[_type == 'blog'] | order(createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    readingTime,
    createdAt,
    tags
  }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getBlogDetail(slug: string) {
  try {
    const query = `
  *[_type == 'blog' && slug.current == '${slug}'] {
  'currentSlug': slug.current,
    title,
    content,
    titleImage,
    readingTime,
    tags,
    createdAt
  }[0]`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    throw error;
  }
}

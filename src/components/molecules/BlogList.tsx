import { BlogListProps } from "@/types";
import BlogItem from "../atoms/BlogItem";
import ErrorResponse from "./ErrorResponse";

export default function BlogList({ blog }: BlogListProps) {
  return (
    <>
      {blog.length === 0 ? (
        <ErrorResponse title="Empty Article" />
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
          {blog.map((post, idx) => (
            <BlogItem
              key={idx}
              title={post.title}
              smallDescription={post.smallDescription}
              currentSlug={post.currentSlug}
              titleImage={post.titleImage}
              readingTime={post.readingTime}
              createdAt={post.createdAt}
              tags={post.tags}
            />
          ))}
        </div>
      )}
    </>
  );
}

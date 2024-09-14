"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchBar from "@/components/atoms/SearchBar";
import BlogList from "@/components/molecules/BlogList";
import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import { BlogArticleProps, BlogCard } from "@/types";
import ErrorResponse from "./ErrorResponse";
import TagsFilter from "./TagsFilter";

export default function BlogArticle({ initialBlog }: BlogArticleProps) {
  const [blog, setBlog] = useState<BlogCard[]>(initialBlog);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>(
    () => searchParams.get("keyword") || "",
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    const tags = searchParams.get("keyword")?.split(",") || [];
    return tags
      .filter((tag) => tag.startsWith("tag:"))
      .map((tag) => tag.replace("tag:", ""));
  });

  useEffect(() => {
    setKeyword(searchParams.get("keyword") || "");
    const tags = searchParams.get("keyword")?.split(",") || [];
    setSelectedTags(
      tags
        .filter((tag) => tag.startsWith("tag:"))
        .map((tag) => tag.replace("tag:", "")),
    );
  }, [searchParams]);

  const updateSearchParams = (newKeyword: string) => {
    const params = new URLSearchParams(window.location.search);
    if (newKeyword) {
      params.set("keyword", newKeyword);
    } else {
      params.delete("keyword");
    }
    router.push(`?${params.toString()}`, undefined);
  };

  const onKeywordChangeHandler = (newKeyword: string) => {
    setKeyword(newKeyword);
    updateSearchParams(newKeyword);
  };

  const onRemoveKeywordHandler = () => {
    setKeyword("");
    updateSearchParams("");
  };

  const onTagClickHandler = (tag: string) => {
    setKeyword(tag);
    updateSearchParams(tag);
  };

  const filteredBlog = blog.filter((article) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    const matchesKeyword =
      article.title.toLowerCase().includes(lowerCaseKeyword) ||
      article.smallDescription.toLowerCase().includes(lowerCaseKeyword) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerCaseKeyword));

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => article.tags.includes(tag));

    return matchesKeyword && matchesTags;
  });

  const allTags = Array.from(new Set(blog.flatMap((article) => article.tags)));

  return (
    <article>
      <HeaderPage
        title="Blog"
        description="Share my thoughts, personal stories, tips, tricks, tech reviews, tutorials, etc."
      />
      <ContentSection>
        <section className="mb-6 lg:mb-8">
          <SearchBar
            keyword={keyword}
            keywordChange={onKeywordChangeHandler}
            removeKeyword={onRemoveKeywordHandler}
          />
          <TagsFilter tags={allTags} onTagClick={onTagClickHandler} />
        </section>
        {filteredBlog.length === 0 ? (
          <ErrorResponse title="Blog Not Found" />
        ) : (
          <BlogList blog={filteredBlog} />
        )}
      </ContentSection>
    </article>
  );
}

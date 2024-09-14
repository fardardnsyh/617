"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import ProjectList from "@/components/molecules/ProjectList";
import { ProjectArticleProps, Project } from "@/types";
import ErrorResponse from "./ErrorResponse";
import CategoryFilter from "./CategoryFilter";

export default function ProjectArticle({
  initialProjects,
}: ProjectArticleProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(initialProjects);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    () => searchParams.get("filteredBy") || "All",
  );

  useEffect(() => {
    const category = searchParams.get("filteredBy") || "All";
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category),
      );
    }
  }, [searchParams, projects]);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(window.location.search);
    if (category !== "All") {
      params.set("filteredBy", category);
    } else {
      params.delete("filteredBy");
    }
    router.push(`?${params.toString()}`, undefined);
  };

  return (
    <article>
      <HeaderPage title="Projects" description="Showcasing my works." />
      <ContentSection>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        {filteredProjects.length === 0 ? (
          <ErrorResponse title="Projects Not Found" />
        ) : (
          <ProjectList projects={filteredProjects} />
        )}
      </ContentSection>
    </article>
  );
}

import ProjectArticle from "@/components/molecules/ProjectArticle";
import { projects } from "@/data/local/projects";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Page() {
  return <ProjectArticle initialProjects={projects} />;
}

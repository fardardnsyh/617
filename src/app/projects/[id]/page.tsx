import ContentSection from "@/components/molecules/ContentSection";
import ErrorResponse from "@/components/molecules/ErrorResponse";
import FeaturesList from "@/components/molecules/FeaturesList";
import HeaderPage from "@/components/molecules/HeaderPage";
import TechStackList from "@/components/molecules/TechStackList";
import { projects } from "@/data/local/projects";
import { ProjectDetail } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `Project - ${project.name}`,
    description: project.description,
    keywords: project.techStack.join(", "),
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <article>
        <HeaderPage
          title="Project not found"
          backButton={true}
          backTo="projects"
        />
        <div className="my-10">
          <ErrorResponse title="Project Not Found" />
        </div>
      </article>
    );
  }

  const {
    id,
    name,
    image,
    isDemo,
    linkDemo,
    linkRepo,
    category,
    description,
    techStack,
    features,
  }: ProjectDetail = project;

  return (
    <article>
      <HeaderPage title="Project Detail" backButton={true} backTo="projects" />
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="mb-6">
            <div className="relative h-60 overflow-hidden rounded-md sm:h-96">
              <Image
                className="h-60 w-full transform object-cover transition-transform duration-300 hover:scale-125 sm:h-96"
                src={image}
                width={736}
                height={384}
                alt={`${name} image`}
                unoptimized
                priority={true}
              />
            </div>
            <section className="mt-4">
              <h4 className="mb-2 text-lg font-bold dark:text-white">Demo</h4>
              {isDemo ? (
                <Link
                  href={linkDemo}
                  className="block w-full rounded-md bg-zinc-100 p-2 underline dark:bg-zinc-900"
                >
                  {linkDemo}
                </Link>
              ) : (
                <p className="w-full rounded-md bg-zinc-100 p-2 dark:bg-zinc-900">
                  {linkDemo}
                </p>
              )}
            </section>
            <section className="mt-4">
              <h4 className="mb-2 text-lg font-bold dark:text-white">
                Repository
              </h4>
              <Link
                href={linkRepo}
                className="block w-full rounded-md bg-zinc-100 p-2 underline dark:bg-zinc-900"
              >
                {linkRepo}
              </Link>
            </section>
          </div>
          <section className="mt-6 lg:mt-0">
            <h3 className="mb-1 w-max text-2xl font-bold dark:text-white">
              {name}
            </h3>
            <p className="mb-2 bg-gradient-to-r from-emerald-200 to-cyan-400 bg-clip-text text-transparent dark:from-emerald-300 dark:to-cyan-500">
              {category}
            </p>
            <p className="text-justify">{description}</p>
            <section className="relative mt-6 pb-10">
              <h4 className="text-lg font-bold dark:text-white">Tech Used</h4>
              <TechStackList techStack={techStack} isDetail={true} />
            </section>
            <section className="mt-8">
              <h4 className="text-lg font-bold dark:text-white">Features</h4>
              <FeaturesList features={features} />
            </section>
          </section>
        </div>
      </ContentSection>
    </article>
  );
}

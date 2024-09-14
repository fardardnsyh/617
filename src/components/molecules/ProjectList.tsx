import { ProjectListProps } from "@/types";
import ProjectItem from "../atoms/ProjectItem";
import ErrorResponse from "./ErrorResponse";

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      {projects.length === 0 ? (
        <ErrorResponse title="Empty Projects" />
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
          {projects.map(
            ({
              id,
              name,
              category,
              image,
              description,
              linkDemo,
              techStack,
            }) => (
              <ProjectItem
                key={id}
                id={id}
                name={name}
                category={category}
                image={image}
                description={description}
                linkDemo={linkDemo}
                techStack={techStack}
              />
            ),
          )}
        </div>
      )}
    </>
  );
}

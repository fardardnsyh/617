import { buttonVariants } from "@/components/atoms/Button";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

type Category = "navbar" | "navside";
type Color = string | string[];
type Direction = "left" | "right";
type Speed = "fast" | "normal" | "slow";

declare interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

declare interface CareerItemProps {
  company: string;
  position: string;
  duration: string;
  type: string;
  logo: string;
  link: string;
}

declare interface DescriptionPageProps {
  description: string;
}

declare interface FavoriteTechItemProps {
  name: string;
  logo: React.ReactNode;
  color: string;
}

declare interface NavFooterItemProps {
  name: string;
}

declare interface NavItemProps {
  name: string;
  icon: React.ReactNode;
  linkTo: string;
  category: Category;
}

declare interface TechStack {
  id: string;
  name: string;
  logo: React.ReactNode;
  color: string;
}

declare interface ProjectItemProps {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  linkDemo: string;
  techStack: TechStack[];
}

declare interface SocialMediaItemProps {
  title: string;
  logo: React.ReactNode;
  color: Color;
  link: string;
}

declare interface TechItemProps {
  name: string;
  logo: React.ReactNode;
  color: string;
}

declare interface TitlePageProps {
  title: string;
}

declare interface TitleSectionProps {
  title: string;
  icon: React.ReactNode;
}

declare interface ContentSectionProps {
  children: React.ReactNode;
}

declare interface HeaderPageProps {
  title: string;
  description?: string;
  backButton?: boolean;
  backTo?: string;
}

declare interface TechListProps {
  direction?: Direction;
  speed?: Speed;
  pauseOnHover?: boolean;
  className?: string;
}

declare interface BlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  readingTime: string;
  createdAt: string;
  tags: string[];
}

declare interface FullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
  readingTime: string;
  createdAt: string;
  tags: string[];
}

declare interface Project {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  linkDemo: string;
  techStack: TechStack[];
}

declare interface BlogListProps {
  blog: BlogCard[];
}

declare interface TechStackListProps {
  techStack: TechStack[];
  isDetail?: boolean;
}

declare interface TagListProps {
  tags: string[];
}

declare interface TagItemProps {
  tag: string;
}

declare interface Heading {
  text: string;
  id: string;
  level: number;
}

declare interface TableOfContentsProps {
  content: ReactNode;
}

declare interface SearchBarProps {
  keyword: string;
  keywordChange: (newKeyword: string) => void;
  removeKeyword: () => void;
}

declare interface BlogArticleProps {
  initialBlog: BlogCard[];
}

declare interface ErrorResponseProps {
  title: string;
}

declare interface TagsFilterProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}

declare interface Project {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  linkDemo: string;
  techStack: TechStack[];
}

declare interface ProjectArticleProps {
  initialProjects: Project[];
}

declare interface ProjectListProps {
  projects: Project[];
}

declare interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

declare interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
};

declare interface FeatureItemProps {
  feature: string
}

declare interface FeaturesItemProps {
  features: string[];
}

declare interface ProjectDetail {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  techStack: TechStack[];
  features: string[];
  isDemo: boolean;
  linkDemo: string;
  linkRepo: string;
}

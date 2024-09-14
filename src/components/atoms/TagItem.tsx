import { TagItemProps } from "@/types";

export default function TagItem({ tag }: TagItemProps) {
  return (
    <p className="rounded-2xl bg-white px-3 py-1 backdrop-blur-md dark:bg-zinc-950 dark:text-white">
      {tag}
    </p>
  );
}

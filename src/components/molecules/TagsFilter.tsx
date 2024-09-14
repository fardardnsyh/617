import { TagsFilterProps } from "@/types";

export default function TagsFilter({ tags, onTagClick }: TagsFilterProps) {
  return (
    <div className="mt-1 flex items-center gap-2 overflow-x-auto lg:mt-3">
      {tags.map((tag) => (
        <button
          key={tag}
          className="rounded-md bg-zinc-100 px-4 py-1 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

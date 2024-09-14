import { CategoryFilterProps } from "@/types";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-6 flex gap-2 overflow-x-auto lg:mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`rounded px-4 py-1 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-emerald-200 to-cyan-400 text-zinc-950 dark:from-emerald-300 dark:to-cyan-500 dark:text-white"
              : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

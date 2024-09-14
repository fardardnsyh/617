import { SearchBarProps } from "@/types";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";

export default function SearchBar({
  keyword,
  keywordChange,
  removeKeyword,
}: SearchBarProps) {
  return (
    <label className="relative block w-full rounded-md border border-zinc-200 focus:outline-none dark:border-zinc-800">
      <CiSearch className="pointer-events-none absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 transform" />
      <input
        className="search-input h-12 w-full rounded-md border-0 p-2 px-12 focus:outline-none"
        type="text"
        value={keyword}
        placeholder="Search blog ..."
        onChange={(event) => keywordChange(event.target.value)}
      />
      <button
        type="button"
        className={`${keyword === "" ? "hidden" : "absolute"} right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform text-xl text-rose-600 hover:text-rose-700`}
        onClick={() => removeKeyword()}
      >
        <MdClear />
      </button>
    </label>
  );
}

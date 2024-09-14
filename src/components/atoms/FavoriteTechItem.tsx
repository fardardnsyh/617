import { FavoriteTechItemProps } from "@/types";
import React from "react";

export default function FavoriteTechItem({
  name,
  logo,
  color,
}: FavoriteTechItemProps) {
  return (
    <div className="group relative">
      <span className="text-4xl" style={{ color: color }}>
        {logo}
      </span>
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-zinc-200 px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-zinc-800">
        {name}
      </span>
    </div>
  );
}

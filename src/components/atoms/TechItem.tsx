import { TechItemProps } from "@/types";
import React from "react";

export default function TechItem({ name, logo, color }: TechItemProps) {
  return (
    <li className="flex items-center gap-2 rounded-md bg-white p-2 text-lg shadow-md shadow-emerald-200 dark:bg-zinc-950">
      <span className="text-xl" style={{ color: color }}>
        {logo}
      </span>{" "}
      {name}
    </li>
  );
}

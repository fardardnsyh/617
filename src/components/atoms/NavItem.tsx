"use client";

import { NavItemProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavItem({
  name,
  icon,
  linkTo,
  category,
}: NavItemProps) {
  const pathname = usePathname();
  return (
    <Link
      href={linkTo}
      className={clsx(
        "flex items-center gap-2 font-bold text-zinc-950 dark:text-white sm:rounded-md sm:px-5 sm:py-2 sm:hover:bg-zinc-200 dark:sm:hover:bg-zinc-800",
        {
          "sm:bg-gradient-to-r sm:from-emerald-200 sm:to-cyan-400 dark:sm:from-emerald-300 dark:sm:to-cyan-500":
            pathname === linkTo,
        },
      )}
    >
      <div
        className={clsx(
          "sm:hover:bg-transparant w-max rounded-full bg-zinc-950 p-1.5 text-2xl text-white hover:bg-zinc-200 hover:text-zinc-950 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white sm:bg-transparent sm:text-zinc-950 sm:hover:bg-transparent dark:sm:bg-transparent dark:sm:text-white",
          {
            "bg-gradient-to-r from-emerald-200 to-cyan-400 dark:from-emerald-300 dark:to-cyan-500 sm:bg-none":
              pathname === linkTo,
          },
        )}
      >
        <span>{icon}</span>
      </div>
      <span>{category === "navside" && name}</span>
    </Link>
  );
}

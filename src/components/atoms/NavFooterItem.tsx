"use client";

import { useState } from "react";
import { NavFooterItemProps } from "@/types";

export default function NavFooterItem({ name }: NavFooterItemProps) {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleClick = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className="group relative cursor-pointer border-none bg-transparent p-2 text-left"
      >
        <span className="group-hover:text-zinc-950 dark:group-hover:text-white">
          {name}
        </span>
        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100"></span>
      </button>
      {alertVisible && (
        <div className="fixed right-4 top-4 z-50 rounded-lg bg-zinc-950 p-4 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950">
          <p>🛠️ Under development stage</p>
        </div>
      )}
    </div>
  );
}

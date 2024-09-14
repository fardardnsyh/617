"use client";

import { ContentSectionProps } from "@/types";
import { motion } from "framer-motion";

export default function ContentSection({ children }: ContentSectionProps) {
  return (
    <motion.section
      className="border-b border-zinc-200 py-8 dark:border-zinc-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {children}
    </motion.section>
  );
}

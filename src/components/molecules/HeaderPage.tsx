"use client";

import { HeaderPageProps } from "@/types";
import { motion } from "framer-motion";
import clsx from "clsx";
import TitlePage from "../atoms/TitlePage";
import DescriptionPage from "../atoms/DescriptionPage";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function HeaderPage({
  title,
  description,
  backButton = false,
  backTo,
}: HeaderPageProps) {
  const router = useRouter();

  const backButtonHandler = () => {
    if (backTo) {
      router.push(`/${backTo}`);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "border-b border-dashed border-zinc-200 pb-6 dark:border-zinc-800",
        {
          "flex items-center gap-4": backButton,
        }
      )}
    >
      {backButton && backTo && (
        <button onClick={backButtonHandler}>
          <IoMdArrowBack className="text-xl text-slate-950 dark:text-white" />
        </button>
      )}
      <div>
        <TitlePage title={title} />
        {description && <DescriptionPage description={description} />}
      </div>
    </motion.header>
  );
}

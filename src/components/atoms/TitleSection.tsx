import { TitleSectionProps } from "@/types";

export default function TitleSection({ title, icon }: TitleSectionProps) {
  return (
    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-950 dark:text-white">
      <span className="text-2xl">{icon}</span>
      {title}
    </h3>
  );
}

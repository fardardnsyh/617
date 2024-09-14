import { TitlePageProps } from "@/types";

export default function TitlePage({ title }: TitlePageProps) {
  return (
    <h2 className="text-lg font-bold text-slate-950 dark:text-white">
      {title}
    </h2>
  );
}

import { SocialMediaItemProps } from "@/types";
import Link from "next/link";

export default function SocialMediaItem({
  title,
  logo,
  color,
  link,
}: SocialMediaItemProps) {
  const linkStyle = {
    background: Array.isArray(color)
      ? `linear-gradient(45deg, ${color.join(",")})`
      : color,
  };

  return (
    <Link
      href={link}
      className="flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-white sm:w-max transition-transform duration-300 hover:scale-105"
      style={linkStyle}
    >
      {logo} {title}
    </Link>
  );
}

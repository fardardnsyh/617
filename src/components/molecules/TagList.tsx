import { TagListProps } from "@/types";
import TagItem from "../atoms/TagItem";

export default function TagList({ tags }: TagListProps) {
  return (
    <>
      {tags.map((tag, index) => (
        <TagItem key={index} tag={tag} />
      ))}
    </>
  );
}

import { TechStackListProps } from "@/types";
import TechStackItem from "../atoms/TechStackItem";
import clsx from "clsx";

export default function TechStackList({
  techStack,
  isDetail = false,
}: TechStackListProps) {
  return (
    <div
      className={clsx("absolute bottom-0 flex gap-2", {
        "left-1/2 -translate-x-1/2 transform sm:left-0 sm:-translate-x-0":
          isDetail,
        "left-6": !isDetail,
      })}
    >
      {techStack.map(({ id, name, logo, color }) => (
        <TechStackItem key={id} name={name} logo={logo} color={color} />
      ))}
    </div>
  );
}

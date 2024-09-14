"use client";

import { Heading, TableOfContentsProps } from "@/types";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements: Heading[] = [];
    const extractHeadings = (blocks: any) => {
      blocks.forEach((block: any) => {
        if (block._type === "block" && block.style.startsWith("h")) {
          const level = parseInt(block.style.substring(1));
          const text = block.children.map((child: any) => child.text).join("");
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          headingElements.push({ text, id, level });
        }
      });
    };
    extractHeadings(content);
    setHeadings(headingElements);
  }, [content]);

  return (
    <aside className="top-0 p-4 lg:sticky lg:top-16 lg:h-full lg:w-1/4 lg:p-0">
      <h2 className="mb-2 text-lg font-semibold">Table of Contents</h2>
      <ul className="text-start">
        {headings.map((heading) => (
          <li key={heading.id} className={`pl-${(heading.level - 1) * 2} mb-2`}>
            <ScrollLink
              to={heading.id}
              smooth={true}
              offset={-50}
              className="cursor-pointer text-cyan-500 hover:text-cyan-600 dark:text-cyan-600 dark:hover:text-cyan-500"
            >
              {heading.text}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;

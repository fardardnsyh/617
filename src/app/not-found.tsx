import ContentSection from "@/components/molecules/ContentSection";
import HeaderPage from "@/components/molecules/HeaderPage";
import NotFoundTemplate from "@/components/molecules/NotFoundTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <article>
      <HeaderPage title="Error" description="Page not found" />
      <ContentSection>
        <NotFoundTemplate />
      </ContentSection>
    </article>
  );
}

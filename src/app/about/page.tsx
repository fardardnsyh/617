import TitleSection from "@/components/atoms/TitleSection";
import ContentSection from "@/components/molecules/ContentSection";
import FavoriteTechList from "@/components/molecules/FavoriteTechList";
import HeaderPage from "@/components/molecules/HeaderPage";
import { RxRocket } from "react-icons/rx";
import { Metadata } from "next";
import { MdConnectWithoutContact } from "react-icons/md";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <article>
      <HeaderPage title="About" description="Short story about me." />
      <ContentSection>
        <p className="mb-4">
          I am a graduate of the Informatics study program at Universitas
          Persada Indonesia Y.A.I. During my studies, I learned a lot,
          especially in the discipline of software engineering. I have
          experience developing desktop applications using Java, full-stack web
          development using PHP Native, Yii Framework, and JavaScript libraries
          or frameworks such as React.js and Express.js. Additionally, I have
          experience in mobile app development with Flutter (multi-platform) and
          Kotlin (Android native), also developing machine learning models using
          Python and TensorFlow.
        </p>
        <p className="mb-4">
          However, in recent years, I have decided to transition from being a
          generalist to specializing in front-end development, particularly in
          web applications. I see significant market opportunities in this
          field, as the front-end is crucial aspects for user interaction and
          accessibility across devices. User experience with applications
          heavily depends on the front-end, and due to my passion for visual
          aspects, I thoroughly enjoy working and progressing in this field.
        </p>
        <p>
          I learn and deepen my knowledge of front-end development through
          courses, tech documentation, blogs, and YouTube. I combine insights
          from these learning sources to form the foundation for developing
          applications.
        </p>
      </ContentSection>
      <ContentSection>
        <TitleSection title="My Favorite Tech Stack" icon={<RxRocket />} />
        <p className="mb-4">
          I&apos;m currently focusing on front-end web development and here are
          my favorite tech stack that I&apos;m constantly trying to improve.
        </p>
        <FavoriteTechList />
      </ContentSection>
      <ContentSection>
        <TitleSection title="Contact" icon={<MdConnectWithoutContact />} />
        <p>
          Feel free to contact me if you need any insights on web development,
          especially when it comes to frontend tasks. I will be delighted to
          assist you.
        </p>
      </ContentSection>
    </article>
  );
}

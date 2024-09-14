import { TechList } from "@/components/molecules/TechList";
import TitleSection from "@/components/atoms/TitleSection";
import CareerList from "@/components/molecules/CareerList";
import HeaderPage from "@/components/molecules/HeaderPage";
import Image from "next/image";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineWorkHistory, MdFileDownload } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import ContentSection from "@/components/molecules/ContentSection";

export default function Home() {
  return (
    <article>
      <HeaderPage
        title="Home"
        description="Introduction and professional career journey."
      />
      <ContentSection>
        <div className="mb-2 flex gap-2 sm:hidden">
          <Image
            src="/profile.jpg"
            className="rounded-full border border-zinc-200 dark:border-zinc-800"
            width={53.667}
            height={53.667}
            alt="Profil photo"
            priority={true}
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-bold">Eko Rahayu Widodo</h3>
            <p className="font-light">@ekorahy</p>
          </div>
        </div>
        <p className="mb-2 text-xl font-bold text-zinc-950 dark:text-white">
          Hi, I&apos;m Eko{" "}
          <span className="inline-block animate-wave text-3xl">👋</span>
        </p>
        <ul className="mx-4 mb-2 list-disc">
          <li>Front-end Engineer.</li>
          <li>Tech Enthusiast.</li>
          <li>Lifelong Learner.</li>
        </ul>
        <p className="mb-4">
          Working within the React ecosystem for front-end web development and
          using Kotlin for mobile app development (Android Native).
        </p>
        <q className="block w-full rounded-md bg-zinc-100 px-4 py-2 italic dark:bg-zinc-900">
          Manifesting ideas into digital realities that are easily accessible
          and inclusive for users
        </q>
        <div className="my-4 flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-emerald-200 to-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-emerald-200 to-cyan-400"></span>
          </span>
          <p className="bg-gradient-to-r from-emerald-200 to-cyan-400 bg-clip-text text-transparent">
            Open to new opportunities.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:ekorahy@gmail.com"
            className="flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-200 to-cyan-400 px-4 py-3 font-bold text-white hover:from-emerald-300 hover:to-cyan-500 dark:from-emerald-300 dark:to-cyan-500 dark:text-zinc-950 dark:hover:from-emerald-200 dark:hover:to-cyan-400"
          >
            <BiLogoGmail className="text-xl" />
            Email Me
          </Link>
          <Link
            href="/docs/Latest_CV.pdf"
            download
            className="group relative flex items-center gap-1"
          >
            <MdFileDownload className="text-xl group-hover:text-zinc-950 dark:group-hover:text-white" />
            <span className="group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-white">
              Download CV
            </span>
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-bottom-right scale-x-0 transform bg-gradient-to-r from-emerald-200 to-cyan-400 transition-transform duration-300 group-hover:origin-bottom-left group-hover:scale-x-100"></span>
          </Link>
        </div>
      </ContentSection>
      <ContentSection>
        <TitleSection title="Career" icon={<MdOutlineWorkHistory />} />
        <CareerList />
      </ContentSection>
      <ContentSection>
        <TitleSection title="Tech Stacks" icon={<FaCode />} />
        <TechList />
        <TechList direction="right" />
      </ContentSection>
    </article>
  );
}

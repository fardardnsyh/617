import { navItems } from "@/data/local/navigation";
import NavItem from "../atoms/NavItem";
import Image from "next/image";
import { ToggleTheme } from "../atoms/ToggleTheme";

export default function NavSide() {
  return (
    <aside className="fixed hidden h-screen px-6 sm:block">
      <div className="flex h-screen flex-col justify-between">
        <div>
          <div className="flex gap-2 border-b border-dashed border-zinc-200 pb-7 dark:border-zinc-800">
            <Image
              src="/profile.jpg"
              className="rounded-full border border-zinc-200 dark:border-zinc-800"
              width={46.667}
              height={46.667}
              alt="Profil photo"
              priority={true}
            />
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-zinc-950 dark:text-white">
                Ekorahy
              </h1>
              <p className="text-sm font-light">@ekorahy</p>
            </div>
          </div>
          <nav className="my-6 flex flex-col gap-2">
            {navItems.map(({ name, icon, linkTo }) => (
              <NavItem
                key={name}
                name={name}
                icon={icon}
                linkTo={linkTo}
                category="navside"
              />
            ))}
          </nav>
        </div>
        <div className="mx-auto mb-16">
          <ToggleTheme />
        </div>
      </div>
    </aside>
  );
}

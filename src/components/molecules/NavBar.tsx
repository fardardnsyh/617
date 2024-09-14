import { navItems } from "@/data/local/navigation";
import NavItem from "@/components/atoms/NavItem";
import { ToggleTheme } from "../atoms/ToggleTheme";

export default function NavBar() {
  return (
    <nav className="m-4 rounded-3xl bg-slate-950/30 backdrop-blur-md dark:bg-white/30">
      <div className="flex items-center justify-center gap-2 py-2">
        {navItems.map(({ name, icon, linkTo }) => (
          <NavItem
            key={name}
            name={name}
            icon={icon}
            linkTo={linkTo}
            category="navbar"
          />
        ))}
        <ToggleTheme />
      </div>
    </nav>
  );
}

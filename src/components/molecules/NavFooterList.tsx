import { navFooter } from "@/data/local/nav-footer";
import NavFooterItem from "../atoms/NavFooterItem";

export default function NavFooterList() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {navFooter.map(({ name }, idx) => (
        <NavFooterItem key={idx} name={name} />
      ))}
    </div>
  );
}

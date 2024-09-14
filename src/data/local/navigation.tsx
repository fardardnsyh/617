import { HiOutlineHome } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";
import { PiPencilLineDuotone } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { GrSend } from "react-icons/gr";

export const navItems = [
  {
    name: "Home",
    icon: <HiOutlineHome />,
    linkTo: "/",
  },
  {
    name: "About",
    icon: <VscAccount />,
    linkTo: "/about",
  },
  {
    name: "Projects",
    icon: <GoProjectSymlink />,
    linkTo: "/projects",
  },
  {
    name: "Blog",
    icon: <PiPencilLineDuotone />,
    linkTo: "/blog",
  },
  {
    name: "Contact",
    icon: <GrSend />,
    linkTo: "/contacts",
  },
];

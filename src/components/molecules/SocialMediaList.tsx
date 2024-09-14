import { contacts } from "@/data/local/contacts";
import SocialMediaItem from "../atoms/SocialMediaItem";

export default function SocialMediaList() {
  return (
    <div className="flex flex-wrap gap-2">
      {contacts.map(({ id, title, logo, color, link }) => (
        <SocialMediaItem
          key={id}
          title={title}
          logo={logo}
          color={color}
          link={link}
        />
      ))}
    </div>
  );
}

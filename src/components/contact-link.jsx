import Link from "next/link";
import { MdEmail } from "react-icons/md";
import {
  RiWhatsappFill,
  RiInstagramFill,
  RiTelegramFill,
  RiLinkedinBoxFill,
  RiFileFill,
} from "react-icons/ri";
import { SiGithub, SiYoutube } from "react-icons/si";

export default function ContactLink({ platform, link }) {
  const iconsObject = {
    email: <MdEmail />,
    whatsapp: <RiWhatsappFill />,
    telegram: <RiTelegramFill />,
    instagram: <RiInstagramFill />,
    linkedin: <RiLinkedinBoxFill />,
    cv: <RiFileFill />,
    github: <SiGithub />,
    youtube: <SiYoutube />,
  };
  return (
    <Link
      href={link}
      className="flex items-center gap-2 font-light text-brand-foreground-700 duration-200 hover:text-brand-purple-500"
    >
      {iconsObject[platform.toLowerCase()]}
      {platform}
    </Link>
  );
}

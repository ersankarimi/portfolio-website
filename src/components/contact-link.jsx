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

export default function ContactLink({
  withText = true,
  className = "",
  platform,
  link,
}) {
  const iconsObject = {
    email: <MdEmail className={className} />,
    whatsapp: <RiWhatsappFill className={className} />,
    telegram: <RiTelegramFill className={className} />,
    instagram: <RiInstagramFill className={className} />,
    linkedin: <RiLinkedinBoxFill className={className} />,
    cv: <RiFileFill className={className} />,
    github: <SiGithub className={className} />,
    youtube: <SiYoutube className={className} />,
  };
  return (
    <Link
      href={link}
      className="flex items-center gap-2 font-light text-brand-foreground-700 duration-200 hover:text-brand-purple-500"
    >
      {iconsObject[platform.toLowerCase()]}
      {withText && platform}
    </Link>
  );
}

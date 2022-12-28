import Image from "next/image";
import Link from "next/link";
import { MdLanguage } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export default function ProjectCard({
  title,
  description,
  image,
  demo,
  github,
  technologies,
}) {
  return (
    <div className="flex flex-col border-2 border-brand-foreground-700">
      <picture>
        <Image src={image} alt={`${title} Cover`} />
      </picture>
      <div className="flex flex-col gap-6 border-t-1 border-current p-4">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[14px]">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-sm text-brand-foreground-700">{description}</p>
            </div>
            <div className="flex items-center gap-4">
              <ButtonProjectCard isDemoButton href={demo}>
                <MdLanguage className="h-5 w-5" />
                Demo
              </ButtonProjectCard>

              <ButtonProjectCard href={github}>
                <SiGithub className="h-5 w-5" />
                Github
              </ButtonProjectCard>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {technologies.map((tech) => (
              <ProjectCardTechBadge tech={tech} key={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonProjectCard({ children, isDemoButton, href }) {
  return (
    <Link
      className="text-base font-light text-brand-foreground-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <button
        tabIndex={-1}
        type="button"
        className={`flex items-center gap-2 border-1 px-4 py-2 duration-200 hover:bg-brand-selection-500/50 hover:text-brand-foreground-500 ${
          isDemoButton
            ? "border-brand-purple-700 hover:border-brand-purple-500 hover:text-brand-purple-500"
            : "border-brand-foreground-700 hover:border-brand-foreground-500 hover:text-cyan-500"
        }`}
      >
        {children}
      </button>
    </Link>
  );
}

function ProjectCardTechBadge({ tech }) {
  return (
    <div className="flex w-max cursor-default items-center border-1 border-brand-comment-400/60 px-2 py-[2px] text-xs font-light text-brand-comment-500">
      {tech}
    </div>
  );
}

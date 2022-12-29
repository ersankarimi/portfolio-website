import classNames from "classnames";
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
    <article className="flex flex-col border-2 border-brand-foreground-700">
      <picture>
        <Image src={image} alt={`${title} Cover`} />
      </picture>
      <div className="flex flex-col gap-6 border-t-1 border-current p-4">
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[14px]">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-brand-foreground-700">{description}</p>
            </div>
            <div className="flex items-center gap-4">
              <ProjectCardLink isDemoButton to={demo}>
                <MdLanguage className="h-5 w-5" />
                Demo
              </ProjectCardLink>

              <ProjectCardLink to={github}>
                <SiGithub className="h-5 w-5" />
                Github
              </ProjectCardLink>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {technologies.map((tech) => (
              <ProjectCardTechBadge tech={tech} key={tech} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCardLink({ children, isDemoButton, to }) {
  return (
    <Link
      className={classNames(
        "flex items-center gap-2 border-1 px-4 py-2 text-sm font-light text-brand-foreground-600 duration-200 hover:bg-brand-selection-500/50 hover:text-brand-foreground-500 md:text-base",
        {
          "border-brand-purple-700 hover:border-brand-purple-500 hover:text-brand-purple-500":
            isDemoButton,
          "border-brand-foreground-700 hover:border-brand-foreground-500 hover:text-cyan-500":
            !isDemoButton,
        }
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={to}
    >
      {children}
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

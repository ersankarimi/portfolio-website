import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiReactrouter,
  SiJavascript,
  SiGithub,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiGit,
  SiReact,
} from "react-icons/si";

export default function BadgeSkill({ skill }) {
  const iconsObject = {
    html: <SiHtml5 />,
    css: <SiCss3 />,
    javascript: <SiJavascript />,
    react: <SiReact />,
    reactrouter: <SiReactrouter />,
    nextjs: <SiNextdotjs />,
    git: <SiGit />,
    github: <SiGithub />,
    tailwindcss: <SiTailwindcss />,
    bootstrap: <SiBootstrap />,
    figma: <SiFigma />,
    framermotion: <SiFramer />,
  };

  return (
    <div className="flex cursor-default items-center gap-2 border-1 border-brand-foreground-600/50 bg-brand-purple-500/[8%] py-1 px-3 text-brand-purple-400 duration-200 hover:border-brand-foreground-600/90 hover:bg-brand-purple-500/[15%] hover:text-brand-purple-300 hover:shadow-sm hover:shadow-brand-purple-500/70">
      {iconsObject[skill.toLowerCase().replace(/\W/, "")]}
      {skill}
    </div>
  );
}

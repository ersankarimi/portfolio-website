import { MdKeyboardArrowRight } from "react-icons/md";

import RedirectLink from "./redirect-link";

export default function PostCard({ title, description, link, year, type }) {
  return (
    <article className="flex flex-col border-1 border-brand-foreground-700">
      <div className="border-b-1 border-current bg-brand-selection-600/60 px-4 py-1">
        <h3 className="text-sm font-medium text-brand-foreground-600/90">
          {type}
        </h3>
      </div>
      <div className="flex flex-col gap-9 p-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">{title}</h1>
            <h6 className="text-xs text-brand-comment-500">{year}</h6>
          </div>
          <p className="text-sm text-brand-foreground-700">{description}</p>
        </div>

        <RedirectLink to={link}>
          Check this out <MdKeyboardArrowRight className="h-5 w-5" />
        </RedirectLink>
      </div>
    </article>
  );
}

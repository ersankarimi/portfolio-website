import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

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

        <Link
          href={link}
          className="flex w-max items-center gap-2 border-1 border-brand-foreground-700 px-4 py-2 font-light text-brand-foreground-600 duration-200 hover:bg-brand-selection-500/50 hover:text-brand-cyan-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check this out <MdKeyboardArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </article>
  );
}

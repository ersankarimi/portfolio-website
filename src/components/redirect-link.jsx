import classNames from "classnames";
import Link from "next/link";
import { MdUnfoldMore } from "react-icons/md";

export default function RedirectLink({ children, type = "default", to }) {
  return (
    <Link
      href={to}
      className={classNames("flex items-center gap-2 border-1 px-4 py-2", {
        "text-sm font-light text-brand-foreground-600 duration-200 hover:bg-brand-selection-500/50 hover:text-brand-foreground-500 md:text-base":
          type !== "view-more",
        "border-brand-foreground-700 hover:border-brand-foreground-500 hover:text-cyan-400":
          type === "default",
        "border-brand-purple-700 hover:border-brand-purple-500 hover:text-brand-purple-400":
          type === "demo",
        "mx-auto my-4 border-brand-foreground-600 bg-brand-selection-600/60 hover:bg-brand-selection-600":
          type === "view-more",
      })}
    >
      {type === "view-more" ? (
        <>
          View more <MdUnfoldMore className="h-5 w-5 rotate-90" />
        </>
      ) : (
        children
      )}
    </Link>
  );
}

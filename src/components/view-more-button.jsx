import Link from "next/link";
import { MdUnfoldMore } from "react-icons/md";

export default function ViewMoreButton({ to }) {
  return (
    <Link
      href={to}
      className="mx-auto my-4 border-1 border-brand-foreground-600 bg-brand-selection-600/60 duration-200 hover:bg-brand-selection-600"
    >
      <button
        type="button"
        tabIndex={-1}
        className="flex items-center gap-2 py-2 px-4 text-brand-cyan-500"
      >
        View more <MdUnfoldMore className="h-5 w-5 rotate-90" />
      </button>
    </Link>
  );
}

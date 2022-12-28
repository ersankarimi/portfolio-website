import { MdMenu } from "react-icons/md";

import Avatar from "./avatar";

export default function Header() {
  return (
    <header>
      <nav className="relative flex items-center justify-between">
        <Avatar isLink />
        <MdMenu className="h-6 w-6 cursor-pointer hover:text-brand-foreground-500/[85%]" />
      </nav>
    </header>
  );
}

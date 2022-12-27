import { MdMenu } from "react-icons/md";

import Avatar from "./avatar";

export default function Header() {
  return (
    <header className="px-6 py-3 ">
      <nav className="relative flex items-center justify-between text-brand-foreground-500">
        <Avatar isLink />
        <MdMenu className="h-6 w-6 cursor-pointer" />
      </nav>
    </header>
  );
}

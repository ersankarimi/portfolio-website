import { MdMenu } from "react-icons/md";

import Avatar from "./avatar";

export default function Header() {
  return (
    <header>
      <nav className="relative flex items-center justify-between">
        <Avatar isLink />
        <MdMenu className="h-6 w-6 cursor-pointer duration-200 hover:text-brand-purple-500" />
      </nav>
    </header>
  );
}

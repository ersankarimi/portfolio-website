import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

import avatar from "../../public/avatar.svg";

export default function Header() {
  return (
    <header className="px-6 py-3 ">
      <nav className="relative flex items-center justify-between text-brand-foreground-500">
        <Link href="/" className="flex items-center gap-2">
          <Image src={avatar} alt="Ersan Avatar" />
          <h1 className="font-bold ">Ersan</h1>
        </Link>
        <MdMenu className="h-6 w-6 cursor-pointer" />
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

import avatar from "../../public/avatar.svg";

export default function Avatar({ isLink, extraClassName }) {
  if (isLink) {
    return (
      <Link href="/" className={`flex items-center gap-2 ${extraClassName}`}>
        <Image src={avatar} alt="Ersan Avatar" />
        <h1 className="font-bold">Ersan</h1>
      </Link>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${extraClassName}`}>
      <Image src={avatar} alt="Ersan Avatar" />
      <h1 className="font-bold">Ersan</h1>
    </div>
  );
}

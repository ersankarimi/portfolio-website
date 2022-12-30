import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import avatar from "../../public/avatar.svg";

export default function Avatar({ isLink, extraClassName }) {
  if (isLink) {
    return (
      <Link
        href="/"
        className={classNames(
          "flex items-center gap-2 duration-200 hover:text-brand-purple-500 sm:text-lg",
          extraClassName
        )}
      >
        <Image
          className="h-auto xs:w-7 sm:w-8"
          src={avatar}
          alt="Ersan Avatar"
        />
        <h1 className="font-bold">Ersan</h1>
      </Link>
    );
  }

  return (
    <div
      className={classNames(
        "flex cursor-default items-center gap-2 duration-200 sm:text-lg",
        extraClassName
      )}
    >
      <Image className="h-auto xs:w-7 sm:w-8" src={avatar} alt="Ersan Avatar" />
      <h1 className="font-bold">Ersan</h1>
    </div>
  );
}

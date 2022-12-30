import { useState, useEffect, memo } from "react";

import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdMenu, MdClose } from "react-icons/md";

import useMediaQuery from "../hooks/useMediaQuery";

import Avatar from "./avatar";
import ContactLink from "./contact-link";

const CONTACTS = [
  {
    platform: "Email",
    link: "mailto:ersankarimii311@gmail.com",
  },
  {
    platform: "CV",
    link: "https://read.cv/ersankarimi",
  },
  {
    platform: "Github",
    link: "https://github.com/ersankarimi",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isUnderSM = useMediaQuery("(max-width: 640px)");
  const { pathname } = useRouter();

  const handleClick = () => {
    setIsOpen((prevCondition) => !prevCondition);
    document.body.classList.toggle("overflow-hidden");
  };

  useEffect(() => {
    setIsOpen(!isUnderSM);
  }, [isUnderSM]);

  return (
    <header>
      <nav className="flex items-center justify-between">
        <Avatar isLink />
        <NavMenu onClick={handleClick} isOpen={isOpen} />

        <div
          className={classNames(
            "absolute left-0 top-[100%] right-0 h-screen bg-brand-background-500/[99%] py-10 px-5 duration-150 xs:px-6 sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:py-0",
            {
              "hidden scale-0": !isOpen && isUnderSM,
              "block scale-100": isOpen || !isUnderSM,
            }
          )}
        >
          <NavLinks onClick={handleClick} pathname={pathname} />
          <NavContacts />
        </div>
      </nav>
    </header>
  );
}

function NavLinks({ onClick, pathname }) {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      {["home", "about-me", "projects", "posts"].map((link) => (
        <NavLink
          key={link}
          link={link}
          onClick={onClick}
          isActive={
            pathname === "/" && link === "home" ? true : pathname === link
          }
        />
      ))}
    </ul>
  );
}

// eslint-disable-next-line react/display-name
const NavLink = memo(
  ({ link, onClick, isActive }) => {
    return (
      <li
        key={link}
        className="border-b-1 border-b-brand-foreground-500/20 sm:border-transparent"
      >
        <Link
          href={link === "home" ? "/" : link}
          className={classNames(
            "block w-full py-2 duration-200 hover:text-brand-purple-500 xs:text-lg",
            {
              "font-bold": isActive,
              "font-light opacity-90": !isActive,
            }
          )}
          onClick={onClick}
        >
          <span className="text-brand-purple-500">#</span>
          {link}
        </Link>
      </li>
    );
  },
  (prevProps, nextProps) => prevProps.isActive === nextProps.isActive
);

function NavMenu({ isOpen, onClick }) {
  return isOpen ? (
    <MdClose
      className="h-6 w-6 cursor-pointer duration-200 hover:text-brand-purple-500 sm:hidden"
      onClick={onClick}
    />
  ) : (
    <MdMenu
      className="h-6 w-6 cursor-pointer duration-200 hover:text-brand-purple-500 sm:hidden"
      onClick={onClick}
    />
  );
}

function NavContacts() {
  return (
    <div className="mt-8 flex items-center justify-center gap-4 p-4 sm:hidden">
      {CONTACTS.map((contact) => (
        <ContactLink
          withText={false}
          {...contact}
          className="h-6 w-6 xs:h-7 xs:w-7"
          key={contact.platform}
        />
      ))}
    </div>
  );
}

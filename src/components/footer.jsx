import Avatar from "./avatar";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 border-t-1 border-t-brand-foreground-500 p-6">
      <div className="flex flex-col gap-2 xs:gap-3">
        <Avatar />
        <p className="max-w-xs text-xs text-brand-foreground-600 xs:text-sm">
          a Front-End Web Developer, Content Creator, and Student located in
          Indonesia.
        </p>
      </div>
      <p className="text-center text-sm font-semibold xs:text-base">
        © 2022 Ersan Karimi. All Rights Reserved.
      </p>
    </footer>
  );
}

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import heroSM from "../../public/hero-sm.png";
import { SectionPage, SectionTitle } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ersan Karimi</title>
      </Head>
      <SectionPage forHeroSection>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              Hi, I&apos;m&nbsp;
              <span className="text-brand-purple-500">Ersan Karimi</span>
            </h1>
            <h3 className="">
              a&nbsp;
              <span className="text-brand-purple-500">
                Front-End Web Developer
              </span>
              , <span className="text-brand-purple-500">Content Creator</span>,
              and
              <span className="text-brand-purple-500"> Student</span>.
            </h3>
          </div>
          <p className="text-xs font-normal leading-relaxed text-brand-foreground-600">
            Hi! I&apos;m currently studying Informatics at the Kalimantan
            Institute of Technology. I really enjoy Front-End Web Development
            and am excited to share my knowledge on my YouTube channel,&nbsp;
            <Link
              href="https://www.youtube.com/c/hajikoding"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-1 text-brand-foreground-600 hover:text-brand-foreground-500"
            >
              Haji Koding
            </Link>
            .
          </p>
          <button
            type="button"
            className="mt-3 w-max border-1 border-brand-purple-600 px-4 py-[6px] text-sm font-light duration-200 hover:border-brand-purple-500 hover:bg-brand-selection-500/40 hover:text-cyan-500"
          >
            #about-me
          </button>
        </div>

        <picture className="relative m-auto rounded-full">
          <div className="absolute inset-0 -z-10 rounded-full bg-linear-primary blur-3xl" />
          <source srcSet={heroSM.src} media="(min-width:520px)" />
          <Image src={heroSM} alt="Hero SM" />
        </picture>
      </SectionPage>

      <SectionPage>
        <SectionTitle title="Skills" />
      </SectionPage>
    </>
  );
}

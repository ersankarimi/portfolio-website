import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import greenpeaceCover from "../../public/greenpeace-cover.png";
import halobukuCover from "../../public/halobuku-cover.png";
import heroSM from "../../public/hero-sm.png";
import {
  SectionPage,
  SectionTitle,
  BadgeSkill,
  ProjectCard,
  PostCard,
  RedirectLink,
  ContactLink,
} from "../components";

export default function Home({ skills, projects, posts, contacts }) {
  return (
    <>
      <Head>
        <title>Home | Ersan Karimi</title>
      </Head>
      <SectionPage forHeroSection>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">
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
          <p className="text-sm font-normal leading-relaxed text-brand-foreground-600">
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
          <Image src={heroSM} alt="Hero SM" priority />
        </picture>
      </SectionPage>

      <SectionPage>
        <SectionTitle title="skills" />
        <div className="flex flex-wrap items-center gap-4">
          {skills.map((skill) => (
            <BadgeSkill skill={skill} key={skill} />
          ))}
        </div>
      </SectionPage>

      <SectionPage>
        <SectionTitle title="projects" />
        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
        <RedirectLink type="view-more" to="/skills" />
      </SectionPage>

      <SectionPage>
        <SectionTitle title="posts" />
        <div className="grid gap-8">
          {posts.map((post) => (
            <PostCard {...post} key={post.title} />
          ))}
        </div>
        <RedirectLink type="view-more" to="/posts" />
      </SectionPage>

      <SectionPage>
        <SectionTitle title="contacts" />
        <div className="flex flex-col gap-6">
          <p>
            On various social media, you may connect with me. Additionally, I
            have a CV.
          </p>
          <div className="flex w-max flex-col gap-3 border-1 border-brand-foreground-700 p-4">
            {contacts.map((contact) => (
              <ContactLink {...contact} key={contact.platform} />
            ))}
          </div>
        </div>

        <RedirectLink type="view-more" to="/contacts" />
      </SectionPage>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Router",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "GitHub",
        "Figma",
        "Framer Motion",
      ],
      projects: [
        {
          title: "Greenpeace",
          description:
            "An organization that works to protect the environment and human rights is called Greenpeace. We, the FE-14 team, received a Challenge Partner from Greenpeace to build a website that can assist them in resolving conflicts and other concerns at the Kampus Merdeka's Studi Independen Program in Skilvul.",
          image: greenpeaceCover,
          demo: "https://greenpeace.netlify.app",
          github: "https://github.com/FE-14/greenpeace-frontend",
          technologies: [
            "React",
            "React Router",
            "Redux",
            "Redux Toolkit",
            "Tailwind CSS",
            "Framer Motion",
          ],
        },
        {
          title: "HaloBuku",
          description:
            "E-Commerce to buy various books such as novels, and others. This is the Front-End Web Development Bootcamp Codepolitan x Catamyst Batch #1 final project.",
          image: halobukuCover,
          demo: "https://halobuku.netlify.app",
          github: "https://github.com/CrashTeamR/HaloBuku/",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        },
      ],
      posts: [
        {
          type: "Youtube",
          title: "HTML Tutorial",
          description:
            "In this video, I will share my knowledge of HTML. I will discuss a brief history of HTML, tags in HTML, attributes in HTML, and more.",
          year: 2021,
          link: "https://youtube.com/playlist?list=PLJ0buff7jNKOpAWlC_wnBV-N5Elkayk4b",
        },
        {
          type: "Youtube",
          title: "Extensions for Writing HTML Code",
          description:
            "In this video, I will share my used vscode extensions when writing the HTML code.",
          year: 2021,
          link: "https://youtu.be/k4rthX766wQ",
        },
      ],
      contacts: [
        {
          platform: "Email",
          link: "mailto:ersankarimii311@gmail.com",
        },
        {
          platform: "WhatsApp",
          link: "https://api.whatsapp.com/send?phone=62895321660050",
        },
        {
          platform: "Telegram",
          link: "https://t.me/ersankarimi",
        },
        {
          platform: "CV",
          link: "https://read.cv/ersankarimi",
        },
        {
          platform: "Github",
          link: "https://github.com/ersankarimi",
        },
        {
          platform: "Youtube",
          link: "https://www.youtube.com/c/hajikoding",
        },
        {
          platform: "Linkedin",
          link: "https://www.linkedin.com/in/ersankarimi/",
        },
        {
          platform: "Instagram",
          link: "https://www.instagram.com/ersankarimi/",
        },
      ],
    },
  };
}

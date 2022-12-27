export default function SectionPage({ children, forHeroSection }) {
  return (
    <section
      className={`flex flex-col items-start justify-center gap-8 ${
        forHeroSection ? "mt-8" : "mt-16"
      }`}
    >
      {children}
    </section>
  );
}

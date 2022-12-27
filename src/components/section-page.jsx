export default function SectionPage({ children }) {
  return (
    <section className="flex justify-center items-start flex-col gap-8 mt-8">
      {children}
    </section>
  );
}

export default function SectionTitle({ title }) {
  return (
    <div className="relative">
      <h2 className="text-xl font-bold text-brand-foreground-300">
        <span className="font-semibold text-purple-500">#</span>
        {title}
      </h2>
      <div className="stroke-black">{title}</div>
    </div>
  );
}

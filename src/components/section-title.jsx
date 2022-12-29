export default function SectionTitle({ title }) {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-brand-foreground-300">
        <span className="font-semibold text-purple-500">#</span>
        {title}
      </h2>
      <div className="h-[1px] w-full bg-brand-purple-500" />
    </div>
  );
}

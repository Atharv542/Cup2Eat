import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-bark/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <span className="font-display text-lg font-semibold text-forest">Cup2Eat</span>
        </div>
        <p className="text-bark/65">Demo website concept. Content is placeholder.</p>
      </div>
    </footer>
  );
}

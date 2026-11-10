import Logo from "./Logo";

const links = [
  { href: "#why", label: "Why edible" },
  { href: "#cups", label: "The cups" },
  { href: "#how", label: "How it works" },
  { href: "#uses", label: "Who it’s for" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-bark/10 bg-wheat/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="Cup2Eat home">
          <Logo size={46} />
          <span className="font-display text-xl font-semibold tracking-tight text-forest">Cup2Eat</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-forest">{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-wheat transition hover:bg-pine">
          Order samples
        </a>
      </nav>
    </header>
  );
}

import EdibleCup from "./EdibleCup";
import Reveal from "./Reveal";

const cups = [
  { name: "Oat and Honey", bg: "bg-forest", tone: "#E0B46A", dark: "#B8863A", liquid: "#6B3F22", tags: ["Hot", "Cold"], for: "Filter coffee, chai, warm milk", text: "Lightly sweet, snaps like a good biscuit." },
  { name: "Dark Cocoa", bg: "bg-bark", tone: "#8A5A3C", dark: "#5E3822", liquid: "#E9D3B0", tags: ["Cold"], for: "Cold coffee, shakes, lassi", text: "Deep and rich. Holds cold drinks for 45 minutes." },
  { name: "Ragi and Jaggery", bg: "bg-jam", tone: "#C98B58", dark: "#8A4E2B", liquid: "#E9A23B", tags: ["Cold"], for: "Smoothies, fresh juice", text: "Millet-based, earthy, a little caramel." },
  { name: "Millet and Cumin", bg: "bg-pine", tone: "#D6A96A", dark: "#A97B3C", liquid: "#C88A2D", tags: ["Hot"], for: "Soups, dal, hot broths", text: "Savory and sturdy. Stays crisp in hot liquid." },
];

export default function Flavors() {
  return (
    <section id="cups" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-forest sm:text-6xl lg:text-7xl">
          Four cups. Pick the one that matches your pour.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-bark/75">Made from grains and natural sweeteners. Sip it, snack it, or send it to the compost.</p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cups.map((c, i) => (
          <Reveal key={c.name} delay={i * 90} className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-6 text-wheat transition duration-500 hover:-translate-y-3 hover:shadow-[0_30px_50px_-20px_rgba(46,33,22,.6)] ${c.bg} ${i % 2 ? "lg:mt-10" : ""}`}>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-2 border-brass/30 transition-transform duration-700 group-hover:scale-150" />
            <div className="flex gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full border border-brass/60 px-3 py-1 text-xs font-semibold text-oat">{t}</span>
              ))}
            </div>
            <div className="relative mx-auto my-6 w-3/5 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <div className="absolute inset-x-[-20%] bottom-[-6%] top-[20%] -z-0 rounded-full bg-wheat/10" />
              <div className="relative"><EdibleCup id={`f${i}`} tone={c.tone} dark={c.dark} liquid={c.liquid} /></div>
            </div>
            <h3 className="font-display text-3xl font-semibold leading-tight">{c.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-wheat/80">{c.text}</p>
            <p className="mt-auto border-t border-brass/40 pt-4 text-sm font-semibold text-apricot">{c.for}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-xs text-bark/55">Flavour names and descriptions are placeholders for the demo.</p>
    </section>
  );
}

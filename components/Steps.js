import Reveal from "./Reveal";

const steps = [
  { n: "1", title: "Sip", text: "Pour in anything hot or cold. The cup stays firm for up to 45 minutes." },
  { n: "2", title: "Soften", text: "Near the end it turns tender, like a cone after ice cream." },
  { n: "3", title: "Savor", text: "Eat it. No lid to find, no bin to hunt for." },
  { n: "4", title: "Return to soil", text: "Drop a leftover piece in compost. It breaks down in weeks." },
];

export default function Steps() {
  return (
    <section id="how" className="grain relative overflow-hidden bg-pine text-wheat">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            From first sip to last crumb.
          </h2>
        </Reveal>
        <ol className="relative mt-20 grid gap-6 md:grid-cols-4">
          <span className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-brass/50 md:block" aria-hidden />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 140} className="group relative rounded-[2rem] border border-brass/30 bg-forest/70 p-7 pt-14 transition duration-300 hover:-translate-y-2 hover:border-apricot hover:bg-forest">
              <span className="absolute -top-0 left-7 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-apricot font-display text-3xl font-bold text-bark transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-110">
                {s.n}
              </span>
              <h3 className="font-display text-3xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-wheat/80">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

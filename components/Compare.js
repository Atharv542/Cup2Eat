import Reveal from "./Reveal";

const rows = [
  { name: "Plastic cup", note: "Takes centuries to break down.", width: "100%", bar: "bg-jam", value: "450", unit: "years", card: "bg-wheat" },
  { name: "Paper cup, plastic lined", note: "Hard to recycle, often landfilled.", width: "38%", bar: "bg-apricot", value: "20", unit: "years", card: "bg-wheat" },
  { name: "Cup2Eat", note: "Eaten. Or composted within weeks.", width: "3%", bar: "bg-apricot", value: "0", unit: "left behind", card: "bg-forest text-wheat ring-4 ring-brass md:scale-[1.03]" },
];

export default function Compare() {
  return (
    <section id="why" className="bg-oat">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-forest sm:text-6xl lg:text-7xl">
            Used for fifteen minutes. Remembered for centuries.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bark/75">
            Most cups outlive everyone who drank from them. Here is what one cup leaves behind.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {rows.map((r, i) => (
            <Reveal key={r.name} delay={i * 130} className={`flex flex-col rounded-[2rem] p-8 shadow-[0_20px_40px_-24px_rgba(46,33,22,.45)] transition-transform duration-300 hover:-translate-y-2 ${r.card}`}>
              <p className="font-display text-xl font-semibold">{r.name}</p>
              <p className="mt-6 font-display text-8xl font-semibold leading-none tracking-tight">{r.value}</p>
              <p className="mt-1 text-sm font-bold opacity-70">{r.unit}</p>
              <div className={`mt-8 h-4 rounded-full ${i === 2 ? "bg-pine" : "bg-oat"}`}>
                <div className={`bar h-4 rounded-full ${r.bar}`} style={{ width: r.width }} />
              </div>
              <p className="mt-4 text-sm leading-relaxed opacity-75">{r.note}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-bark/55">Illustrative figures for this demo. Replace with Cup2Eat’s verified data.</p>
      </div>
    </section>
  );
}

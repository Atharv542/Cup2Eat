import Reveal from "./Reveal";

const uses = [
  { tag: "Every day", title: "Cafés and chai stalls", text: "Swap disposable cups without changing your menu. Customers will talk about it.", cls: "md:col-span-3 md:row-span-2 bg-forest text-wheat", big: true },
  { tag: "Big days", title: "Weddings and events", text: "Serve welcome drinks and soups in cups guests can eat. Cleanup gets a lot shorter.", cls: "md:col-span-3 bg-apricot text-bark" },
  { tag: "Guests", title: "Hotels and airlines", text: "A small, memorable detail at breakfast and in-room service.", cls: "md:col-span-2 bg-oat text-bark" },
  { tag: "Teams", title: "Offices and campuses", text: "Stock the pantry with a cup that never ends up in the bin.", cls: "md:col-span-1 bg-jam text-wheat" },
];

export default function Uses() {
  return (
    <section id="uses" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-forest sm:text-6xl lg:text-7xl">
          Made for places that pour a lot of drinks.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-5 md:grid-cols-6">
        {uses.map((u, i) => (
          <Reveal key={u.title} delay={i * 100} className={`group flex flex-col justify-between rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 hover:rotate-[-1deg] ${u.cls} ${u.big ? "min-h-[22rem]" : "min-h-[10.5rem]"}`}>
            <span className="w-fit rounded-full border border-current/40 px-3 py-1 text-xs font-semibold opacity-80">{u.tag}</span>
            <div className="mt-8">
              <h3 className={`font-display font-semibold leading-tight ${u.big ? "text-5xl" : "text-2xl"}`}>{u.title}</h3>
              <p className={`mt-3 max-w-sm leading-relaxed opacity-80 ${u.big ? "text-lg" : "text-sm"}`}>{u.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

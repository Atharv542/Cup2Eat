import Logo from "./Logo";
import EdibleCup from "./EdibleCup";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-12 md:grid-cols-[1.15fr_1fr] md:pt-20">
      <div>
        <p className="hero-in mb-5 flex items-center gap-3 text-sm font-semibold text-forest">
          <Logo size={34} /> Edible cups and zero waste food
        </p>
        <h1 className="hero-in font-display text-5xl font-semibold leading-[1.02] tracking-tight text-forest sm:text-6xl lg:text-7xl" style={{ animationDelay: "120ms" }}>
          Finish your drink.<br />Then finish the cup.
        </h1>
        <p className="hero-in mt-6 max-w-lg text-lg leading-relaxed text-bark/80" style={{ animationDelay: "260ms" }}>
          Cup2Eat makes crunchy, edible cups for coffee, chai, smoothies and soups. When the last sip is gone, so is the cup.
        </p>
        <div className="hero-in mt-8 flex flex-wrap gap-4" style={{ animationDelay: "400ms" }}>
          <a href="#cups" className="rounded-full bg-forest px-7 py-3.5 font-semibold text-wheat transition hover:bg-pine">See the cups</a>
          <a href="#contact" className="rounded-full border-2 border-forest px-7 py-3.5 font-semibold text-forest transition hover:bg-forest hover:text-wheat">Order samples</a>
        </div>
      </div>

      <div className="hero-in relative mx-auto w-full max-w-md" style={{ animationDelay: "300ms" }}>
        <div className="rounded-full border-[6px] border-brass bg-forest p-10 shadow-[0_30px_60px_-20px_rgba(14,48,35,.6)] sm:p-14">
          <div className="mx-auto w-4/5">
            <EdibleCup id="hero" interactive />
          </div>
        </div>
      </div>
    </section>
  );
}

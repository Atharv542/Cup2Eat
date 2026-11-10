"use client";
import { useState } from "react";

const kinds = ["Coffee and chai", "Cold drinks", "Soups and hot food", "Events"];
const perks = ["Free sample box for your menu", "Reply within one working day", "No commitment, no minimum"];

function Field({ id, label, type = "text" }) {
  return (
    <div className="relative">
      <input id={id} type={type} required placeholder=" "
        className="peer w-full rounded-2xl border-2 border-wheat/25 bg-pine/70 px-4 pb-2 pt-6 text-wheat transition focus:border-apricot focus:outline-none" />
      <label htmlFor={id}
        className="pointer-events-none absolute left-4 top-1.5 text-xs text-apricot transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-wheat/60 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-apricot">
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [kind, setKind] = useState(kinds[0]);
  const [volume, setVolume] = useState(3000);

  return (
    <section id="contact" className="px-5 pb-28">
      <div className="grain relative mx-auto grid max-w-6xl gap-12 overflow-hidden rounded-[3rem] bg-forest p-8 text-wheat md:grid-cols-[1fr_1.1fr] md:p-16">
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border-[28px] border-brass/20" aria-hidden />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-apricot/15" aria-hidden />

        <div className="relative">
          <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
            Let’s put Cup2Eat in your hands.
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-wheat/80">Tell us what you pour. We’ll send samples that suit your menu.</p>
          <ul className="mt-10 space-y-4">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 font-semibold">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-apricot text-bark">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-[2rem] bg-pine/80 p-6 backdrop-blur sm:p-8">
          {sent ? (
            <div className="flex h-full min-h-[22rem] flex-col items-center justify-center text-center" role="status">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-apricot">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2E2116" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path className="draw" d="M5 12l5 5L20 7" /></svg>
              </span>
              <h3 className="mt-6 font-display text-4xl font-semibold">Your box is on its way to the top of our list.</h3>
              <p className="mt-3 max-w-xs text-wheat/75">We’ll write back within one working day to confirm your samples.</p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-apricot underline underline-offset-4">Send another request</button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Your name" />
                <Field id="email" label="Work email" type="email" />
              </div>

              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-wheat/80">What do you serve?</legend>
                <div className="flex flex-wrap gap-2">
                  {kinds.map((k) => (
                    <button key={k} type="button" aria-pressed={kind === k} onClick={() => setKind(k)}
                      className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition active:scale-95 ${kind === k ? "border-apricot bg-apricot text-bark" : "border-wheat/25 text-wheat hover:border-apricot"}`}>
                      {k}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <label htmlFor="vol" className="text-sm font-semibold text-wheat/80">Cups you use a month</label>
                  <span className="font-display text-3xl font-semibold text-apricot">{volume.toLocaleString("en-IN")}</span>
                </div>
                <input id="vol" type="range" min="500" max="20000" step="500" value={volume} onChange={(e) => setVolume(+e.target.value)} className="w-full accent-[#E9A23B]" />
                <p className="mt-1 text-xs text-wheat/60">About {Math.round(volume / 30).toLocaleString("en-IN")} cups a day</p>
              </div>

              <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-full bg-apricot px-6 py-4 text-lg font-bold text-bark transition hover:bg-brass active:scale-[.98]">
                Request my samples
                <svg className="transition-transform group-hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

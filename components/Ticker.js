const words = ["Sip it", "Snack it", "Compost it", "Zero waste", "Made to be eaten", "Crunchy to the last drop"];

export default function Ticker() {
  const row = [...words, ...words];
  return (
    <div className="ticker-wrap -rotate-1 overflow-hidden border-y-4 border-pine bg-brass py-4" aria-hidden="true">
      <div className="ticker flex w-max gap-10 whitespace-nowrap font-display text-3xl font-semibold text-pine sm:text-4xl">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#16442F"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" /></svg>
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

const BITES = [
  { x: 172, y: 64, r: 30 },
  { x: 26, y: 96, r: 32 },
  { x: 100, y: 58, r: 34 },
  { x: 176, y: 150, r: 44 },
  { x: 28, y: 176, r: 46 },
  { x: 100, y: 150, r: 130 },
];

export default function EdibleCup({ tone = "#D9A55B", dark = "#B97F35", liquid = "#6B3F22", id = "c", interactive = false }) {
  const [bites, setBites] = useState(0);
  const gone = bites >= BITES.length;
  const last = bites > 0 ? BITES[Math.min(bites, BITES.length) - 1] : null;

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 250" className={`w-full ${interactive && bites === 0 ? "bob" : ""}`} role="img" aria-label="An edible cup">
        <defs>
          <linearGradient id={`g-${id}`} x1="0" x2="1">
            <stop offset="0" stopColor={dark} />
            <stop offset=".35" stopColor={tone} />
            <stop offset=".75" stopColor={tone} />
            <stop offset="1" stopColor={dark} />
          </linearGradient>
          <mask id={`m-${id}`}>
            <rect width="200" height="250" fill="white" />
            {BITES.slice(0, bites).map((b, i) => (
              <circle key={i} className="bite" cx={b.x} cy={b.y} r={b.r} fill="black" />
            ))}
          </mask>
        </defs>
        <g mask={`url(#m-${id})`}>
          <path d="M30 62 L170 62 L152 222 Q150 234 138 234 L62 234 Q50 234 48 222 Z" fill={`url(#g-${id})`} />
          {[95, 125, 155, 185, 212].map((y, i) => (
            <path key={y} d={`M${35 + i * 3.4} ${y} Q100 ${y + 9} ${165 - i * 3.4} ${y}`} fill="none" stroke={dark} strokeOpacity=".45" strokeWidth="2" />
          ))}
          <ellipse cx="100" cy="62" rx="70" ry="14" fill={dark} />
          <ellipse cx="100" cy="64" rx="62" ry="10" fill={liquid} />
          <ellipse cx="100" cy="61" rx="70" ry="14" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="2" />
        </g>
        {last && !gone &&
          [0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={`${bites}-${i}`} className="crumb" cx={last.x} cy={last.y} r={2 + (i % 3)} fill={tone} style={{ "--dx": `${(i - 2.5) * 14}px`, animationDelay: `${i * 40}ms` }} />
          ))}
      </svg>

      {interactive && (
        <div className="mt-2 text-center">
          <p className="mb-3 min-h-[1.75rem] font-display text-lg text-oat" aria-live="polite">
            {gone ? "Nothing left. Not even a bin." : bites === 0 ? "Go on, it’s meant to be eaten." : "Crunchy, right?"}
          </p>
          <button
            onClick={() => setBites(gone ? 0 : bites + 1)}
            className="rounded-full bg-apricot px-6 py-3 text-sm font-bold text-bark transition hover:bg-brass active:scale-95"
          >
            {gone ? "Pour another cup" : "Take a bite"}
          </button>
        </div>
      )}
    </div>
  );
}

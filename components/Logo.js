import Image from "next/image";

export default function Logo({ size = 48 }) {
  return (
    <span className="relative inline-block shrink-0 overflow-hidden rounded-full" style={{ width: size, height: size }}>
      <Image src="/logo.jpg" alt="Cup2Eat logo" fill sizes={`${size}px`} className="scale-[1.1] object-cover" priority />
    </span>
  );
}

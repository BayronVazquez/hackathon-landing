import Image from "next/image";
import { montserrat } from "@/lib/theme";

type SponsorAvatarProps = {
  name: string;
  logo?: string;
  size?: number;
  className?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function SponsorAvatar({
  name,
  logo,
  size = 48,
  className = "",
}: SponsorAvatarProps) {
  const circleClass = `relative shrink-0 overflow-hidden rounded-full aspect-square ${className}`;
  const circleStyle = {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
  };

  if (logo) {
    return (
      <div
        className={`${circleClass} border border-white/10 bg-white`}
        style={circleStyle}
      >
        <Image
          src={logo}
          alt={name}
          width={size}
          height={size}
          className="absolute inset-0 h-full w-full rounded-full object-cover opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    );
  }

  return (
    <div
      className={`${circleClass} flex items-center justify-center border border-[#aaff00]/25 bg-[#aaff00]/10 text-[#aaff00]`}
      style={circleStyle}
    >
      <span
        className="font-black leading-none"
        style={{ fontFamily: montserrat, fontSize: size * 0.32 }}
      >
        {initials(name)}
      </span>
    </div>
  );
}

import type { SVGProps } from "react";

interface RmBrandMarkProps extends SVGProps<SVGSVGElement> {
  size?: number;
  alt?: string;
}

/**
 * Original typographic RM brand mark for RevMarshal Learn.
 * Deterministic vector paths for 'R' and 'M' in Off-White (#f8f8f7)
 * on Midnight (#0b0b0b) with 1px Graphite border (#2a2a2a).
 */
export default function RmBrandMark({
  size = 24,
  className = "",
  alt = "RevMarshal Learn",
  ...props
}: RmBrandMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label={alt}
      role="img"
      {...props}
    >
      <rect width="32" height="32" rx="7" fill="#0b0b0b" />
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="6.5"
        stroke="#2a2a2a"
        strokeWidth="1"
      />
      <path
        d="M 7 23.5 V 8.5 H 11.5 C 13.8 8.5 15 9.8 15 12 C 15 14.2 13.8 15.5 11.5 15.5 H 7 M 11 15.5 L 15 23.5"
        stroke="#f8f8f7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 17 23.5 V 8.5 L 21 16.5 L 25 8.5 V 23.5"
        stroke="#f8f8f7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

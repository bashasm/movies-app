import React from "react";

interface StarIconProps {
  size: number;
}

export default function StarIcon({ size = 25 }: StarIconProps): JSX.Element {
  return (
    <svg fill="currentColor" width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

// components/Logo.tsx
"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="80" height="80" rx="15" fill="#4F46E5" />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="40"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        T
      </text>
    </svg>
  );
}

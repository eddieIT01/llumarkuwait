'use client';
import React from 'react';

interface LLumarLogoProps {
  /** Height in pixels — width scales proportionally (viewBox is 260×60) */
  height?: number;
  /**
   * 'default'   = red icon + black text  (for light/white backgrounds)
   * 'white'     = red icon + white text  (for dark backgrounds)
   * 'all-white' = fully white icon + white text (monochrome on dark)
   */
  variant?: 'default' | 'white' | 'all-white';
  className?: string;
}

/**
 * LLumar logo as a pure inline SVG — no image file, no white-box artifact.
 * Red double-L chevron icon mark + "LLumar" wordmark.
 */
export default function LLumarLogo({
  height = 40,
  variant = 'default',
  className = '',
}: LLumarLogoProps) {
  const svgWidth = (height / 60) * 260;

  const iconFront = variant === 'all-white' ? '#FFFFFF' : '#CC0000';
  const iconBack  = variant === 'all-white' ? 'rgba(255,255,255,0.65)' : '#E03030';
  const textFill  = variant === 'default' ? '#111111' : '#FFFFFF';

  return (
    <svg
      width={svgWidth}
      height={height}
      viewBox="0 0 260 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LLumar Kuwait"
      role="img"
    >
      {/* ── Icon mark (60×60 viewBox geometry, placed at x=0) ── */}
      <defs>
        <mask id="llumar-overlap-cutout">
          <rect width="60" height="60" fill="white" />
          <polygon
            points="35.1,11.3 45.3,11.3 24.9,31.7 38.5,31.7 28.3,41.9 4.5,41.9"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinejoin="miter"
          />
        </mask>
      </defs>

      {/* Back L — lighter red */}
      <polygon
        points="45.3,18.1 55.5,18.1 35.1,38.5 48.7,38.5 38.5,48.7 14.7,48.7"
        fill={iconBack}
        mask="url(#llumar-overlap-cutout)"
      />

      {/* Front L — solid red */}
      <polygon
        points="35.1,11.3 45.3,11.3 24.9,31.7 38.5,31.7 28.3,41.9 4.5,41.9"
        fill={iconFront}
      />

      {/* ── Wordmark "LLumar" — starts at x=68 ── */}
      <text
        x="68"
        y="45"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="34"
        letterSpacing="-0.8"
        fill={textFill}
      >
        LLumar
      </text>
    </svg>
  );
}

'use client';
import React from 'react';
import Image from 'next/image';

interface LLumarLogoProps {
  /** Height in pixels */
  height?: number;
  /**
   * 'default'   = original PNG (red icon + black text) — for light/white backgrounds
   * 'white'     = white version via CSS filter — for dark backgrounds
   * 'all-white' = fully white monochrome — for dark backgrounds
   */
  variant?: 'default' | 'white' | 'all-white';
  className?: string;
}

/**
 * LLumar logo using the official uploaded PNG asset.
 * Transparent background PNG — red icon + black wordmark.
 */
export default function LLumarLogo({
  height = 40,
  variant = 'default',
  className = '',
}: LLumarLogoProps) {
  // The PNG is 1024×256 approx — maintain aspect ratio
  const aspectRatio = 4; // width / height
  const width = Math.round(height * aspectRatio);

  let filterStyle = '';
  if (variant === 'white') {
    // Invert black text to white, keep red icon visible on dark bg
    filterStyle = 'brightness(0) invert(1)';
  } else if (variant === 'all-white') {
    filterStyle = 'brightness(0) invert(1)';
  }

  return (
    <Image
      src="/assets/images/E059CFB8-5B26-481D-9D1A-D046B41D54D0-1787541717456.png"
      alt="LLumar Kuwait"
      width={width}
      height={height}
      className={className}
      style={filterStyle ? { filter: filterStyle } : undefined}
      priority
    />
  );
}

"use client";

import { useState, useEffect } from "react";

type SafeBackgroundImageProps = {
  src: string;
  className?: string;
  children?: React.ReactNode;
};

const placeholderGradient = "linear-gradient(135deg, #fef3c7, #ffedd5)";

export function SafeBackgroundImage({ src, className, children }: SafeBackgroundImageProps) {
  const [bgImage, setBgImage] = useState(`url(${src})`);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src || hasError) return;
    
    const img = new Image();
    img.src = src;
    img.onerror = () => {
      setHasError(true);
      setBgImage(placeholderGradient);
    };
  }, [src, hasError]);

  return (
    <div
      className={className}
      style={{ backgroundImage: bgImage }}
    >
      {children}
    </div>
  );
}

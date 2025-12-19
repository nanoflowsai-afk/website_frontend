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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src || hasError) {
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
      setBgImage(`url(${src})`);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
      setBgImage(placeholderGradient);
    };
    img.src = src;
  }, [src, hasError]);

  return (
    <div
      className={`${className} ${isLoading ? "blur-sm" : "blur-0"} transition-all duration-300`}
      style={{ backgroundImage: bgImage, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {children}
    </div>
  );
}

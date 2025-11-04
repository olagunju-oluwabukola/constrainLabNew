"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);


  const truncateWords = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const totalScrollWidth = container.scrollWidth / 2;
    let scrollPosition = 0;
    const speed = 1.2;

    let animationFrame: number;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += speed;
        if (scrollPosition >= totalScrollWidth) scrollPosition = 0;
        container.scrollLeft = scrollPosition;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);
  const loopImages = [...images, ...images];

  return (
    <div
      className="relative w-full max-w-7xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={scrollRef} className="flex overflow-x-hidden whitespace-nowrap">
        {loopImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw]  p-2"
          >
            <Card className="overflow-hidden border border-primary/10 shadow-sm transition-all hover:shadow-lg">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" object-cover transition-transform duration-700 ease-out"
                />
              </div>

              {image.caption && (
                <div className="p-3 bg-muted/40">
                  <p
                    className="text-sm text-muted-foreground text-center leading-snug"
                    title={image.caption}
                  >
                    {truncateWords(image.caption, 7)}
                  </p>
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

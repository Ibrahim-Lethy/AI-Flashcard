// components/ui/carousel.tsx
import * as React from "react";

const CarouselContext = React.createContext<{
  currentIndex: number;
  next: () => void;
  previous: () => void;
} | null>(null);

export function Carousel({ children, className }: { children: React.ReactNode, className?: string }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalItems = React.Children.count(children);

  const next = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  const previous = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  }, [totalItems]);

  return (
    <CarouselContext.Provider value={{ currentIndex, next, previous }}>
      <div className={`relative ${className}`}>{children}</div>
    </CarouselContext.Provider>
  );
}

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>;
}

export function CarouselItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function CarouselPrevious({ onClick }: { onClick?: () => void }) {
  const { previous } = useCarousel();
  return (
    <button
      onClick={() => {
        previous();
        if (onClick) onClick();
      }}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-gray-900 bg-opacity-75 text-white hover:bg-opacity-100 focus:outline-none"
    >
      <span className="sr-only">Previous</span>
      &#10094; {/* Left arrow character */}
    </button>
  );
}

export function CarouselNext({ onClick }: { onClick?: () => void }) {
  const { next } = useCarousel();
  return (
    <button
      onClick={() => {
        next();
        if (onClick) onClick();
      }}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-gray-900 bg-opacity-75 text-white hover:bg-opacity-100 focus:outline-none"
    >
      <span className="sr-only">Next</span>
      &#10095; {/* Right arrow character */}
    </button>
  );
}

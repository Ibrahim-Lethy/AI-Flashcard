// components/cards.tsx
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

type CardData = {
  id: number;
  content: string;
};

export function Cards({ cards }: { cards: CardData[] }) {
  const totalCards = cards.length;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <Carousel>
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem
              key={card.id}
              className={index === currentIndex ? "block" : "hidden"}
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">
                      {card.content}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext onClick={handleNext} />
      </Carousel>
      <Progress
        value={((currentIndex + 1) / totalCards) * 100}
        className="mt-4"
      />
    </div>
  );
}

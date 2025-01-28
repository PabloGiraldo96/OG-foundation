"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

type CardInfo = {
  title: string;
  route: string;
};

const cards: CardInfo[] = [
  { title: "Qué hacemos en OG house", route: "/oficio-og" },
  { title: "Hacia dónde nos dirigimos", route: "/valores" },
];

export default function ResenaComponent() {
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showConocenos, setShowConocenos] = useState(false);
  const conocenosRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleCardClick = (title: string, route: string) => {
    setSelectedCard(title);
    router.push(route);
  };

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (conocenosRef.current) {
        const rect = conocenosRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setShowConocenos(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={conocenosRef} className="relative  min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://ucarecdn.com/b6d4368e-3544-4167-a322-e52aaeee7191/_MG_1029.jpg"
          alt="OG House Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-5xl mx-auto pt-16 px-4 transition-opacity duration-1000 ${
          showConocenos ? "opacity-100" : "opacity-0"
        }`}
      >
        {show && (
          <Card className="bg-black shadow-xl mx-auto max-w-2xl">
            <CardContent className="p-8 ">
              <h3
                className="text-3xl font-semibold mb-4 text-center text-white animate-fade-in"
                style={{ animationDelay: "1.2s" }}
              >
                Explora más
              </h3>
              <p
                className="text-center mb-8 text-gray-300 text-lg animate-fade-in"
                style={{ animationDelay: "1.3s" }}
              >
                Descubre más sobre nuestras iniciativas. Ya sea que estés
                interesado en nuestros programas educativos sobre cannabis o en
                nuestras actividades de bienestar animal, tenemos mucho que
                compartir contigo.
              </p>
              <div
                className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
                style={{ animationDelay: "1.4s" }}
              >
                {cards.map((card, index) => (
                  <Button
                    key={index}
                    variant="secondary"
                    className={`w-full sm:w-auto hover:scale-105 px-8 py-6 text-base font-medium ${
                      selectedCard === card.title
                        ? "bg-gray-200"
                        : "bg-gray-100 hover:bg-gray-200"
                    } text-gray-900 transition-all duration-200`}
                    onClick={() => handleCardClick(card.title, card.route)}
                  >
                    {card.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

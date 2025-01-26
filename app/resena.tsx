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
  { title: "Qué hacemos en OG house", route: "/core-value" },
  { title: "Hacia dónde nos dirigimos", route: "/vision" },
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
          src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/473732082_1102656411608531_7329434150839522037_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=XYH0wYRmJa0Q7kNvgHFRtU7&_nc_oc=AdhQ3iT1p__fbPHoPgzfCHuvdu6i4azqnxBy3ddONIV9FHHe4IKC5x_VojvlcSAz_JD9Raxpqm-DmPHKOw4GBnTJ&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHmw2hjiKWCCNjugnf1hruY_N0zHSwraEaDCi8-GBlzEQ&oe=67B87F67"
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
                    className={`w-full sm:w-auto px-8 py-6 text-base font-medium ${
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

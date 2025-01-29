"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type ServiceCard = {
  title: string;
  route: string;
  image: string;
  description: string;
};

const services: ServiceCard[] = [
  {
    title: "Comercial",
    route: "/comercial",
    image:
      "https://ucarecdn.com/2e3ede4b-7a89-49ae-9352-8f78cbea64fc/_MG_1065.jpg",
    description: "OG Tienda",
  },
  {
    title: "Eventos",
    route: "/eventos",
    image:
      "https://ucarecdn.com/4c6cb4f4-70a3-4afc-9a20-14565731a84e/WhatsApp%20Image%202025-01-18%20at%203.20.47%20PM.jpeg",
    description: "Smoke Wild",
  },
  {
    title: "Social Y Cultural",
    route: "/social-cultural",
    image:
      "https://ucarecdn.com/3635167a-b85a-4498-9e18-e670190e8b16/47b2023f-26be-4a1c-96d3-7ffb518891d4.jpg",
    description: "OG Foundation",
  },
];

export default function LineasDeServicioComponent() {
  const [selectedCard] = useState<string | null>(null);

  //const handleCardClick = (title: string, route: string) => {
  //  setSelectedCard(title);
  //  //navigate(route);
  //};

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#111111] to-black">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/*<h2 className="text-4xl font-bold text-white mb-16 text-center">
          Nuestras Funciones
        </h2>*/}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.route} key={index}>
              <Card
                className={`relative overflow-hidden hover:scale-105 transition-all duration-200 bg-neutral-900/50 backdrop-blur-sm border-neutral-800 ${
                  selectedCard === service.title
                    ? "ring-2 ring-white"
                    : "hover:ring-2 hover:ring-white/50"
                }`}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full text-black border-white hover:bg-white/50"
                  >
                    Visitar
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

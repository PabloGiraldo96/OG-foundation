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
      "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/473242184_593694686699957_7569155032879200145_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=wcYGsTev9KMQ7kNvgGfHGZG&_nc_oc=AdgbG143n6fNj34XbCtvNCDdEdwCthxbwKLIK4lC_hJV4cHrt0riSUrOnWTgJRQGfG6xZm8xbqlGPovTUehxu_MO&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gGgpMWHGJ6X1V4jl0WmPoZhADHyLbNpYfnUfn_ebVZ66g&oe=67B99396",
    description: "OG Tienda",
  },
  {
    title: "Eventos",
    route: "/eventos",
    image:
      "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474080154_1682872735692682_9121853189773137746_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=MRUPxiWN16IQ7kNvgHbSWE1&_nc_oc=Adj59hqxFJ7J2S6PpfsauOFkn6vjH5PnHZ4-2pa6BBRnkxjacR-CpqzpSxWNtDf3MSWgxUqEtDwlLRYo1EYtXQid&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHdauteFx7OockFEQvuRxWjaax8P8YOhfVCNPQ13WcC-g&oe=67B8B185",
    description: "Smoke Wild",
  },
  {
    title: "OG Foundation",
    route: "/social-cultural",
    image:
      "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474011688_612014021422558_8510976177691887430_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=zCI-fdx1tV4Q7kNvgHLBvP6&_nc_oc=AdjtopEfZAEPUOuz6gDUDWBawuWoYKVHUtY61CM0LmfvbiKPMtrR8oPhVqtyBpWhwNEzCwHoSfG_pNgwtIqBdMMO&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gEKXkvovj6P6zL_83mXOuOYPBsdZscmA0csU2TiDJ1T7g&oe=67B98C17",
    description: "Social Y Cultural",
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
                className={`relative overflow-hidden transition-all duration-200 bg-neutral-900/50 backdrop-blur-sm border-neutral-800 ${
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

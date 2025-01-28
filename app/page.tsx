"use client";

import LineasDeServicioComponent from "./lineas-de-servicio";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ContentGrid from "./content-grid";
import ResenaComponent from "./resena";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./navbar";

type TestimonialType = {
  name: string;
  content: string;
};

//type images = {
//  image: string;
//};
//
//const ImageGallery = () => {
//  const images = [
//    {
//      src: "/images/image1.jpg",
//      alt: "Descripción de la primera imagen",
//    },
//    {
//      src: "/images/image2.jpg",
//      alt: "Descripción de la segunda imagen",
//    },
//    {
//      src: "/images/image3.jpg",
//      alt: "Descripción de la tercera imagen",
//    },
//  ];
//};

const testimonials: TestimonialType[] = [
  {
    name: "Carolina M.",
    content:
      "Estas gomitas son deliciosas. Me encanta que estén hechas con ingredientes naturales. ¡Son perfectas para cuando quiero relajarme!",
  },
  {
    name: "Luis G",
    content:
      "Siempre he buscado estas gomitas. No solo saben bien, sino que también me ayudan a mantenerme despejado.",
  },
  {
    name: "Sofia P",
    content:
      "No puedo resistirme a su sabor de los destilados OG. Me siento tranquila con un producto de calidad.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full">
        <section
          className="h-screen relative flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${encodeURI(
              "https://ucarecdn.com/359d459f-984e-4a43-a5dd-93308e3d3ea5/-/preview/1000x450/"
            )})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center mt-72">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-7xl font-bold mb-4"
            >
              LINEAS DE SERVICIO
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-3xl mt-8 mb-8"
            >
              OG HOUSE
            </motion.p>
          </div>
        </section>
        {/* Services Section */}
        <LineasDeServicioComponent />

        <ContentGrid />

        <ResenaComponent />

        <section className="py-24 ">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Comentarios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-black/20 backdrop-blur-lg border-0 bg-neutral-900"
                >
                  <CardContent className="p-6">
                    <p className="text-gray-300 hover:text-white mb-4 text-lg">
                      {testimonial.content}
                    </p>
                    <p className="font-semibold text-white">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje! </h2>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-neutral-800 border-neutral-700"
              />
              <Link href="mailto:oghousemed@gmail.com" passHref>
                <Button
                  //href="mailto:oghousemed@gmail.com"
                  variant="outline"
                  className="text-black hover:scale-105 border-black "
                >
                  Enviar
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="py-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2024 OG House Foundation. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

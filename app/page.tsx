"use client";

import LineasDeServicioComponent from "./lineas-de-servicio";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ContentGrid from "./content-grid";
import ResenaComponent from "./resena";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="min-h-screen bg-black text-white">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between h-16 items-center px-4 md:px-8"
      >
        <div className="flex items-center">
          <Link href="/" passHref>
            <span className="text-xl font-semibold">OG House</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/comercial" passHref>
            <Button variant="link" className="text-white">
              Comercial
            </Button>
          </Link>
          <Link href="/eventos" passHref>
            <Button variant="link" className="text-white">
              Eventos
            </Button>
          </Link>
          <Link href="/social-cultural" passHref>
            <Button variant="link" className="text-white">
              OG Foundation
            </Button>
          </Link>

          {/*<Link href="/social-cultural" passHref>
            <Button
              variant="link"
              size="sm"
              className="text-white border-white hover:bg-white/20"
            >
              Inicio
            </Button>
          </Link>*/}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${encodeURI(
            "https://scontent.feoh1-1.fna.fbcdn.net/v/t1.15752-9/473829422_1672081603662253_1993388561946463660_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEb5oevIvcHcMDbc4-T-JxNdMxYx6Ix9kh0zFjHojH2SAuqW4KlJvC9iSBtih6MyCBV4rPl3_jYzPby8n713Dga&_nc_ohc=vyDaaHXa2DMQ7kNvgGV_us3&_nc_oc=AdjICMwyjB0W43VtCVv5UGcW0Lt3-MK4GHHv7DSRnzsrRut8zcC4IM4V0Gv8FwYCFCW413EvDOYC8dpkQ38fNQ_7&_nc_zt=23&_nc_ht=scontent.feoh1-1.fna&oh=03_Q7cD1gESpgq0UUe2dC7VZk3jXWB7p8I2s_MhrNWSUfDhB-us4Q&oe=67BD222C"
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

      {/*<SocialCultural />*/}
      {/*<EventosComponent />*/}
      <section className="py-24 ">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-4xl font-bold mb-12 text-center">Comentarios</h2>
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

      {/* Footer */}
      <footer className="py-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2024 OG House Foundation. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

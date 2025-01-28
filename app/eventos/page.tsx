"use client";

import { Card, CardContent } from "@/components/ui/card";
//import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../navbar";

const eventFeatures = [
  "Música en Vivo",
  "Cata de Productos Cannábicos",
  "Cócteles",
  "Exhibición productos dispensario",
  "Marcas Locales Invitadas",
  "Sorteos",
];
const CataFeatures = [
  "Exploración Sensorial",
  "Maridajes Exclusivos",
  "Aprendizaje Personalizado",
  "Ambiente Privado y Elegante",
];

type TestimonialType = {
  name: string;
  content: string;
};

const eventImages = [
  {
    src: "https://ucarecdn.com/b6d84d1c-677e-4829-9dbe-f758311571ec/-/preview/881x1000/",
    alt: "SMOKE WILD Event Poster",
    width: 600,
    height: 800,
  },
  {
    src: "https://ucarecdn.com/8ec5ecb2-54ef-4a42-b8b8-310c06aaef6d/-/preview/746x1000/",
    alt: "Event Details",
    width: 400,
    height: 400,
  },
  {
    src: "https://ucarecdn.com/b9ed798a-57a1-431d-8869-866f1e57988b/-/preview/1000x834/",
    alt: "Event Atmosphere",
    width: 400,
    height: 400,
  },
];
const CataImages = [
  {
    src: "https://ucarecdn.com/799026bc-f57c-4771-aad8-cdf9c04ba37f/-/preview/772x1000/",
    alt: "Catas privadas",
    width: 600,
    height: 800,
  },
  {
    src: "https://ucarecdn.com/d8b344ad-b0e9-4f72-9476-e375fd5987b2/-/preview/727x1000/",
    alt: "Catas privadas",
    width: 400,
    height: 400,
  },
  {
    src: "https://ucarecdn.com/e0629cb1-47e4-4ebf-91aa-9696f73beced/-/preview/1000x735/",
    alt: "Catas privadas",
    width: 400,
    height: 400,
  },
];

const testimonials: TestimonialType[] = [
  {
    name: "Carolina M.",
    content:
      "Fue una experiencia sensorial increíble, cada variedad tenía un perfil de aromas y sabores únicos que jamás imaginé!",
  },
  {
    name: "Luis G",
    content:
      "La guía experta durante la cata realmente ayudó a entender las sutilezas de cada cepa y cómo influyen en la experiencia.",
  },
  {
    name: "Sofia P",
    content:
      "Me encantó la atmósfera relajada y educativa, es una forma completamente nueva y sofisticada de explorar el cannabis.",
  },
];

export default function EventosComponent() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Eventos OG
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Main Event Poster */}
          <motion.div
            className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={eventImages[0].src || "/placeholder.svg"}
              alt={eventImages[0].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute top-4 left-4 right-4"></div>
          </motion.div>

          {/* Event Details Section */}
          <div className="space-y-8">
            {/* Small Images Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {eventImages.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>

            {/* Event Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    SMOKE WILD
                  </h2>
                  <p className="text-gray-300 mb-8 text-center">
                    Smoke Wild es un evento vibrante y multifacético diseñado
                    para celebrar y explorar la cultura cannábica en un ambiente
                    festivo y sofisticado. Este evento reúne a entusiastas y
                    conocedores del cannabis en un espacio lleno de experiencias
                    sensoriales y sociales.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {eventFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-zinc-800/50 p-4 rounded-lg text-center text-white hover:bg-zinc-700/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Más eventos{" "}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Main Event Poster */}
          <motion.div
            className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={CataImages[0].src || "/placeholder.svg"}
              alt={CataImages[0].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
            <div className="absolute top-4 left-4 right-4">
              {/*<Badge className="bg-emerald-500/80 text-white hover:bg-emerald-600">GRANIZADOS 2X1 TODA LA NOCHE</Badge>*/}
            </div>
          </motion.div>

          {/* Event Details Section */}
          <div className="space-y-8">
            {/* Small Images Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {CataImages.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>

            {/* Event Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    CATAS PRIVADAS
                  </h2>
                  <p className="text-gray-300 mb-8 text-center">
                    Descubre el Arte de la Cata de Cannabis: Una Experiencia
                    Privada Exclusiva Adéntrate en el mundo de los sabores y
                    aromas únicos del cannabis con nuestras catas privadas.
                    Diseñadas para entusiastas y conocedores por igual, nuestras
                    sesiones ofrecen una inmersión total en el universo del
                    cannabis, guiada por expertos en la materia.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {CataFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-zinc-800/50 p-4 rounded-lg text-center text-white hover:bg-zinc-700/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        <section className="py-24 ">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-4xl font-bold mb-12 text-white text-center">
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
            <Link href="/" passHref>
              <Button className="mt-32 ml-6 bg-gray-200 bg-opacity-20 text-lg hover:scale-105 text-white hover:bg-white hover:bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-200">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <footer className="py-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2024 OG House Foundation. Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
  );
}

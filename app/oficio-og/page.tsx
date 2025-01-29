"use client";

import { Card, CardContent } from "@/components/ui/card";
//import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

//const valores = [
//  "Evolución para el crecimiento",
//  "transparencia en acción",
//  "Pasión en el trabajo",
//  "Construcción colectiva",
//  "Servicio con dedicación",
//  "innovación con sabiduría",
//];

const eventImages = [
  {
    src: "https://ucarecdn.com/ab9557dd-17a5-4e51-9bd7-2883d8f48f17/_MG_0987.jpg",
    alt: "Que hacemos OG",
    width: 600,
    height: 500,
  },
];

export default function EventosComponent() {
  return (
    <section className="min-h-screen bg-black text-white">
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
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 lg:px-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Que hacemos en OG house?
        </motion.h1>

        <div className="grid md:grid-cols-1 gap-8 mb-16">
          {/* Main Event Poster */}
          <motion.div
            className="relative aspect-[21/7] rounded-xl overflow-hidden shadow-4sxl"
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
                  {/*<h2 className="text-3xl font-bold text-white mb-6 text-center">
                    SMOKE WILD
                  </h2>*/}
                  <p className="text-gray-300 mb-8 text-lg hover:text-white text-center">
                    En OG HOUSE S.A.S., nos dedicamos a promover el consumo
                    responsable a través de una variedad de iniciativas
                    educativas y prácticas de cultivo en el hogar. Nuestro
                    enfoque abarca desde conversatorios informativos hasta
                    talleres educativos, que buscan proporcionar a nuestros
                    clientes el conocimiento necesario para una experiencia
                    saludable y enriquecedora.
                  </p>
                  <p className="text-gray-300 mb-8 text-lg hover:text-white text-center">
                    Además de ofrecer una amplia gama de plantas, que incluyen
                    especias, aromáticas y medicinales para promover el
                    bienestar, también nos especializamos en la comercialización
                    de productos de cannabis a base de CBD de carácter
                    medicinal. Asimismo, ofrecemos una selección de parafernalia
                    para el consumo de cannabis, productos recreativos y una
                    línea de moda que refleja nuestro compromiso con un estilo
                    de vida consciente.
                  </p>
                  <p className="text-gray-300 mb-8 text-lg hover:text-white text-center">
                    Contamos con experiencia en la planificación y ejecución de
                    eventos tanto privados como públicos, diseñados para crear
                    experiencias memorables y duraderas para nuestros clientes.
                    Además, tenemos la capacidad para implementar programas de
                    responsabilidad social empresarial, centrándonos en la
                    promoción de prácticas de consumo responsable que beneficien
                    tanto a la comunidad como al medio ambiente.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <Link href="/" passHref>
            <Button className="mt-2 ml-5 bg-gray-200 bg-opacity-20 hover:scale-105 text-white hover:bg-white text-lg hover:bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-200">
              <ArrowLeft className="mr-2 h-4 w-4 " /> Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
      <footer className="py-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2024 OG House Foundation. Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
  );
}

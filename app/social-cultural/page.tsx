"use client";

import { Button } from "@/components/ui/button";
//import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../navbar";

const educationalPoints = [
  "Conocimiento Integral",
  "Consumo Responsable",
  "Mitos y Realidades",
  "Consejos Prácticos",
];
const foundationPoints = ["Compromisos y alianzas", "Impacto positivo"];

//const contactUs: [
//  { href: ""; label: "instagram" },
//  { href: "/eventos"; label: "Eventos" },
//  { href: "/social-cultural"; label: "OG Foundation" }
//];

const carouselImages = [
  {
    src: "https://ucarecdn.com/3ca555c4-5a57-4027-be81-e329fbda38db/WhatsApp%20Image%202025-01-18%20at%202.37.29%20PM%20(3).jpeg",
    alt: "Equipo",
    title: "Charlas Educativas",
  },
  {
    src: "https://ucarecdn.com/fb4fd0b0-b52a-4360-b9fb-efcb8a54fda6/IMG_9257.jpg",
    alt: "Soldado",
    title: "Charlas Educativas",
  },
  {
    src: "https://ucarecdn.com/5c9dde68-c480-47ce-bd8c-0f2d56c7e903/IMG_9259.jpg",
    alt: "Barcos",
    title: "Charlas Educativas",
  },
  {
    src: "https://ucarecdn.com/67955167-a0f6-44ef-b303-f6fe680b7e1e/IMG_9309.jpg",
    alt: "almirante",
    title: "Charlas Educativas",
  },
  {
    src: "https://ucarecdn.com/56e4ddc5-5ba3-4e54-9809-11ce3f840c8f/IMG_9312.jpg",
    alt: "SoldadoRaso",
    title: "Charlas Educativas",
  },
  // Add more images as needed
];

const carouselFundation = [
  {
    src: "https://ucarecdn.com/6c3167aa-b1e2-48e5-bd85-2e4d9c1db4ff/WhatsApp%20Image%202025-01-18%20at%202.37.12%20PM.jpeg",
    alt: "Perrito",
    title: "OG Foundation",
  },
  {
    src: "https://ucarecdn.com/2a10ec00-12ea-4daa-bf00-aecca082452b/WhatsApp%20Image%202025-01-18%20at%202.37.22%20PM.jpeg",
    alt: "ChicaSonriendo",
    title: "OG Foundation",
  },
  {
    src: "https://ucarecdn.com/518f2440-8ce2-4852-8849-73c98d09c7bc/WhatsApp%20Image%202025-01-18%20at%202.37.11%20PM.jpeg",
    alt: "Logo",
    title: "OG Foundation",
  },
  {
    src: "https://ucarecdn.com/96b82f33-e95f-4eda-830c-ea3a526b7697/WhatsApp%20Image%202025-01-18%20at%202.37.22%20PM%20(1).jpeg",
    alt: "Gato",
    title: "OG Foundation",
  },
  {
    src: "https://ucarecdn.com/e9a15a84-63ba-4c43-a395-c1ddc608f07c/WhatsApp%20Image%202025-01-18%20at%202.37.29%20PM%20(1).jpeg",
    alt: "GatoPequeno",
    title: "OG Foundation",
  },
  {
    src: "https://ucarecdn.com/1003d455-60e6-4e44-8864-92363fc9ed08/WhatsApp%20Image%202025-01-18%20at%202.37.29%20PM%20(2).jpeg",
    alt: "Manos",
    title: "OG Foundation",
  },
  // Add more images as needed
];

export default function SocialCultural() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}

      <Navbar />
      {/* Main Content */}
      <div className="w-full">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* skills issue  */}

            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Hablemos de Cannabis:
              <br />
              Información y Consumo Responsable
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 mt-8">
              Únete a nosotros para una conversación reveladora y educativa
              sobre el cannabis, diseñada para promover un entendimiento claro y
              responsable de esta planta fascinante. En Hablemos de Cannabis,
              abordaremos temas esenciales que te ayudarán a tomar decisiones
              informadas sobre el consumo.
            </p>
          </motion.div>

          {/* Educational Points */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {educationalPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-colors"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold">{point}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image Carousel */}
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        loading="lazy"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white" />
              <CarouselNext className="text-white" />
            </Carousel>
          </motion.div>
        </main>
      </div>
      <motion.div
        className="text-center mb-16 mt-32"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          ¡Únete a Nuestra Misión por el Bienestar Animal!
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          En nuestra fundación, nacemos de la pasión por transformar la vida de
          los animales en condición de calle. Nuestra prioridad es atender los
          rincones más vulnerables, llevando esperanza y cuidados a quienes más
          lo necesitan.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-md mx-auto mb-16"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        {foundationPoints.map((point, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-colors"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold">{point}</h3>
          </motion.div>
        ))}
      </motion.div>

      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {carouselFundation.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
      </Carousel>
      <div className="text-center mb-16 mt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          ¡Queremos Conocerte!
        </h1>
        <p className="max-w-3xl mx-auto hover:text-white text-lg text-gray-300">
          Si te apasiona nuestro propósito y deseas saber más sobre cómo puedes
          apoyar nuestra causa, estamos aquí para ti. Contáctanos a través de:
        </p>
        {/* Hacer clickeable los links de correo, whatsapp e instagram*/}
        <ul className="max-w-3xl mx-auto text-lg text-gray-300">
          <li className="hover:text-white p-2 rounded">
            <Link href="https://www.instagram.com/oghouse_med/" passHref>
              <strong>Instagram:</strong> @oghouse_fundation
            </Link>
          </li>

          <li className="hover:text-white p-2 rounded">
            <Link href="mailto:notificacionesogfundacion@gmail.com" passHref>
              <strong>Correo Electrónico: </strong>
              notificacionesogfundacion@gmail.com
            </Link>
          </li>

          <li className="hover:text-white p-2 rounded">
            <Link
              href="https://api.whatsapp.com/send?phone=3148685872"
              passHref
            >
              <strong>WhatsApp:</strong> +57 314 868 5872
            </Link>
          </li>
        </ul>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          ¡Juntos podemos hacer una gran diferencia!
        </p>
      </div>
      <Link href="/" passHref>
        <Button className="mt-16 ml-10 bg-gray-200 hover:scale-105 bg-opacity-20 text-lg text-white hover:bg-white hover:bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-200">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Button>
      </Link>
      <section className="py-24 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje! </h2>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Email"
              className="bg-neutral-800 border-neutral-700"
            />
            <Link href="mailto:notificacionesogfundacion@gmail.com" passHref>
              <Button
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

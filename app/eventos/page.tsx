"use client";

import { Card, CardContent } from "@/components/ui/card";
//import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/473918165_1346468019700627_3727385543443355136_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=1P9TqNR9n7QQ7kNvgEMj7zB&_nc_oc=Adiq1hGNgOSzu9mQbwPVN7-ydRlS252xh3av0vt-DWXXpggz-zkMBSUBym2xKD7S1IJDG_lp-0CfiR5z2criqslb&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gFAhMKOzi-akqd56vAvEHYtnBTBfEh-bZKRTcX-K_eY6A&oe=67BAC215",
    alt: "SMOKE WILD Event Poster",
    width: 600,
    height: 800,
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474058027_1799135530912254_8740867081188147817_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8mibjioK1eAQ7kNvgE_Vv2e&_nc_oc=AdgdW3QtH46uJEjfDUIwNU45iySw8IormyqsnydxLeAtJtc2z9KrNFzSIYHLZE8sHDTd1VMVCckGYeIu66zG-1V8&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHvsAjvU82fVGKIY5QCEFdVikGEvbcp7AjEpCs4gas3JA&oe=67BAE78B",
    alt: "Event Details",
    width: 400,
    height: 400,
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474981800_1029723375844894_2200953298378486864_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Fy7RdaDLDm4Q7kNvgFIiNGP&_nc_oc=AdgNrdhMHCzfmNaZ7SFaWp5yZeGIbECjP8PRhPIZV1oA8q5V99aLYhFYVpju6TPIZX4M0DFNpLnJf4oyO55JhF7V&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gEEA7hlBfK1XcFEN6AdDcMxiU1nizetOjk8OJgzSKWK3w&oe=67BAD2D9",
    alt: "Event Atmosphere",
    width: 400,
    height: 400,
  },
];
const CataImages = [
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474084611_602470525727524_4621281499526197177_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=E5yUFUCnYVMQ7kNvgEZLB7L&_nc_oc=AdhNV5tN4zur9WX3p0hEfx3tirH2ijgcELDa5PTTf-lf9wVDddHETiIafnoF__5_D-IbIFlDGUt1sD3K_tlbne0t&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gEy3btiLH1nuCw6PvDz7j_xr-nSKxrELQZzzaXwqYYpmQ&oe=67BACBF9",
    alt: "Catas privadas",
    width: 600,
    height: 800,
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474865897_1793771338067064_224956370267174059_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=er3jAgesxNgQ7kNvgHn9wvb&_nc_oc=AdjuB1AKcjzFarWsAHoBaC_0FV1w5zT4GuOZechCgODg4-7nvhnH-3PBTkkFkGB9RJjsi65tx4zpPotjEcJTX9oK&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gGLSTj_rjNpedWrtwAXvgJz_xKRNy5O-FwOX9pmL6HY_g&oe=67BAE6AF",
    alt: "Catas privadas",
    width: 400,
    height: 400,
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474041699_1599297957363394_8922002904970102401_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=aPQtNZkolZwQ7kNvgEb1UjW&_nc_oc=Adj9cQQAz3qjadNthnrpnanFL8Bar-bvGrwOUj_VHwq19hQNnEq5UEPFUx8vhs5bRLu_cGZX8QfN8BVDUPO8LuIS&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHioYvnKdq0gxUnpBvDMayZBUEMmSgI-mEiClK14-2e-w&oe=67BAE1DE",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 lg:px-8">
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
              <Button className="mt-32 ml-6 bg-gray-200 bg-opacity-20 text-white hover:bg-white hover:bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-200">
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

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

const educationalPoints = [
  "Conocimiento Integral",
  "Consumo Responsable",
  "Mitos y Realidades",
  "Consejos Prácticos",
];
const foundationPoints = ["Compromisos y alianzas", "Impacto positivo"];

const carouselImages = [
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474397575_1836883230182328_8828119257830781432_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=pbSlk4kqlYwQ7kNvgGaFF_t&_nc_oc=Adh0LiWd_mZkly70Ex3429YKgNnX8dDj30tsautX3pHtaaRYVzmJCfczsgidnjzC26skFS20Lzhp6LyGRy2kCuEZ&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gG5N5SqWr03vvl-GXR7q5kDgHJO6zXnsSjF5BLlpEX34w&oe=67B83826",
    alt: "Equipo",
    title: "Charlas Educativas",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474855950_28201177292830588_1109585956448414911_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=1UYHPP-tcuoQ7kNvgGzjQt2&_nc_oc=AdjyIZ5o7pVLfqkXwP9lMBvHgtspB2R066jeXC4IAk0qwxE001a7WFujG1kuHmUxZ_jmewmNfwdW3aiMXQGmiT-I&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHwbfNfEytoUy9xTDa2xxSVsa7CkqbIppkYTUO3w2MXNg&oe=67B8366B",
    alt: "Soldado",
    title: "Charlas Educativas",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/473087730_3889686047913436_6830444119471911055_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=jXPJ5Sxl33gQ7kNvgG5AR4P&_nc_oc=AdjMJf07MT8scqBFtZ3wqccSHCiZHxJ3Sb1WtTKKA-ORsNTJzhztwVECQ8MkL0-bs15zj82IsN47Ki8HRZEVPTE2&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHP-0uqeCgdQl1Ew3qvogPqBVLP4kZJwVH8sHg2iQWrEg&oe=67B81F83",
    alt: "Barcos",
    title: "Charlas Educativas",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/472766591_911201991082382_4967846513380687155_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=C06MC_kbsq0Q7kNvgG8xk-j&_nc_oc=AdgX3ehF0VXVSaSRQ58iFWSnhDytlOIzIEEjhC-AzgzNXzaHD0lDHs6AzB3J8CCtgvNpqV9jWwtOANXGTsMAzz35&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gFGOb14Xoe-_Z35WB125fHi4WrG_vMpTue1uXwnCQgtwA&oe=67B84C56",
    alt: "almirante",
    title: "Charlas Educativas",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474371964_1918022471941378_558386474971067260_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF1dt8EtIkNzpp6cY3_x4gooiyn2C0yhoOiLKfYLTKGg2FKX7nQR4nDd5Dk2QtOjX3BnIs0_p-9z4PBSVd9e0Xc&_nc_ohc=hOIv9obTMTQQ7kNvgGKAgbQ&_nc_oc=Adjk3os3niyzlnqy9kkUvT5Qj7Igh_h9Xe-3QPbu0MPZZCqNcaYVFXBvH9e3e9-gaax6R7JEd5uBiJQTrUaDDn_j&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gFoyjpwFqFo4iJvxXGOBkdcRRTdzdoaPpUqRwHcB5rOsw&oe=67BC34DC",
    alt: "SoldadoRaso",
    title: "Charlas Educativas",
  },
  // Add more images as needed
];

const carouselFundation = [
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474528822_1182561376775328_7429113482292251526_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=FdGy1BAp8CEQ7kNvgEKLRXQ&_nc_oc=Adh-1fllE4ZF6-Ey__LRVzqneV-wEqA7wHTFwZvS3Im9pKhj5eS1Bpiyb7e_rO6dctlEKDGH4FORZGMlNSI9cGwd&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gF6977qU-k_3OAgvhNkgx0lImThjm9yHNT-idyGzJT_Gw&oe=67B8650F",
    alt: "Perrito",
    title: "OG Foundation",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/473634627_1696129060935650_1433236836131520066_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=K-On9xrFR9kQ7kNvgEXLXvV&_nc_oc=AdhklUi54_B1N7qHoRUCke0TEdNgAJFjiiCo6JnnhYn4UmJnpFAMUNh1oHqbzWkoMuwM0m-lltYBt8SgbspKh3U1&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gFD6RB1dzn6AQJMhNTI3LPu6G3034J7H79wqXoIjY_BuQ&oe=67B85F57",
    alt: "ChicaSonriendo",
    title: "OG Foundation",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474168611_627966759645758_2940025579009505910_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGbllwQqsUw6F0zkWCdDiOAqJqMA2nwlfGomowDafCV8Xw9vAxu2sb1ynjyJ3bqT_DPBmoycdXLVOcJDPTVXwWP&_nc_ohc=aBfbW04MrS8Q7kNvgEjuHuN&_nc_oc=AdhlHY8LPNQbv_Zz3g4f9EEeyI4_pBrC2erDBG3nn_mzJl94rsgau7mlr4TCob0Qyz4RTYbneqejHElgtrQ__D5c&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHctxqTN8AkKBIYIuLtxTkhlj71nvhiQ-iUWr02qFyMfg&oe=67BC2E92",
    alt: "Logo",
    title: "OG Foundation",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474066063_3983270141918283_8585797330011197603_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=l4dAr6aXO54Q7kNvgETAxyO&_nc_oc=AdiwoxQSwe0ta4aCVBsw9DFPRaL2zLJVLj5KIt30mhpH6AtdW5pDAv0ar1khVnduNm_lAj8ITlBuZzKeb2aFDHkz&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gGFP2YtChLfF8tfC9n-xQWFz2TdrZOHAPS5Wht8mx8d0g&oe=67B85572",
    alt: "Gato",
    title: "OG Foundation",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474061658_919933179918382_9118448024048392938_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Z8WE77UNu8MQ7kNvgER2Mke&_nc_oc=AdhoBjlJyl5m5kyZ3rhncdQUAjYIcisW8sgeNleBAAthajTZ1EkjXOC9Zg9Z4ajV5qDP0nQD6Fg6aQ2JECOTYN9Q&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHFgqN0jY3HTJ8ime6wRjCgytw2q4dCkDsOov19UTwSlA&oe=67B853CF",
    alt: "GatoPequeno",
    title: "OG Foundation",
  },
  {
    src: "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/473780478_1818482385571030_2557607163651962119_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG57wlGnkbBC3yREui-VQgMIuDs3bVTAa4i4OzdtVMBrlybHZjxzgTihMsOiQ0U4Stxo5MryaCduLfzfVYbUTle&_nc_ohc=A4CuQFarde8Q7kNvgE_OkQg&_nc_oc=AdiyQHEQj6osDy1V9EoXfVGTD9L2GtlvyaifZQ-XuY28gfBdw2KhG9uj73GlLDisYqeOHxX0_6bpRwPqYHlEYuxv&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gG-liACf_tazOZhx3g-hpUKbWXXkyS7r5OHjGRZ2KAARg&oe=67BC361F",
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Hablemos de Cannabis:
            <br />
            Información y Consumo Responsable
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Únete a nosotros para una conversación reveladora y educativa sobre
            el cannabis, diseñada para promover un entendimiento claro y
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
            {" "}
            <strong>Instagram:</strong> @oghouse_fundation
          </li>

          <li className="hover:text-white p-2 rounded">
            <strong>Correo Electrónico: </strong>{" "}
            notificacionesogfundacion@gmail.com
          </li>

          <li className="hover:text-white p-2 rounded">
            <strong>WhatsApp:</strong> +57 314 868 5872
          </li>
        </ul>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          ¡Juntos podemos hacer una gran diferencia!
        </p>
      </div>
      <Link href="/" passHref>
        <Button className="mt-16 ml-56 bg-gray-200 bg-opacity-20 text-white hover:bg-white hover:bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-200">
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
            <Button
              variant="outline"
              className="text-black border-white hover:bg-white/20"
            >
              Enviar
            </Button>
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

"use client";

import { motion } from "framer-motion";

export default function ContentGrid() {
  // Configuración de las animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-12 px-4 bg-neutral-900">
      <motion.div
        className="max-w-6xl mx-auto grid gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Primer bloque */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={fadeInUp}
        >
          <div>
            <h2 className="text-4xl hover:text-white font-bold mb-6">
              Conócenos
            </h2>
            <p className="text-gray-300 hover:text-white mb-6 text-lg">
              OG HOUSE nació en 2022 como una respuesta a la creciente demanda
              de huertas caseras, tanto urbanas como rurales, especializadas en
              plantas aromáticas, especias y medicinales.
            </p>
          </div>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/473786823_1007350107938730_7289142650142590888_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=y4FlPm__CVYQ7kNvgGHp9-4&_nc_oc=Adjd3IUJUCORGXZeezEjJRQuX_MQOZNcs7oUsORNrEndjuxCL2aRNuuhW2yJT8S4L1u_YAWiMGk0wz84JZvOag67&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHFva0kGzdofGuJFvv1h6Axbk8NYMOBC1tz1LWVJN8OGg&oe=67B97B88"
              alt="Imagen OG HOUSE"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Segundo bloque */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={fadeInUp}
        >
          <motion.div>
            <img
              src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474453181_1323368262419465_7755474976444173444_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H9sInir4EpUQ7kNvgEbTb8m&_nc_oc=AdjYkiJ7050Rpqwn3Zr_SvJcZxV3sYdO6RDJe4dFBffCg8baXGxc68eLytBa-yA7DLhMmRv_JVnhTaZNFF_0VZjq&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gHg4sSpFy1jnyF65ELaRwZ_WjnyxvItxaq0hLlSSmCwWg&oe=67B7D918"
              alt="Imagen OG HOUSE"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div>
            <p className="text-gray-300 hover:text-white mb-6 text-lg">
              Nuestro propósito es crear entornos acogedores que satisfagan las
              necesidades de nuestros clientes. Al adentrarnos en este campo,
              hemos ampliado nuestros conocimientos para incluir el Cannabis
              medicinal CBD, lo que nos ha permitido desarrollar diversas
              estrategias para la venta y promoción de productos de alta
              calidad.
            </p>
          </motion.div>
        </motion.div>

        {/* Tercer bloque */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={fadeInUp}
        >
          <motion.div>
            <p className="text-gray-300 hover:text-white mb-6 text-lg">
              Con el firme compromiso de promover un consumo responsable, hemos
              dado un paso más allá. En 2024, hemos fundado OG HOUSE S.A.S., una
              iniciativa que nos impulsa a ampliar nuestros horizontes. Este
              proyecto abarca una amplia gama de actividades, desde charlas
              educativas y talleres destinados a jóvenes y adultos sobre el uso
              responsable, hasta la organización de eventos públicos y privados
              que fomenten el crecimiento tanto de la empresa como de la
              comunidad en general.
            </p>
          </motion.div>
          <motion.div>
            <img
              src="https://scontent.feoh3-1.fna.fbcdn.net/v/t1.15752-9/474168611_3931612663833825_7422054343077827481_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=9-e1P_C7Gc8Q7kNvgEf_Uoh&_nc_oc=AdjaHFtZGAnHyNwNY_4ub_kSrzZ7ltxnK8P70IH7T3ehKBN7cBH6Usu0o97zdqix_1KBT3cLi6QQr212ZZ7rzOS_&_nc_zt=23&_nc_ht=scontent.feoh3-1.fna&oh=03_Q7cD1gFANbdIlfKD90enLvf_6LFHUHyKnSFax9bFVnpG-Bt6ZQ&oe=67B99CF5"
              alt="Imagen OG HOUSE"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

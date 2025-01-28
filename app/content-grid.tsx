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
              src="https://ucarecdn.com/b65b9644-3bec-4588-b9d4-39b1ed99f748/row1.jpg"
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
              src="https://ucarecdn.com/ee38179e-d136-49f0-a900-d31ab9274e2d/_MG_4541.jpg"
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
              src="https://ucarecdn.com/3ee4343a-ffb6-4f39-8504-ba2e62069469/_MG_1190.jpg"
              alt="Imagen OG HOUSE"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';

interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
  des: string;
  price: string; // Added price to interface
}

const projects: ProjectsTypes[] = [
  {
    id: '01',
    img: '/images/gallery-3.jpeg',
    title: 'Surf',
    des: "chaque vague t’apprend quelque chose, l’important c’est d’avancer et d’en profiter.",
    price: 'Contactez nous',
  },
  {
    id: '02',
    img: '/images/gallery-10.jpeg',
    title: 'Skating',
    des: 'progresser à son rythme, tomber, se relever et kiffer chaque victoire.',
    price: 'Contactez nous',
  },
  {
    id: '03',
    img: '/images/surf-trip.jpg',
    title: 'Surf Trip',
    des: 'voyager pour progresser, surfer pour le plaisir, vivre l’instant à fond.',
    price: 'Contactez nous',
  },
];

export default function Sessions() {
  return (
    <section className="bg-[#c6bfb5] py-12 ">
      {/* Header */}
      <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          <span className="relative z-1">
            Nos services
            <span
              className="bg-primary absolute bottom-1 left-0 -z-1 h-px w-full"
              aria-hidden="true"
            ></span>
          </span>
        </h2>
      </div>

      {/* Grid Container */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => {
          // Logic: If it is the 3rd item (index 2), make it full width
          const isFullWidth = index === 2;

          return (
            <motion.article
              key={index}
              initial="initial"
              whileHover="hover"
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl h-80 md:h-96 w-full cursor-pointer group ${
                isFullWidth ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              {/* Background Image with Zoom Effect */}
              <motion.div
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Gradient Overlay (Darkens on hover for readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Title & Icon Header */}
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -10 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between mb-2"
                >
                  <h3 className="text-2xl font-bold font-sans tracking-wide">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full grid place-content-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <MoveUpRight size={18} />
                  </div>
                </motion.div>

                {/* Hidden Description & Price */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, height: 0 },
                    hover: { opacity: 1, height: 'auto' },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                    {project.des}
                  </p>
                  <div className="inline-block bg-white text-black text-sm font-semibold px-4 py-2 rounded-full">
                    {project.price}
                  </div>
                </motion.div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Tilt from 'react-parallax-tilt';

const HeroSection = () => {
  return (
    <section className="lg:py-16 relative overflow-hidden">
      
      {/* ====== ARRIÈRE-PLAN DÉGRADÉ (HALOS BLEUS) ====== */}
      {/* Halo bleu foncé en haut à droite */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-500 rounded-full blur-[100px] opacity-20 -z-10"></div>
      
      {/* Halo bleu clair en bas à gauche */}
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-sky-200 rounded-full blur-[100px] opacity-10 -z-10"></div>

      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Bonjour, je suis{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Lovia KOUNOUHO",
                2000,
                "Développeuse frontend",
                1500,
                "Designer UI",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-xl">
            Je conçois et développe des expériences web,
            à la croisée du code et du design.
          </p>
          
          {/* ====== LES BOUTONS ====== */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 hover:from-blue-400 hover:to-sky-300 text-white font-semibold text-center transition duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Me contacter
            </Link>
            <Link
              href="/cv-lovia-kounouho.pdf"
              target="_blank"
              className="px-8 py-3 rounded-full border border-blue-500/50 hover:bg-blue-500/10 text-white font-semibold text-center transition duration-300"
            >
              Télécharger mon CV
            </Link>
          </div>
        </motion.div>
        
                {/* ====== IMAGE AVEC EFFET TILT ====== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          {/* On enveloppe le cercle dans le composant Tilt */}
          <Tilt
            tiltMaxAngleX={15}          /* Inclinaison max sur l'axe X */
            tiltMaxAngleY={15}          /* Inclinaison max sur l'axe Y */
            glareEnable={true}          /* Ajoute un reflet lumineux */
            glareMaxOpacity={0.15}      /* Opacité du reflet */
            glareColor="#60a5fa"        /* Couleur du reflet (bleu clair) */
            glarePosition="all"         /* Le reflet bouge partout */
            scale={1.05}                /* Grossit très légèrement au survol */
            transitionSpeed={2000}      /* Vitesse de retour à la normale */
            className="rounded-full"    /* Important pour que l'effet respecte le cercle */
          >
            <div className="rounded-full bg-[#181818] border border-blue-500/20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="Portrait de Lovia Kounouho"
                fill
                className="object-cover object-top" // Ajustement pour bien cadrer l'image
                priority
              />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
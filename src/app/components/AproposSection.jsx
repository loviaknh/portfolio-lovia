"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const TAB_DATA = [
  {
    title: "Compétences",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 space-y-1">
        <li>PostgreSQL, MySQL, conception Merise</li>
        <li>Python, Django, PHP, JavaScript</li>
        <li>Figma, UI/UX, maquettage</li>
        <li>Git, GitHub, API REST</li>
        <li>HTML5, CSS3, Angular</li>
      </ul>
    ),
  },
  {
    title: "Formation",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-1">
        <li>Licence SIL — HECM Porto-Novo (2023–2026)</li>
        <li>École d’Été en Intelligence Artificielle (2026)</li>
        <li>Baccalauréat série D — CEG d’Application (2022)</li>
      </ul>
    ),
  },
  {
    title: "Attestations et Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 space-y-1">
        <li>Attestation de stage Assemblée nationale</li>
        <li>Certificat EEIA 2026</li>
        <li>Certificat Kanz AI Hackathon - plus grande leçon d’IA en ligne</li>
        <li>Certificat NASA Space Apps Challenge</li>
        <li>Attestation de stage Ibudo</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => setTab(id);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        {/* ====== L'IMAGE QUI VOLE ET SE POSE ====== */}
        <motion.div
          initial={{ opacity: 0, x: 200, y: -100, rotate: 15 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          {/* On remet l'effet Tilt 3D une fois qu'elle est posée */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#60a5fa"
            className="rounded-full"
          >
            <div className="rounded-full bg-[#181818] border border-blue-500/20 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="Portrait de Lovia Kounouho"
                fill
                className="object-cover object-top"
              />
            </div>
          </Tilt>
        </motion.div>

        {/* ====== LE TEXTE ET LES ONGLETS ====== */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos</h2>
          <p className="text-base lg:text-lg text-justify">
            Diplômée d’une Licence en Systèmes Informatiques et Logiciels,
            je conçois et développe des applications web en alliant la
            technique et le design. J’aime transformer des besoins métiers
            en solutions web. Passionnée par l’UI/UX et la data science, 
            je continue d’explorer les technologies qui me permettent de 
            créer des expériences web complètes et soignées.
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-2">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
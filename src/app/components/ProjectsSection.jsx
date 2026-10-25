"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projetsData = [
  {
    id: 1,
    title: "Plateforme Assemblée Nationale",
    description:
      "Plateforme web de gestion numérisée des interventions techniques institutionnelles. Développement full-stack Django, modélisation PostgreSQL et API REST.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/loviaknh/assemblee_interventions",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Analyse de survie — Cancer du sein",
    description:
      "Modélisation prédictive du temps de survie de patientes. Comparaison d'algorithmes ML (Cox PH, Random Survival Forest, AFT Weibull) via Python et Lifelines.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/loviaknh/cancer-prediction",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Application restaurant",
    description:
      "",
    image: "/images/projects/3.png",
    tag: ["All", "Design"],
    gitUrl: "https://loviaknh.github.io/african_resto/",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Ibudo",
    description:
      "Application web responsive dédiée au partage d'archives de ibudo.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/loviaknh/rewind_season",
    previewUrl: "https://rewind-season.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "Modélisation prédictive du temps de survie de patientes. Comparaison d'algorithmes ML (Cox PH, Random Survival Forest, AFT Weibull) via Python et Lifelines.",
    image: "/images/projects/5.png",
    tag: ["All", "Data"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Innov'camp E-learning",
    description:
      "Plateforme de formation en ligne.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 7,
    title: "InterCargo - Application Mobile",
    description:
      "Conception UI/UX de l'application mobile de livraison. Création des écrans d'onboarding, du tunnel de paiement et du suivi de colis en temps réel.",
    image: "/images/projects/figma-app-intercargo.png",
    tag: ["All", "Design"],
    gitUrl: "",
    previewUrl: "https://www.figma.com/design/y9bHe4JisUyf2kiY6jocu5/Untitled?m=draw",
  },
  {
    id: 8,
    title: "Détecteur d'images IA",
    description:
      "Landing page moderne pour un outil d'analyse d'images générées par l'Intelligence Artificielle. Design sombre, futuriste et orienté conversion.",
    image: "/images/projects/figma-ia.png",
    tag: ["All", "Design"],
    gitUrl: "",
    previewUrl: "https://www.figma.com/design/zQyBKqXlUIoUamjipWNkjQ/Sans-titre?node-id=0-1&p=f&m=draw",
  },
  {
    id: 9,
    title: "Innov'camp - E-learning",
    description:
      "Refonte de la page d'accueil d'une plateforme de formation en ligne. Mise en avant des programmes et des formateurs avec une identité visuelle jeune et dynamique.",
    image: "/images/projects/figma-innovcamp.png",
    tag: ["All", "Design"],
    gitUrl: "",
    previewUrl: "https://www.figma.com/design/G1TAYiC88rh31EnrBSxhrj/Untitled?node-id=0-1&p=f&m=draw",
  },
  {
    id: 10,
    title: "Profil - Design System",
    description:
      "Exploration UI/UX d'une page de profil moderne. Intégration d'un design system complet (couleurs, ombres, boutons) pour une application web.",
    image: "/images/projects/figma-profil.png",
    tag: ["All", "Design"],
    gitUrl: "",
    previewUrl: "https://www.figma.com/design/pBLKp5zLYAstKGWBVSyxcF/Untitled?node-id=1-2&m=draw",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projetsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes Projets
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
"use client";
import React from "react";
import * as DevIcons from "@dev.icons/react";

// Correspondance : nom affiché → clé d'export dans le package
const techMap = [
  { name: "Python",     key: "Python" },
  { name: "Django",     key: "Django" },
  { name: "JavaScript", key: "Javascript" },
  { name: "PHP",        key: "Php" },
  { name: "HTML5",      key: "Html5" },
  { name: "CSS3",       key: "Css3" },
  { name: "Angular",    key: "Angular" },
  { name: "React",      key: "_React" },
  { name: "Next.js",    key: "Nextjs" },
  { name: "PostgreSQL", key: "Postgresql" },
  { name: "MySQL",      key: "Mysql" },
  { name: "Pandas",     key: "Pandas" },
  { name: "NumPy",      key: "Numpy" },
  { name: "Figma",      key: "Figma" },
  { name: "Git",        key: "Git" },
  { name: "GitHub",     key: "Github" },
  { name: "GitLab",     key: "Gitlab" },
  { name: "Nodejs",     key: "Nodejs" },
];

// On ne garde que les icônes qui existent réellement dans le package
const techs = techMap
  .map(({ name, key }) => ({ name, Icon: DevIcons[key] }))
  .filter(({ Icon }) => Icon);

// Log utile dans la console : liste les clés qu'on n'a PAS trouvées
if (typeof window !== "undefined") {
  const missing = techMap.filter(({ key }) => !DevIcons[key]).map((t) => t.key);
  if (missing.length) console.warn("Icônes introuvables :", missing);
}

const TechBanner = () => {
  const loop = [...techs, ...techs];
  return (
    <div className="py-12 overflow-hidden">
      <p className="text-center text-[#ADB7BE] text-sm mb-8 uppercase tracking-[0.2em]">
        Ma stack technique
      </p>
      <div className="marquee">
        <div className="marquee-track gap-16 items-center">
          {loop.map(({ name, Icon }, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-14 h-14 shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
              title={name}
            >
              <Icon size={48} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBanner;
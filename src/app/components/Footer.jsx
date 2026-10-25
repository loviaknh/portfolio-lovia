import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white py-8 relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo et Copyright */}
        <div className="flex items-center gap-4">
          {/* Nouveau logo sans fond, élégant et italique */}
          <Link href={"/"} className="group">
            <span className="font-[family-name:var(--font-akronim)] text-3xl text-white tracking-widest">
              LK<span className="text-blue-500 group-hover:text-sky-400 transition-colors">.</span>
            </span>
          </Link>
          <span className="text-[#ADB7BE] text-sm">
            © {new Date().getFullYear()} Lovia Kounouho. Tous droits réservés.
          </span>
        </div>

        {/* Liens sociaux */}
        <div className="flex gap-6 text-sm text-[#ADB7BE] font-medium">
          <Link 
            href="https://github.com/loviaknh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            GitHub
          </Link>
          <Link 
            href="https://www.linkedin.com/in/lovia-kounouho" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            LinkedIn
          </Link>
          <Link 
            href="mailto:loviaknh@gmail.com" 
            className="hover:text-blue-400 transition duration-300"
          >
            Email
          </Link>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
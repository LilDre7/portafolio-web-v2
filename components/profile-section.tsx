"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function profileSection() {
  // Dentro de tu componente
  const [currentImage, setCurrentImage] = useState(0);

  // Array de imágenes que quieres rotar
  const images = [
    "/avatar.jpg",
    "/spider.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Profile Section */}
      <div className="grid grid-cols-[80px_1fr] gap-4 mb-12 md:mb-16">
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <Image
            key={currentImage}
            src={images[currentImage]}
            alt="Alvaro Aburto Ocampo"
            width={80}
            height={80}
            className="w-full h-full object-cover animate-image-glitch"
          />
        </div>
        <div className="flex-1 pl-3 pt-1 min-w-0">
          <h1 className="text-2xl font-normal mb-1 leading-tight">
            Alvaro Aburto Ocampo
          </h1>
          <p className="text-gray-400 text-base mb-1">
            Full-Stack Developer
            <span className="text-[10px] sm:text-[14px] opacity-60 ml-0.5">
              +2 experience
            </span>
          </p>
          <p className="text-gray-500 text-sm">
            Guanacaste, Playas del Coco · Costa Rica
          </p>
        </div>
      </div>
    </>
  );
}

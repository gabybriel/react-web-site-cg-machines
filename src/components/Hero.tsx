import React from 'react';
import bg from '../assets/images/bg.png';

export default function Hero() {
  return (
    <div className="relative bg-yellow-500 text-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src={bg}
          alt="Industrial background"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Formation et Sécurité Professionnelle
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Votre partenaire de confiance pour la formation en HSE, en management et la conduite d'engins on/offshore.
          Nous accompagnons les entreprises dans la maîtrise des risques techniques, environnementaux et humains.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-white hover:bg-gray-50"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>

  );
}
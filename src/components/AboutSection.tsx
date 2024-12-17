import React from 'react';
import about from '../assets/images/about/logo.jpeg'
import { Link } from 'react-router-dom';
import { Shield, Target, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Texte à gauche */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  À Propos de CONGO MACHINES
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  Leader dans la formation professionnelle et la sécurité industrielle en République du Congo.
                </p>
                <p className="mt-6 text-lg text-gray-600">
                  Depuis notre création, CONGO MACHINES s'est engagée à fournir des formations de haute qualité
                  et des solutions innovantes en matière de sécurité industrielle. Notre expertise et notre
                  engagement envers l'excellence nous ont permis de devenir un acteur majeur dans le secteur
                  de la formation professionnelle en République du Congo.
                </p>
              </div>

              {/* Logo à droite */}
              <div className="flex justify-center">
                <img
                  src={about}// Remplacez par le chemin réel de votre logo
                  alt="Logo Congo Machines"
                  className="h-48 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
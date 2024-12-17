import React from 'react';
import bg from '../assets/images/bg.png';
import logo from '../assets/images/logo/logo.png';
import { Shield, Users, Target } from 'lucide-react';
import AboutSection from '../components/AboutSection';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb Area */}
      <div className="breadcrumb-area bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <ol className="list-reset flex text-gray-600">
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Accueil
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-semibold">
                  À Propos
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
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
                src={logo}// Remplacez par le chemin réel de votre logo
                alt="Logo Congo Machines"
                className="h-48 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="py-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Shield className="h-12 w-12 text-yellow-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-center">Notre Mission</h3>
            <p className="mt-2 text-gray-600 text-center">
              Promouvoir l'excellence en matière de sécurité et de formation professionnelle
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-yellow-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-center">Notre Vision</h3>
            <p className="mt-2 text-gray-600 text-center">
              Devenir la référence en formation HSE et conduite d'engins en Afrique centrale
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-yellow-500 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-center">Nos Valeurs</h3>
            <p className="mt-2 text-gray-600 text-center">
              Excellence, professionnalisme, innovation et engagement envers nos clients
            </p>
          </div>
        </div>

      </div>
    </div>


  );
}

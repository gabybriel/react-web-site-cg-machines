import React from 'react';
import { HardHat, Shield, Truck, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Formation HSE',
    description: 'Formation complète en hygiène, sécurité et environnement pour vos équipes.',
    icon: Shield,
  },
  {
    title: 'Conduite d\'Engins',
    description: 'Formation à la conduite d\'engins on/offshore en toute sécurité.',
    icon: Truck,
  },
  {
    title: 'Gestion des Risques',
    description: 'Évaluation et maîtrise des risques techniques et environnementaux.',
    icon: TreePine,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions complètes pour votre sécurité et votre développement
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 left-4">
                <service.icon className="h-12 w-12 text-yellow-500 bg-white rounded-full p-2 shadow-lg" />
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
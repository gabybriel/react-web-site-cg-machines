import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, TreePine } from 'lucide-react';
import fHse from '../assets/images/services/f-hse.jpg';
import fEngin from '../assets/images/services/f-engin.jpg';
import fRisk from '../assets/images/services/f-risque.jpg';

export const services = [
  {
    title: 'Formation HSE',
    description: 'Formation complète en hygiène, sécurité et environnement pour vos équipes.',
    details: {
      image: fHse,
      content: `
        <h2>Description</h2>
        <p>Formation complète en <strong>hygiène</strong>, sécurité et environnement pour vos équipes.</p>
        <ul>
          <li>Risque chimique</li>
          <li>Normes ISO</li>
        </ul>
      `,
    },
    icon: Shield,
  },
  {
    title: 'Conduite d\'Engins',
    description: 'Formation à la conduite d\'engins on/offshore en toute sécurité.',
    details:
    {
      image: fEngin,
      content:
      `  <p>Certifications disponibles :</p>
        <ul>
          <li>Chariot élévateur</li>
          <li>Grue mobile</li>
        </ul>
      `,
    },
    
     
    icon: Truck,
  },
  {
    title: 'Gestion des Risques',
    description: 'Évaluation et maîtrise des risques techniques et environnementaux.',
    details:{
      image: fRisk,
      content:
      `
      <p></p>
      <p>Nous couvrons :</p>
      <ul>
        <li>Audit de sécurité</li>
        <li>Plan de prévention</li>
      </ul>
    `,
    },
    icon: TreePine,
  },
];


export default function ServicesList() {
  return (
    <section className="py-20 bg-gray-50">
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
            <Link
              to={`/services/${service.title}`}
              key={service.title}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 left-4">
                <service.icon className="h-12 w-12 text-yellow-600 bg-white rounded-full p-2 shadow-lg" />
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-500">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
          >
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
}

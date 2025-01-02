import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, TreePine } from 'lucide-react';
import fHse from '../assets/images/services/f-hse.jpg';
import fEngin from '../assets/images/services/f-engin.jpg';
import fRisk from '../assets/images/services/f-risque.jpg';

import epi from '../assets/images/services/epi.jpg';
import sefty from '../assets/images/services/sefty.jpg';
import grue from '../assets/images/services/grue.jpg';
import pmp from '../assets/images/services/PMP.jpg';




export const services = [
  {
    title: 'Formation HSE',
    description: 'Formation complète en hygiène, sécurité et environnement pour vos équipes.',
    details: {
      image: fHse,
      content: `
        <h2>Description</h2>
        <p>Formation approfondie en hygiène, sécurité et environnement adaptée aux besoins spécifiques de votre entreprise.</p>
        <ul>
          <li>Gestion des risques professionnels</li>
          <li>Risque chimique</li>
          <li>Normes ISO</li>
          <li>Premiers secours</li>
          <li>Protection environnementale</li>
        </ul>
        <div class="d-flex mt-3 justify-content-between align-items-center">
          <img class="rounded" height="auto" width="250" src="${epi}" alt="Formation HSE" />
          <img class="rounded" height="auto" width="250" src="${sefty}" alt="Formation Risque" />
        </div>
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
      `  <p>Nous formons </p>
        <ul>
          <li>Chariot élévateur</li>
          <li>Grue mobile</li>
          <li>Engins de chantier</li>
          <li>Équipements offshore</li>
          <li>Maintenance préventive</li>
          <li>Certification professionnelle</li>
        </ul>
        <div class="d-flex mt-3 justify-content-between align-items-center">
          <img class="rounded" height="auto" width="250" src="${grue}" alt="Formation HSE" />
          <img class="rounded" height="auto" width="250" src="${pmp}" alt="Formation Risque" />
        </div>
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

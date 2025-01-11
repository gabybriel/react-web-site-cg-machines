import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, TreePine, Settings, ShieldAlert, BadgeCheck } from 'lucide-react';
import fHse from '../assets/images/services/f-hse.jpg';
import fEngin from '../assets/images/services/f-engin.jpg';
import fRisk from '../assets/images/services/f-risque.jpg';

import epi from '../assets/images/services/epi.jpg';
import sefty from '../assets/images/services/sefty.jpg';
import grue from '../assets/images/services/grue.jpg';
import pmp from '../assets/images/services/pmp.jpg';
import environ from '../assets/images/services/eviron.jpg';
import chimique from '../assets/images/services/chimique.jpg';
import manage from '../assets/images/services/manage.jpg';
import manage1 from '../assets/images/services/manage1.jpg';
import project from '../assets/images/services/m-projet.png';

export const services = [
  {
    title: 'Formation en HSE',
    description: 'Formations complète en hygiène, sécurité et environnement pour vos équipes.',
    details: {
      image: fHse,
      content: `
        <p>Formation approfondie en hygiène, sécurité et environnement adaptée aux besoins spécifiques de votre entreprise.</p>
        <ul class="list-group mt-3">
          <li class="list-group-item">Gestion des risques professionnels</li>
          <li class="list-group-item">Risque chimique</li>
          <li class="list-group-item">Normes ISO 9001 vesion 2015</li>
          <li class="list-group-item">Normes ISO 14001, IS0 45001, 18001</li>
          <li class="list-group-item">Audit interne</li>
          <li class="list-group-item">Premiers secours</li>
          <li class="list-group-item">Protection environnementale</li>
        </ul>
        <div class="d-flex flex-column flex-sm-row mt-3 justify-content-between align-items-center">
          <img class="rounded  mb-3 mb-sm-0" height="auto" width="250" src="${epi}" alt="Formation HSE" />
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
        `  <p>Nous formons et délivrons des <b>Certifactions</b> dans la conduites engin suivants: </p>
        <ul class="list-group mt-3">
          <li class="list-group-item">Chariot élévateur</li>
          <li class="list-group-item">Grue mobile</li>
          <li class="list-group-item">Grue offshor</li>
          <li class="list-group-item">Grue à tours et auxiliaire</li>
          <li class="list-group-item">Équipements offshore</li>
          <li class="list-group-item">Pont roulant</li>
          <li class="list-group-item">Engin de chatier</li>
          <li class="list-group-item">Certification professionnelle</li>
          <li class="list-group-item">PEMP (Plateforme d'Elévation Mobile des Personnes) </li>
        </ul>
        <div class="d-flex flex-column flex-sm-row mt-3 justify-content-between align-items-center">
          <img class="rounded  mb-3 mb-sm-0" height="auto" width="250" src="${grue}" alt="Formation HSE" />
          <img class="rounded" height="auto" width="250" src="${pmp}" alt="Formation Risque" />
        </div>
      `,
    },


    icon: Truck,
  },
  {
    title: 'Gestion Environnementale',
    description: 'Solutions complètes pour la gestion et la protection de l\'environnement.',
    details: {
      image: fRisk,
      content:
        `
      <p></p>
      <p>Nous couvrons :</p>
      <ul class="list-group mt-3">
        <li class="list-group-item">Évaluation d'impact</li>
        <li class="list-group-item">Gestion des déchets</li>
        <li class="list-group-item">Développement durable</li>
        <li class="list-group-item">Conformité réglementaire</li>        
        <li class="list-group-item">Audit de sécurité</li>
        <li class="list-group-item">Plan de prévention</li>
        <li class="list-group-item">Risque humaine</li>
        <li class="list-group-item">Risque chimique</li>
        <li class="list-group-item">Risque environnemental</li>
      </ul>
      <div class="d-flex flex-column flex-sm-row mt-3 justify-content-between align-items-center">
        <img class="rounded mb-3 mb-sm-0" height="auto" width="250" src="${environ}" alt="" />
        <img class="rounded" height="auto" width="250" src="${chimique}" alt="" />
    </div>
    `,
    },
    icon: TreePine,
  },
  {
    title: 'Management et Gestion de Projets',
    description: 'Management et Gestion complètes des projets',
    details: {
      image: manage,
      content:
        `
      <p></p>
      <p>Nous couvrons :</p>
      <ul class="list-group mt-3">
        <li class="list-group-item"> Le management de projets</li>
        <li class="list-group-item">Le management des équipes</li>
        <li class="list-group-item">La gouvernance des projets</li>
        <li class="list-group-item">Le risque lié à la réalisation des projets</li>        
      </ul>
      <div class="d-flex flex-column flex-sm-row mt-3 justify-content-between align-items-center">
        <img class="rounded mb-3 mb-sm-0" height="auto" width="250" src="${manage1}" alt="" />
        <img class="rounded" height="auto" width="250" src="${project}" alt="" />
    </div>
    `,
    },
    icon: Settings,
  },
  {
    title: 'Sécurité Industrielle',
    description: 'Expertise en sécurité industrielle et prévention des risques.',
    details: {
      image: sefty,
      content:
        `
      <p></p>
      <p>Nous couvrons :</p>
      <ul class="list-group mt-3">
        <li class="list-group-item"> Audit de sécurité</li>
        <li class="list-group-item">Plans d\'urgence</li>
        <li class="list-group-item">Équipements de protection</li>
        <li class="list-group-item">Procédures de sécurité</li>        
      </ul>
      <div class="d-flex flex-column flex-sm-row mt-3 justify-content-between align-items-center">
        <img class="rounded mb-3 mb-sm-0" height="auto" width="250" src="${fHse}" alt="" />
        <img class="rounded" height="auto" width="250" src="${epi}" alt="" />
    </div>
    `,
    },
    icon: ShieldAlert,
  },
  {
    title: 'Audit et Certification',
    description: 'Services d\'audit et accompagnement vers la certification.',
    details: {
      image: fRisk,
      content:
        `
      <p></p>
      <p>Nous couvrons :</p>
      <ul class="list-group mt-3">
        <li class="list-group-item"> Audit qualité</li>
        <li class="list-group-item">Préparation certification</li>
        <li class="list-group-item">Conformité normes</li>
        <li class="list-group-item">Amélioration continu</li>        
      </ul>
      <div class="d-flex flex-column flex-sm-row mt-3 justify-content-between align-items-center">
        <img class="rounded mb-3 mb-sm-0" height="auto" width="250" src="${environ}" alt="" />
        <img class="rounded" height="auto" width="250" src="${chimique}" alt="" />
    </div>
    `,
    },
    icon: BadgeCheck,
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

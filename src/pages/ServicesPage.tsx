import React from 'react';
import { Shield, Truck, TreePine, HardHat, Users, ClipboardCheck } from 'lucide-react';

const services = [
  {
    title: 'Formation HSE',
    description: 'Formation approfondie en hygiène, sécurité et environnement adaptée aux besoins spécifiques de votre entreprise.',
    icon: Shield,
    details: ['Gestion des risques professionnels', 'Normes de sécurité', 'Premiers secours', 'Protection environnementale']
  },
  {
    title: 'Conduite d\'Engins',
    description: 'Formation complète à la conduite d\'engins on/offshore avec certification professionnelle.',
    icon: Truck,
    details: ['Engins de chantier', 'Équipements offshore', 'Maintenance préventive', 'Certification professionnelle']
  },
  {
    title: 'Gestion Environnementale',
    description: 'Solutions complètes pour la gestion et la protection de l\'environnement.',
    icon: TreePine,
    details: ['Évaluation d\'impact', 'Gestion des déchets', 'Conformité réglementaire', 'Développement durable']
  },
  {
    title: 'Sécurité Industrielle',
    description: 'Expertise en sécurité industrielle et prévention des risques.',
    icon: HardHat,
    details: ['Audit de sécurité', 'Plans d\'urgence', 'Équipements de protection', 'Procédures de sécurité']
  },
  {
    title: 'Formation du Personnel',
    description: 'Programmes de formation personnalisés pour vos équipes.',
    icon: Users,
    details: ['Formation continue', 'Développement des compétences', 'Évaluation des acquis', 'Suivi personnalisé']
  },
  {
    title: 'Audit et Certification',
    description: 'Services d\'audit et accompagnement vers la certification.',
    icon: ClipboardCheck,
    details: ['Audit qualité', 'Préparation certification', 'Conformité normes', 'Amélioration continue']
  }
];

export default function ServicesPage() {
  return (
    <section>
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
                  Services
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Nos Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions complètes pour votre sécurité et votre développement professionnel
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white mx-auto">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
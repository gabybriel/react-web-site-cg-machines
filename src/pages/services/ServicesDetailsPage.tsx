import { useParams } from 'react-router-dom';
import { Shield, Truck, TreePine } from 'lucide-react';
import { services } from '../../components/ServicesList';



export default function ServiceDetails() {
  const { serviceTitle } = useParams();
  const service = services.find((s) => s.title === serviceTitle);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Service non trouvé</h2>
        <p className="mt-4 text-gray-600">Le service que vous recherchez n'existe pas.</p>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <section className="bg-white">
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
                  {service.title}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={service.details.image} alt={service.title} className="h-96 rounded-lg" />
          <div>
            <div>
              <h1 className="text-3xl font-bold">{service.title}</h1>
            </div>
            <div className="mt-4 text-gray-500">
              <p className='py-2 text-xl'>{service.description}</p>
              <p className="text-lg" dangerouslySetInnerHTML={{ __html: service.details.content }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

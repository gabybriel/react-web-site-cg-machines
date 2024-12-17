import React from 'react';

// Import des logos
import ilogs from '../assets/images/clients/ilogs.jpg';
import ponticelli from '../assets/images/clients/ponticelli.gif';
import renco from '../assets/images/clients/renco.png';
import saris from '../assets/images/clients/saris.jpg';
import bolore from '../assets/images/clients/bolore.png';
import perenco from '../assets/images/clients/perenco.png';

export default function ClientsSection() {
  const clients = [
    { name: 'Ilogs', logo: ilogs },
    { name: 'Ponticelli', logo: ponticelli },
    { name: 'bolore', logo: bolore },
    { name: 'renco', logo: renco },
    { name: 'prenco', logo: perenco },
  ];
      
  
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Clients
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white shadow rounded-lg"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
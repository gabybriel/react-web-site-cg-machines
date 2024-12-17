import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function ContactPage() {
  return (
    <section className='bg-white-100'>
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
                 Contact
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Contactez-nous</h1>
            <p className="mt-4 text-xl text-gray-600">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactInfo />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
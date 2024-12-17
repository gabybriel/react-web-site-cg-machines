import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './forms/ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contactez-nous</h2>
          <p className="mt-4 text-xl text-gray-600">
            Nous sommes là pour répondre à vos questions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
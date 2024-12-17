import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section>
      <div className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-6">Nos Coordonnées</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-yellow-600" />
            <span>Pointe-Noire - République du Congo</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-yellow-600" />
            <span>+242 05 564 34 64 / 06 824 69 91</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-yellow-600" />
            <span>contact@congo-machines.com</span>
          </div>
        </div>
      </div>
      <div className="py-4">
      <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.0122558681095!2d11.861882344829414!3d-4.752990940733701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a60bbbbadb48607%3A0xdb720c2e89cf0304!2sX-OIL%20SONGOLO!5e0!3m2!1sfr!2scg!4v1734451002755!5m2!1sfr!2scg"       width="499" 
       height="300"
       className='rounded' >

       </iframe>

      </div>
    </section>

  );
}
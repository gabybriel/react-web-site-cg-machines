import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function TopBar() {
  return (
    <section>
      {/* Top Header */}
      <div className="top-header bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Informations à gauche */}
          <div className="text-sm">
            <span>
              📞 <a href="tel:+242068246991" className="hover:underline">+242 06 824 69 91</a>
            </span>
            <span className="mx-4">|</span>
            <span>
              📧 <a href="mailto:contact@congo-machines.com" className="hover:underline">contact@congo-machines.com</a>
            </span>
          </div>

          {/* Réseaux sociaux à droite */}
<div className="flex space-x-4">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-gray-200 transition-colors duration-300"
  >
    <FaFacebookF size={20} />
  </a>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-gray-200 transition-colors duration-300"
  >
    <FaTwitter size={20} />
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:text-gray-200 transition-colors duration-300"
  >
    <FaLinkedinIn size={20} />
  </a>
</div>
        </div>
      </div>
    </section>
  );
}

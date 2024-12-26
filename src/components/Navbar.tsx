import logo from '../assets/images/logo/logo.png';
import React, { useState } from 'react';
import TopBar from './TopBar';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { services } from './ServicesList'; // Import des services dynamiques

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'A Propos', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      submenu: services.map((service) => ({
        name: service.title,
        path: `/services/${service.title}`,
      })), // Transformation des services en structure pour le menu
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <section>
      <div className="hidden md:block">
        <TopBar />
      </div>

      <nav className="relative bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="Logo Congo Machines" className="h-10 w-auto" />
                <span className="text-xl font-bold text-gray-800">CONGO MACHINES</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="sticky top-0 hidden md:flex md:items-center md:space-x-8 relative z-50">
              {navigation.map((item) =>
                item.submenu ? (
                  <div
                    key={item.name}
                    className="relative font-bold"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`${
                        isActive(item.path)
                          ? 'text-yellow-500 font-bold'
                          : 'text-gray-600 hover:text-yellow-500 font-bold'
                      } transition-colors duration-200`}
                    >
                      {item.name}
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute left-0 pt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-yellow-500"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? 'text-yellow-500 font-bold'
                        : 'text-gray-600 hover:text-yellow-500 font-bold'
                    } transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                      {item.name}
                    </button>
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                    } block px-3 py-2 rounded-md text-base font-medium`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}

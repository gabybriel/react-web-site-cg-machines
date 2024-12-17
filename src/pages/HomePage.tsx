import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesList from '../components/ServicesList';
import ContactSection from '../components/ContactSection';
import ClientsSection from '../components/ClientSection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesList />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
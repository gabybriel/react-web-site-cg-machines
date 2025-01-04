import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<FormInputs>();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // État pour le bouton de chargement

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setIsSubmitting(true); // Active l'état de chargement
    emailjs.send(
      'service_a4jb2kf',
      'template_0lpaw6o',
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      'gTNl5zXG8jRnzVhCG'
    )
    .then(() => {
      setSuccessMessage('Votre message a été envoyé avec succès !');
      reset(); // Réinitialiser le formulaire
    })
    .catch(() => {
      setSuccessMessage('Une erreur est survenue. Veuillez réessayer.');
    })
    .finally(() => {
      setIsSubmitting(false); // Désactive l'état de chargement
      setTimeout(() => setSuccessMessage(null), 5000); // Supprime le message après 5s
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-50 p-8 rounded-lg shadow-lg items-center"
    >
      {/* Champ Nom */}
      <div className="mb-4 w-full">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Votre nom</label>
        <input
          {...register('name', { required: 'Le nom est obligatoire' })}
          className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring focus:ring-gray-400"
          id="name"
          type="text"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Champ Email */}
      <div className="mb-4 w-full">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-mail</label>
        <input
          {...register('email', { 
            required: 'L\'email est obligatoire', 
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' }
          })}
          className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring focus:ring-gray-400"
          id="email"
          type="email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Champ Message */}
      <div className="mb-4 w-full">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Votre message</label>
        <textarea
          {...register('message', { required: 'Le message est obligatoire' })}
          rows={5}
          id="message"
          className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring focus:ring-gray-400"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex items-center bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting && (
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 100 8H4z"
            />
          </svg>
        )}
        Envoyer
      </button>

      {/* Message de succès */}
      {successMessage && (
        <div className="mt-4">
          <p className="bg-green-600 text-white py-2 px-4 rounded shadow-lg animate-pulse">
            {successMessage}
          </p>
        </div>
      )}
    </form>
  );
}

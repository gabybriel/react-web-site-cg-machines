import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from '@emailjs/browser'


type FormInputs = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = data => {
    emailjs.send(
      'service_a4jb2kf',
      'template_0lpaw6o',
      {
        name: data.name,
        email: data.email,
        message: data.message
      },
      'gTNl5zXG8jRnzVhCG'
    )
  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-1 p-8 rounded-lg shadow-lg  items-center"
    >
      <div className="mb-4 w-full">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Votre nom</label>
        <input
          {...register('name')}
          className="border border-gray-100 rounded w-full p-2 focus:outline-none focus:ring focus:ring-gray-400"
          id="name"
          type="text"
          required
        />
      </div>

      <div className="mb-4 w-full">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-mail</label>
        <input
          {...register('email')}
          className="border border-gray-100 rounded w-full p-2 focus:outline-none focus:ring focus:ring-gray-400"
          id="email"
          type="email"
          required
        />
      </div>

      <div className="mb-4 w-full">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Votre message</label>
        <textarea
          {...register('message')}
          rows={5}
          name="message"
          id="message"
          className="border border-gray-100 rounded w-full p-2 focus:outline-none focus:ring focus:ring-gray-400"
        />
      </div>

      <button
        type="submit"
        className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400"
      >
        Envoyer
      </button>
    </form>

  );
}

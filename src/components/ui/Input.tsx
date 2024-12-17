import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className="p-2 mt-1 block w-full border-yellow-500  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
        {...props}
      />
    </div>
  );
}
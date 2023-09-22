import React from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, value, name, onChange, required = false }) => {
  return (
    <div className='m-4'>
      <label htmlFor='value' className='text-gray-500 text-sm'>
        {name}
      </label>
      <input type='text' className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' value={value} placeholder={placeholder} name={name} onChange={onChange} required={required} />
    </div>
  );
};

export default Input;

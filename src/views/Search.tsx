import React, { useState } from 'react';
import Input from '../components/Input';

interface SearchProps {
  onSearch: (city: string, country: string) => void;
}
const Search: React.FC<SearchProps> = ({ onSearch }) => {
  // made city a required field & country an optional field, just to demostrate certain error handling (eg. if both fields r empty)
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  return (
    <div className='mb-4'>
      <div className='md:flex p-4 items-center'>
        <Input placeholder={`Enter ${city}`} value={city} onChange={e => setCity(e.target.value)} name='City*' />
        <Input placeholder={`Enter ${country}`} value={country} onChange={e => setCountry(e.target.value)} name='Country' />
        <button onClick={() => onSearch(city, country)} disabled={!city} className={`m-4 md:w-20 bg-blue-500 md:mt-10 text-white px-4 py-2 h-10 border rounded-lg shadow-lg active:bg-blue-600 ${!city ? 'cursor-not-allowed bg-gray-300' : ''}`}>
          Fetch
        </button>
      </div>
    </div>
  );
};

export default Search;

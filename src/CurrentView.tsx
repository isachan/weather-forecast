import React from 'react';
import { IWeatherEntry } from './IWeatherEntry';

interface CurrentViewProps {
  data: IWeatherEntry | null;
}

const CurrentView: React.FC<CurrentViewProps> = ({ data }) => {
  const weatherIconToEmoji = {
    '01d': '☀️', // Clear sky, day
    '01n': '🌙', // Clear sky, night
    '02d': '🌤️', // Few clouds, day
    '02n': '🌤️', // Few clouds, night
    '03d': '🌥️', // Scattered clouds, day
    '03n': '🌥️', // Scattered clouds, night
    '04d': '☁️', // Broken clouds, day
    '04n': '☁️', // Broken clouds, night
    '09d': '🌧️', // Shower rain, day
    '09n': '🌧️', // Shower rain, night
    '10d': '🌦️', // Rain, day
    '10n': '🌦️', // Rain, night
    '11d': '⛈️', // Thunderstorm, day
    '11n': '⛈️', // Thunderstorm, night
    '13d': '🌨️', // Snow, day
    '13n': '🌨️', // Snow, night
    '50d': '🌫️', // Mist, day
    '50n': '🌫️', // Mist, night
  };

  // Function to convert OpenWeather icon code to emoji
  const mapOpenWeatherIconToEmoji = (iconCode: string) => {
    return weatherIconToEmoji[iconCode] || '❓'; // Default to a question mark if no match found
  };

  return (
    <div className='m-4 p-4'>
      {data ? (
        <div>
          <span className='text-gray-500'>
            {data.place}, {data.country}
          </span>
          <div className='flex justify-between'>
            <h1 className='text-5xl font-bold mb-8'>{data.type}</h1>
            <h1 className='text-5xl font-bold mb-8'>{mapOpenWeatherIconToEmoji(data.icon)}</h1>
          </div>
          <div className='details w-full md:w-1/2'>
            <div className='row flex'>
              <span className='w-1/3 text-gray-500'>Description:</span>
              <span className=''>{data.description}</span>
            </div>
            <div className='row flex'>
              <span className='w-1/3 text-gray-500'>Temperature:</span>
              <span className=''>
                {data.tempMin}°C - {data.tempMax}°C
              </span>
            </div>
            <div className='row flex'>
              <span className='w-1/3 text-gray-500'>Humidity:</span>
              <span className=''>{data.humidity}%</span>
            </div>
            <div className='row flex'>
              <span className='w-1/3 text-gray-500'>Time:</span>
              <span className=''>
                {data.time.toDateString()} {data.time.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-500'>No Current Data</p>
      )}
    </div>
  );
};

export default CurrentView;

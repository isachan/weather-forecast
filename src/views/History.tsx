import React from 'react';
import { WeatherApiResponse } from '../models/IWeatherApiResponse';

interface HistoryProps {
  historyData: WeatherApiResponse[];
  onSearchAgain: (city: string, country: string) => void;
  onDelete: (item: { city: string; country: string }) => void;
}

const History: React.FC<HistoryProps> = ({ historyData, onSearchAgain, onDelete }) => {
  return (
    <>
      <div className='p-4 m-4'>
        <h2 className='text-lg font-semibold mb-2'>Search History</h2>
        <hr className='border-t border-gray-300 my-4' />
        <ul className='space-y-2'>
          {historyData.length > 0 ? (
            historyData.map((item, index) => (
              <li key={index} className='flex justify-between border-b items-center p-4'>
                <div className='left flex flex-col md:flex-row w-2/3 md:w-11/12 md:justify-between	space-between items-start	'>
                  <div>
                    <span className='font-semibold'>{index + 1}. </span>
                    <span className='font-semibold'>{item.name}</span>
                    {', '}
                    <span className='font-semibold'>{item.sys.country}</span>
                  </div>
                  <div>
                    <div className='text-center text-gray-500'>
                      {new Date(item.dt * 1000).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: true, // Use 12-hour clock format
                      })}
                    </div>
                  </div>
                </div>
                <div className='flex justify-end right w-1/3'>
                  <button onClick={() => onSearchAgain(item.name, item.country)} className='bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 w-10 h-10 mr-4'>
                    <span className='material-symbols-outlined'>search</span>
                  </button>

                  <button onClick={() => onDelete(item)} className='bg-red-500 hover:bg-red-600 text-white rounded-full p-2 w-10 h-10'>
                    <span className='material-symbols-outlined'>delete</span>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className='text-center text-gray-500'>No Records</div>
          )}
        </ul>
      </div>
    </>
  );
};

export default History;

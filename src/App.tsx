import { useState } from 'react';
import './App.css';

import Search from './views/Search';
import History from './views/History';
import CurrentView from './views/CurrentView';
import Modal from './components/Modal';
import Loader from './components/Loader';

import { IWeatherEntry } from './models/IWeatherEntry';
import { WeatherApiResponse } from './models/IWeatherApiResponse';

const App = () => {
  const [historyList, setHistoryList] = useState<WeatherApiResponse[]>([]);
  const [currentWeather, setCurrentWeather] = useState<IWeatherEntry | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false); // State to control the error modal
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fetchCurrentWeather = (city: string, country: string) => {
    setIsLoading(true);

    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const q = `?q=${city}${country ? `,${country}` : ''}`;
    const apiKey = `&appid=${import.meta.env.VITE_API_KEY}`;
    console.log('lololol', import.meta.env.VITE_API_KEY);

    fetch(baseUrl + q + apiKey)
      .then(res => res.json())
      .then(data => {
        if (data.cod !== 200) {
          setIsErrorModalOpen(true);
          setErrorMessage(data.message);
          setIsLoading(false);
        } else {
          const weatherEntry: IWeatherEntry = {
            place: data.name,
            country: data.sys.country,
            type: data.weather[0].main,
            imgId: data.weather[0].id,
            description: data.weather[0].description,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            time: new Date(data.dt * 1000), // Convert timestamp to date
            icon: data.weather[0].icon,
          };
          setCurrentWeather(weatherEntry);
          setHistoryList([...historyList, data]);
          setErrorMessage('');
          setIsErrorModalOpen(false);
          console.log(data);
          setIsLoading(false);
        }
      });
  };

  const handleDelete = (item: WeatherApiResponse) => {
    const newList = historyList.filter(el => el !== item);
    setHistoryList(newList);
  };

  return (
    <div className='md:max-w-7xl min-h-screen'>
      {isLoading && <Loader />}
      <h1 className='p-4 text-4xl font-semibold text-left md:text-center'>☀️ Today's Weather</h1>
      <hr className='border-t border-gray-300 my-4'></hr>
      <Search onSearch={fetchCurrentWeather} />
      <CurrentView data={currentWeather} />
      <History historyData={historyList} onSearchAgain={fetchCurrentWeather} onDelete={handleDelete} />
      <Modal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)} errorMessage={errorMessage} />
    </div>
  );
};

export default App;

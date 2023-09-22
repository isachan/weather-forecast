export interface IWeatherEntry {
  place: string;
  country: string;
  type: string;
  imgId: string;
  description: string;
  tempMax: number;
  tempMin: number;
  humidity: number;
  time: Date;
  icon: string;
}

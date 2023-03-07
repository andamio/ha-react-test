import { WeatherData } from '../types/weather';

/** Note: We should ideally use an environmental variable to store this value to avoid the value from being checked into the codebase, and in an ideal world we'd take this a step further and protect the key behind our own API proxy */
const API_KEY = '29VS7A6J6QM9TJVUM9SS62B5N';

export type FetchWeatherParams = {
  location: { lat: number; lng: number };
  date?: 'today' | 'next7days';
  include?: ('days' | 'current' | 'hours')[];
};

export async function fetchWeather(
  params: FetchWeatherParams
): Promise<WeatherData> {
  // We're destructuring our params here into their own variables so they can be more easily used in our fetch call
  const {
    location: { lat, lng },
    date = 'today',
    include = ['days'],
  } = params;

  try {
    // Construct our request URL and perform the fetch request to the weather API
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}/${date}?unitGroup=metric&include=${include.toString()}&key=${API_KEY}&contentType=json`
    );

    if (response.ok) {
      // Return JSON if the response came back successfully
      return response.json();
    } else {
      // Otherwise, grab the text message returned from the API and throw as an error
      throw new Error(await response.text());
    }
  } catch (error) {
    throw new Error(`Error fetching weather data for ${lat}, ${lng}. ${error}`);
  }
}

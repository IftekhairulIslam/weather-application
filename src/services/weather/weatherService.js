
import httpService from '../http/httpService';
import { OPEN_WEATHER_MAP_API_KEY } from '../../configuration/config';
import { ENDPOINTS } from '../../configuration/endpoints';

const weatherService = {
  getWeather: (filters) => {
    return httpService.get(ENDPOINTS.weather, {
      params: {
        q: filters.cityName || '',
        appid: OPEN_WEATHER_MAP_API_KEY
      },
    });
  },
};

export default weatherService;

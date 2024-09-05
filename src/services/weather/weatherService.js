
import httpService from '../http/httpService';
import { OPEN_WEATHER_MAP_API_KEY } from '../../configuration/config';
import { ENDPOINTS } from '../../configuration/endpoints';

const weatherService = {
  getWeather: (filter) => {
    return httpService.get(ENDPOINTS.weather, {
      params: {
        q: filter.cityName || '',
        appid: OPEN_WEATHER_MAP_API_KEY
      },
    });
  },
};

export default weatherService;

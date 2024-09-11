import { useQuery } from '@tanstack/react-query';
import { ENDPOINTS } from '../configuration/endpoints';
import Weather from '../model/Weather';
import weatherService from '../services/weather/weatherService';

export const useWeather = (filter, onSuccess) => {
  return useQuery({
    queryKey: [ENDPOINTS.weather, JSON.stringify(filter)],
    queryFn: () => weatherService.getWeather(filter),
    select: (response) => new Weather(response.data),
    enabled: false,
    onSuccess: (response) => onSuccess(response),
  });
};

import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "../../configuration/endpoints";
import weatherService from "./weatherService";
import Weather from "../../model/Weather";

export const useWeather = (filter) => {
    return useQuery({
      queryKey: [ENDPOINTS.weather, JSON.stringify(filter)],
      queryFn: () => weatherService.getWeather(filter),
      select: (response) => new Weather(response.data),
    });
};
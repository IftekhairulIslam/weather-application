import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "../../configuration/endpoints";
import weatherService from "./weatherService";
import Weather from "../../model/Weather";

export const useUsers = (filters) => {
    return useQuery({
      queryKey: [ENDPOINTS.weather, JSON.stringify(filters)],
      queryFn: () => weatherService.getWeather(filters),
      select: (response) => new Weather(response.data?.data),
    });
};
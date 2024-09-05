import { SunIcon } from "@heroicons/react/24/outline";
import WeatherReportItem from "./WeatherReportItem";
import CityIcon from "../../assets/icons/CityIcon";
import TemperatureIcon from "../../assets/icons/TemperatureIcon";
import WindIcon from "../../assets/icons/WindIcon";
import DropIcon from "../../assets/icons/DropIcon";
import CloudIcon from "../../assets/icons/CloudIcon";

/* eslint-disable react/prop-types */
const WeatherReport = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <SunIcon className="h-6 w-6 text-yellow-500 mr-2" />
        <h2 className="text-2xl font-semibold">Weather Report</h2>
      </div>

      <WeatherReportItem icon={CityIcon} title='City' value={data.cityName} />
      <WeatherReportItem icon={TemperatureIcon} title='Temperature' value={data.temperature} />
      <WeatherReportItem icon={DropIcon} title='Humidity(%)' value={data.humidity} />
      <WeatherReportItem icon={WindIcon} title='Wind Speed(m/s)' value={data.windSpeed} />
      <WeatherReportItem icon={CloudIcon} title='Weather Condition' value={data.weatherCondition} />
    </div>
  );
};

export default WeatherReport;

import { SunIcon, WindowIcon } from "@heroicons/react/24/outline";
import { CloudIcon } from "@heroicons/react/24/outline";
import ThermometerIcon from "../../assets/icons/ThermometerIcon";
import HumidityIcon from "../../assets/icons/HumidityIcon";
import WeatherReportItem from "./WeatherReportItem";

/* eslint-disable react/prop-types */
const WeatherReport = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <SunIcon className="h-6 w-6 text-yellow-500 mr-2" />
        <h2 className="text-2xl font-semibold">Weather Report</h2>
      </div>

      <WeatherReportItem icon={CloudIcon} title='City' value={data.cityName} />
      <WeatherReportItem icon={ThermometerIcon} title='Temperature' value={data.temperature} />
      <WeatherReportItem icon={HumidityIcon} title='Humidity(%)' value={data.humidity} />
      <WeatherReportItem icon={WindowIcon} title='Wind Speed(m/s)' value={data.windSpeed} />
      <WeatherReportItem icon={CloudIcon} title='City' value={data.weatherCondition} />
    </div>
  );
};

export default WeatherReport;

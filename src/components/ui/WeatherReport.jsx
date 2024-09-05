/* eslint-disable react/prop-types */
const WeatherReport = ({data}) => {
    return (
        <div>
            <div>City: {data.cityName}</div>
            <div>Temperature: {data?.temperature}°C</div>
            <div>Humidity: {data?.humidity}%</div>
            <div>Wind Speed: {data?.windSpeed} m/s</div>
            <div>Weather Condition: {data?.weatherCondition}</div>
        </div>
    );
};

export default WeatherReport;
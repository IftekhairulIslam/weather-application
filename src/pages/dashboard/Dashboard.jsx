import { useWeather } from "../../services/weather/useWeather";

const Dashboard = () => {
    const { data } = useWeather({
        cityName: 'Dhaka',
    });

    return (
        <div>
            {JSON.stringify(data) ?? 'Loading'}
        </div>
    );
};

export default Dashboard;
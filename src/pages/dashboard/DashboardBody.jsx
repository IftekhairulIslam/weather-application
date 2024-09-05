/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useWeather } from '../../services/weather/useWeather';
import WeatherReport from '../../components/ui/WeatherReport';

const DashboardBody = ({filter}) => {
    const { data, isFetching, error, refetch } = useWeather(filter);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div className='bg-red-500'>
            {isFetching && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {data && !error && !isFetching && <WeatherReport data={data}/>}
        </div>
    );
};

export default DashboardBody;
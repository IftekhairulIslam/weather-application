/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useWeather } from '../../services/weather/useWeather';
import WeatherReport from '../../components/ui/WeatherReport';
import PageError from '../../components/ui/PageError';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const DashboardBody = ({filter}) => {
    const { data, isFetching, error, refetch } = useWeather(filter);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div className='flex-1 flex flex-col'>
            {isFetching && <LoadingSpinner />}
            {error && <PageError message={error.message} />}
            {data && !error && !isFetching && <WeatherReport data={data}/>}
        </div>
    );
};

export default DashboardBody;
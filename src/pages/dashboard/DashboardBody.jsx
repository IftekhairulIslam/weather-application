/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useWeather } from '../../hooks/useWeather';
import WeatherReport from '../../components/ui/WeatherReport';
import PageError from '../../components/ui/PageError';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const DashboardBody = ({filter}) => {
    const { data, isFetching, error, refetch, isFetched } = useWeather(filter);

    // This will trigger whenever filter is changed
    useEffect(() => {
        refetch();
    }, [refetch, filter]);

    // Save the name of the last searched city
    if (isFetched && !isFetching && !error && data) {
        filter.cityName && localStorage.setItem('cityName', filter.cityName);
    }

    return (
        <div className='flex-1 flex flex-col'>
            {isFetching && <LoadingSpinner />}
            {error && <PageError message={error.message} />}
            {data && !error && !isFetching && <WeatherReport data={data}/>}
        </div>
    );
};

export default DashboardBody;
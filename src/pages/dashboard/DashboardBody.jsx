import { useEffect } from 'react';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import PageError from '../../components/ui/PageError';
import WeatherReport from '../../components/ui/WeatherReport';
import { useWeather } from '../../hooks/useWeather';

const DashboardBody = ({ filter }) => {
  const { data, isFetching, error, refetch } = useWeather(filter);

  // This will trigger whenever filter is changed
  useEffect(() => {
    refetch();
  }, [refetch, filter]);

  // Save the name of the last searched city
  if (data) {
    filter.cityName && localStorage.setItem('cityName', filter.cityName);
  }

  if (isFetching) return <LoadingSpinner />;
  if (error) return <PageError message={error.message} />;

  return (
    <div className='flex-1 flex flex-col'>
      {data && <WeatherReport data={data} />}
    </div>
  );
};

export default DashboardBody;

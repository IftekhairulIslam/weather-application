import { useEffect } from 'react';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import PageError from '../../components/ui/PageError';
import WeatherReport from '../../components/ui/WeatherReport';
import { useHistoryContext } from '../../context/historyContext';
import { useWeather } from '../../hooks/useWeather';

const DashboardBody = ({ filter }) => {
  const { addHistory } = useHistoryContext();
  const updateHistory = (data) => addHistory(data.cityName);

  const { data, isFetching, error, refetch } = useWeather(
    filter,
    updateHistory,
  );

  // This will trigger whenever filter is changed
  useEffect(() => {
    refetch(filter, updateHistory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, filter]);

  if (isFetching) return <LoadingSpinner />;
  if (error) return <PageError message={error.message} />;

  return (
    <div className='flex-1 flex flex-col'>
      {data && <WeatherReport data={data} />}
    </div>
  );
};

export default DashboardBody;

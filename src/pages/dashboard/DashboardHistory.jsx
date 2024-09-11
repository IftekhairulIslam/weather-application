import SearchHistory from '../../components/ui/search-history/SearchHistory';

const DashboardHistory = ({ onFilterChange }) => {
  //TODO: this will come from localStorage
  const history = [
    'London',
    'Paris',
    'Berlin',
    'Tokyo',
    'New York',
    'Moscow',
    'Sao Paulo',
    'Bangkok',
    'Sydney',
  ];

  const handleHistoryClick = (city) => {
    onFilterChange({ cityName: city });
  };

  return (
    <div className='md:w-[250px] h-2/4 md:h-full'>
      <SearchHistory history={history} onHistoryClick={handleHistoryClick} />
    </div>
  );
};

export default DashboardHistory;

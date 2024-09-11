import SearchHistory from '../../components/ui/search-history/SearchHistory';
import { useHistoryContext } from '../../context/historyContext';

const DashboardHistory = ({ onFilterChange }) => {
  const { history } = useHistoryContext();

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

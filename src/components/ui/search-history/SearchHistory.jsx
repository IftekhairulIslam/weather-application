import SearchHistoryHeader from './SearchHistoryHeader';
import SearchHistoryList from './SearchHistoryList';

const SearchHistory = ({ history = [], onHistoryClick }) => {
  return (
    <div className='flex flex-col h-full bg-white rounded p-5 shadow-md'>
      <SearchHistoryHeader />
      {history.length > 0 ? (
        <SearchHistoryList history={history} onHistoryClick={onHistoryClick} />
      ) : (
        <div className='flex flex-1 items-center justify-center text-gray-400 font-thin'>
          No search history found.
        </div>
      )}
    </div>
  );
};

export default SearchHistory;

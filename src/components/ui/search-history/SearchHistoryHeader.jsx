import HistoryIcon from '../../../assets/icons/HistoryIcon';

const SearchHistoryHeader = () => {
  return (
    <div className='flex items-center gap-4 py-3'>
      <HistoryIcon className='h-5 w-5' />
      <div>
        <h2 className='text-xl font-semibold'>Search History</h2>
        <p className='text-sm text-gray-400 italic font-light'>
          Last 10 Search History
        </p>
      </div>
    </div>
  );
};

export default SearchHistoryHeader;

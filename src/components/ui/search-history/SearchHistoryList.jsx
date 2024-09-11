const SearchHistoryList = ({ history = [], onHistoryClick }) => {
  return (
    <ul className='list-none flex-1 overflow-auto'>
      {history.map((history) => (
        <li
          key={history}
          className='px-3 py-2 border-t border-dashed hover:bg-slate-200'
        >
          <button
            onClick={() => onHistoryClick(history)}
            className='text-gray-600 hover:text-gray-800'
          >
            {history}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchHistoryList;

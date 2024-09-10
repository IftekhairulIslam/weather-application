import { twMerge } from 'tailwind-merge';
import SearchIcon from '../../assets/icons/SearchIcon';
import InputField from '../form/InputField';

const Search = ({
  name = 'search',
  placeholder = 'Search',
  className,
  iconClassName,
  ...rest
}) => {
  return (
    <div className='relative'>
      <InputField
        className={twMerge(
          'pr-3 pl-11 h-[42px] shadow-md rounded w-full text-label text-gray-6',
          className,
        )}
        type='text'
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <SearchIcon
        className={twMerge(
          'absolute top-[13px] left-5 stroke-gray-6 pointer-events-none',
          iconClassName,
        )}
      />
    </div>
  );
};

export default Search;

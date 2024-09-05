/* eslint-disable react/prop-types */
import Search from "../../components/ui/Search";
import debounce from '../../utilities/debounce';

const DashboardHeader = ({onFilterChange}) => {
    const handleSearchNameChange = (newSearchName) => {
        onFilterChange({
          cityName: newSearchName,
        });
      };
    
      const debounceSearch = debounce(handleSearchNameChange, 500);
    return (
      <Search onChange={debounceSearch} className='bg-white' placeholder="Search weather report by city name" /> 
    );
};

export default DashboardHeader;
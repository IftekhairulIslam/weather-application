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
        <div>
           <Search onChange={debounceSearch} placeholder="Write city name here" /> 
        </div>
    );
};

export default DashboardHeader;
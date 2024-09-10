import { useState } from 'react';
import DashboardBody from './DashboardBody';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
  const defaultFilters = {
    cityName: localStorage.getItem('cityName') ?? '',
  };
  const [filter, setFilter] = useState(defaultFilters);

  return (
    <div className='h-full w-full bg-[url(@/assets/images/background-image.jpg)]'>
      <div className='h-full w-full md:w-[600px] mx-auto flex flex-col gap-5 p-8'>
        <DashboardHeader filter={filter} onFilterChange={setFilter} />
        <DashboardBody filter={filter} />
      </div>
    </div>
  );
};

export default Dashboard;

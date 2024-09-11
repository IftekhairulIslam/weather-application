import { useState } from 'react';
import HistoryProvider from '../../context/historyContext';
import DashboardBody from './DashboardBody';
import DashboardHeader from './DashboardHeader';
import DashboardHistory from './DashboardHistory';

const Dashboard = () => {
  const defaultFilters = {
    cityName: localStorage.getItem('cityName') ?? '',
  };
  const [filter, setFilter] = useState(defaultFilters);

  return (
    <HistoryProvider>
      <div className='flex flex-col-reverse md:flex-row gap-8 p-8 transition-all w-full h-full overflow-auto'>
        <DashboardHistory onFilterChange={setFilter} />

        <div className='flex-1 h-full flex flex-col gap-5'>
          <DashboardHeader filter={filter} onFilterChange={setFilter} />
          <DashboardBody filter={filter} />
        </div>
      </div>
    </HistoryProvider>
  );
};

export default Dashboard;

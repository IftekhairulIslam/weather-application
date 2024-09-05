import { useState } from "react";
import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
    const defaultFilters = {
        cityName: 'Dhaka'
    };
    const [filter, setFilter] = useState(defaultFilters);

    return (
        <div className="h-full w-full flex flex-col gap-5 p-8">
            <DashboardHeader filter={filter} onFilterChange={setFilter}/>
            <DashboardBody filter={filter} />
        </div>
    );
};

export default Dashboard;
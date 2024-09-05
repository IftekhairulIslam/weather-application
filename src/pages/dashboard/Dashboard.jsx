import { useState } from "react";
import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
    const defaultFilters = {
        cityName: 'Dhaka'
    };
    const [filter, setFilter] = useState(defaultFilters);

    return (
        <div className="bg-red-500">
            <DashboardHeader filter={filter} onFilterChange={setFilter}/>
            <DashboardBody filter={filter} />
        </div>
    );
};

export default Dashboard;
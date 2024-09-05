/* eslint-disable react/prop-types */
const WeatherReportItem = ({title, value, icon: ReportIcon}) => {
    return (
        <div className="flex gap-5 items-center">
            <ReportIcon className="h-5 w-5 text-gray-500" />
            <div>
                <span className="font-medium">{title}:</span>
                <span className="ml-2">{value}</span>
            </div>
        </div>
    );
};

export default WeatherReportItem;
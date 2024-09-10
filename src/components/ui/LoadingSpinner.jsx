const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-t-4 border-t-gray-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
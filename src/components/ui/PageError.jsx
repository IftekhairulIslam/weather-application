const PageError = ({ message }) => {
  return (
    <div className='h-full flex justify-center items-center text-white'>
      {message}
    </div>
  );
};

export default PageError;

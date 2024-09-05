// eslint-disable-next-line react/prop-types
const PageError = ({ message }) => {
    return (
      <div className='h-full flex justify-center items-center text-red-400'>
        {message}
      </div>
    );
  };
  
  export default PageError;
  
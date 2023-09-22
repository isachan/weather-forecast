import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black opacity-50 z-50'>
      <div className='animate-spin rounded-full border-t-4 border-blue-500 border-opacity-100 h-16 w-16'></div>
    </div>
  );
};

export default Loader;

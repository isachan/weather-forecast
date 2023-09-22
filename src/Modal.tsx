import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, errorMessage }) => {
  // State to manage the visibility of the modal
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <dialog open className='fixed inset-0 flex items-center justify-center z-50 '>
      <div className='fixed inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 bg-white p-4 rounded-lg shadow-lg w-90 m-4'>
        {/* Modal content goes here */}
        <h2 className='text-2xl font-semibold mb-4'>Error</h2>
        <p>{errorMessage}</p>
        {/* <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 px-4 py-2 mt-4'> */}
        <button onClick={onClose} className='md:w-20 bg-blue-500 md:mt-10 text-white px-4 py-2 h-10 border rounded-lg shadow-lg hover:bg-blue-600'>
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;

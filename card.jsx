import React from 'react';


const Card = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        p-6 rounded-xl shadow-lg 
        bg-white dark:bg-gray-800 
        transition duration-300 
        hover:shadow-xl ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
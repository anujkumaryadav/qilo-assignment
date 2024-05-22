import React from 'react';

const WeatherCard = ({ title, value, icon }) => {
  return (
    <div className="bg-[#171717] text-white p-4 rounded-md shadow-md w-48 text-center space-y-2">
      <p className='flex justify-center '>{icon}</p>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default WeatherCard;

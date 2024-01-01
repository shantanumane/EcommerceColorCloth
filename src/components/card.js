import React from 'react';
import imgVal from '../Images/MensWear/3.jpg'
const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-24%" src={imgVal} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">₹ {description}</p>
      </div>
    </div>
  );
};

export default Card;
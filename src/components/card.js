import React from 'react';
import imgVal from '../Images/WomenWear/2.jpg';
const Card = ({ imageUrl , title, description }) => {
  // const iPath=require(imageUrl);
  const imageSplit = imageUrl.split('/');
  const urlLink=`../Images/${imageSplit[2]}/`;
  console.log('imageSplit',imageSplit, urlLink)
  
  const Images = require.context('../Images/Watch/', true)
  console.log('Images',Images)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <div style={{ backgroundImage : `url(${require({'../Images/WomenWear/2.jpg'})})`, height: '200px'}} ></div> */}
      <img className="w-full h-24%" src={Images(`./${imageSplit[3]}`)} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">₹ {description}</p>
      </div>
    </div>
  );
};

export default Card;
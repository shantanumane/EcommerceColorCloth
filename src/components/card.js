
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

const Card = ({ product }) => {

  const[isLiked,setIsLiked]=useState(true);

  const imageSplit = product.imageUrl.split('/');
  const Images = require.context('../Images/', true)

  return (
    <div className="rounded-lg max-w-sm p-1 rounded overflow-hidden shadow-lg card-container hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="w-full h-24% rounded-lg" style={{height:'400px'}} src={Images(`./${imageSplit[2]}/${imageSplit[3]}`)} alt={product.productName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.productName}</div>
        <div className="flex">
          <div className="py-1">
            <FaIndianRupeeSign />
          </div>
          <div className="flex">
              <div>
              <p className="text-gray-700 text-base"> {product.price} < span className="text-green-700 px-6 text-sm">{product.discount}% off</span></p>
              </div>
              <div className="px-4 py-0.5">
                {isLiked===true?<CiHeart 
                                    onClick={(event)=>{setIsLiked(!isLiked)}} 
                                    className="size-5"/>:
                                <FcLike  
                                    onClick={(event)=>{setIsLiked(!isLiked)}} 
                                    className="size-5"/>}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


import { FaIndianRupeeSign } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import { useState } from "react";

const Card = ({ product }) => {

  console.log('product,',product);
  const[isLiked,setIsLiked]=useState(true);
  const[addedToCart,setAddedToCart]=useState(false);

  const imageSplit = product.imageUrl.split('/');
  const Images = require.context('../Images/', true)

  return (
    <div className="rounded-lg max-w-sm p-1 rounded overflow-hidden shadow-lg card-container hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="w-full h-24% rounded-lg" style={{height:'400px'}} src={Images(`./${imageSplit[2]}/${imageSplit[3]}`)} alt={product.productName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.productName} </div>
        <div className="flex">
          <div className="py-1">
            <FaIndianRupeeSign />
          </div>
          <div className="flex">
              <div>
                <p className="text-gray-700 text-base"> {product.price}</p>
              </div>
              <div>
                < span className="text-green-700 px-4 text-sm">{product.discount}% off</span>
              </div>
              <div className="px-2 py-0.5">
                {isLiked===true?<CiHeart 
                                    onClick={(event)=>{setIsLiked(!isLiked)}} 
                                    className="size-5"/>:
                                <FcLike  
                                    onClick={(event)=>{setIsLiked(!isLiked)}} 
                                    className="size-5"/>}
              </div>
              <div >
                {addedToCart===true?
                      <BsCartCheckFill onClick={()=>{setAddedToCart(!addedToCart)}} className="size-5"/>:
                      <GiShoppingCart onClick={()=>{setAddedToCart(!addedToCart)}} className="size-6 hover:scale-110 transition ease-in-out hover:animate-bounce w-6 h-6"/>
                }
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

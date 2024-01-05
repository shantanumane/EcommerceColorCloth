import { useEffect } from "react";
import Card from "./card";
import { Link } from "react-router-dom";

const ProductList=(props)=>{
    useEffect(()=>{
        console.log('props.ProductList',props.productList);
    },[props.productList, props.category])
    return (
        <div className="mx-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                {props.productList.map((product)=>(
                    <div  className="relative group">
                        <Card product={product}  />
                    </div>
                ))}
            </div>
            <div className="text-right">
                {props.category!=='All Category'?<div>
                    <Link to='/CategoryView'><button type="button" className="py-2.5 px-5 my-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View More</button></Link>
                </div>:''
                }
            </div>
        </div>
    );
}
export default ProductList;
import { useEffect } from "react";
import Card from "./card";

const ProductList=(props)=>{
    useEffect(()=>{
        console.log('props.ProductList',props.productList);
    },[props.productList, props.category])
    return (
        <div className="mx-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                {props.productList.map((product)=>(
                    <div  className="relative group ">
                        
                        <Card imageUrl={product.imageUrl} title={product.productName} description={product.price} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductList;
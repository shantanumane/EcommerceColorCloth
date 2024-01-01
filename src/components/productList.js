import { useEffect } from "react";

const ProductList=(props)=>{
    useEffect(()=>{
        console.log('props.ProductList',props.productList);
    },[props.productList, props.category])
    return (
        <div >
            {props.category}
        </div>
    );
}
export default ProductList;
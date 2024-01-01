import { useEffect, useState } from "react";

const ProductList=(props)=>{
    useEffect(()=>{
        console.log('props.ProductList',props.ProductList);
        console.log("props.category", props.category);
    },[props.ProductList, props.category])
    return (
        <div >
            {props.category}
        </div>
    );
}
export default ProductList;
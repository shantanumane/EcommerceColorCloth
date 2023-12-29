import { useState } from "react";

const ProductList=(props)=>{
    const productItems=[{"category":"Men","productName":"Only Check Trouser","price":1000},{"category":"Men","productName":"Herschel supply","price":1300},{"category":"Men","productName":"Herschel G supply","price":1200},{"category":"Men","productName":"Herschel C Drw","price":1100},{"category":"Women","productName":"Esprit Ruffle Shirt","price":1000},{"category":"Women","productName":"Herschel supply","price":1300},{"category":"Women","productName":"Classic Trench Coat","price":1200},{"category":"Women","productName":"Front Pocket Jumper","price":1100},{"category":"Watch","productName":"Esprit Guel Shirt","price":1000},{"category":"Watch","productName":"Herschel S","price":1300},{"category":"Watch","productName":"Classic B Coat","price":800},{"category":"Watch","productName":"Front Pocket Jumper","price":1200}];
    const [plist,setplist]=useState(productItems);
    return (
        <div >
            {plist.filter(item=>item.category===props.Category).map(res=>{
                console.log(res.productName)
            })
                
            }
            {props.Category} from child 
        </div>
    );
}
export default ProductList;
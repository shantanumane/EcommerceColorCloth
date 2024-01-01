import { useState } from "react";
import ProductList from "./productList";

const productItems='[{"category":"Men","productName":"Only Check Trouser","price":1000,"imageUrl":"../Images/MensWear/1.jpg"},{"category":"Men","productName":"Herschel supply","price":1300,"imageUrl":"../Images/MensWear/2.jpg"},{"category":"Men","productName":"Herschel G supply","price":1200,"imageUrl":"../Images/MensWear/3.jpg"},{"category":"Men","productName":"Herschel C Drw","price":1100,"imageUrl":"../Images/MensWear/4.jpg"},{"category":"Women","productName":"Esprit Ruffle Shirt","price":1000,"imageUrl":"../Images/WomenWear/1.jpg"},{"category":"Women","productName":"Herschel supply","price":1300,"imageUrl":"../Images/WomenWear/2.jpg"},{"category":"Women","productName":"Classic Trench Coat","price":1200,"imageUrl":"../Images/WomenWear/3.jpg"},{"category":"Women","productName":"Front Pocket Jumper","price":1100,"imageUrl":"../Images/WomenWear/4.jpg"},{"category":"Watch","productName":"Esprit Guel Shirt","price":1000,"imageUrl":"../Images/Watch/1.jpg"},{"category":"Watch","productName":"Herschel S","price":1300,"imageUrl":"../Images/Watch/2.jpg"},{"category":"Watch","productName":"Classic B Coat","price":800,"imageUrl":"../Images/Watch/3.jpg"},{"category":"Watch","productName":"Front Pocket Jumper","price":1200,"imageUrl":"../Images/Watch/4.jpg"}]';
const ProductOverview=()=>{

    const [selectedCategory,setCategory]=useState('All Category');
    const [filteredProducts,setFilteredProducts]=useState(JSON.parse(productItems));

    function renderCetegoryComp(event)
    {
        let categoryName=event?.target?.attributes?.getNamedItem('value')?.value;
        setCategory(categoryName);

        if(categoryName==='All Category')
        {
            setFilteredProducts(JSON.parse(productItems));
        }
        else{
            let  filter=JSON.parse(productItems).filter(product=>product.category===categoryName);
            setFilteredProducts(filter);
        }        
    }

    return(
        <div >
            <div className="grid grid-rows-2 grid-flow-col gap-1 ">
                <div>
                    <p className=" px-10 py-6 text-color[#222] text-left capitalize font-bold text-3xl">PRODUCT OVERVIEW</p>
                </div>
                <div className=" text-color[#888888] text-balance">
                    <ul className="flex px-9 ">
                        <li onClick={renderCetegoryComp}  value='All Category' className="px-1 hover:underline underline-offset-8">All Category</li>
                        <li onClick={renderCetegoryComp}  value='Women' className="px-2 hover:underline underline-offset-8">Women</li>
                        <li onClick={renderCetegoryComp}  value='Men' className="px-2 hover:underline underline-offset-8">Men</li>
                        <li onClick={renderCetegoryComp}  value='Watch' className="px-2 hover:underline underline-offset-8">Watch</li>
                    </ul>
                </div>
            </div>
            <ProductList category={selectedCategory} productList={filteredProducts} />
        </div>
        
    );
}
export default ProductOverview;
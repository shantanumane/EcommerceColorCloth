import { useState } from "react";
import ProductList from "./productList";
const ProductOverview=()=>{
    // const categoryMapper={
    //     'All Category':<Products/>,
    //     'Women':<Products/>,
    //     'Men':<FlexImage/>,
    //     'Watch':<Navbar/>,
    // }
    const [selectedComp,setComponent]=useState('');
    function renderCetegoryComp(event)
    {
        let componentName=event?.target?.attributes?.getNamedItem('value')?.value;
        // const catMap = new Map(Object.entries(categoryMapper));
        setComponent(componentName);
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
            <ProductList Category={selectedComp}/>
        </div>
        
    );
}
export default ProductOverview;
import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Products from './products';
import FlexImage from './flexImage';
import ProductOverview from './productOverview';

const Layout=()=>{
    return(
        <div>
            <Navbar/>
                <FlexImage/>
                <Products/>
                <ProductOverview/>
            <Footer/>
            
        </div>
    );
}
export default Layout;
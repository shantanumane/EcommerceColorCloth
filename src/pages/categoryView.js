import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Card from "../components/card"
import { useParams } from 'react-router-dom';

const productItems='[{"category":"Men","productName":"Only Check Trouser","price":1000,"imageUrl":"../Images/MensWear/1.jpg","discount":"10"},{"category":"Men","productName":"Herschel supply","price":1300,"imageUrl":"../Images/MensWear/2.jpg","discount":"10"},{"category":"Men","productName":"Herschel G supply","price":1200,"imageUrl":"../Images/MensWear/3.jpg","discount":"10"},{"category":"Men","productName":"Herschel C Drw","price":1100,"imageUrl":"../Images/MensWear/4.jpg","discount":"12"},{"category":"Women","productName":"Esprit Ruffle Shirt","price":1000,"imageUrl":"../Images/WomenWear/1.jpg","discount":"20"},{"category":"Women","productName":"Herschel supply","price":1300,"imageUrl":"../Images/WomenWear/2.jpg","discount":"30"},{"category":"Women","productName":"Classic Trench Coat","price":1200,"imageUrl":"../Images/WomenWear/3.jpg","discount":"14"},{"category":"Women","productName":"Front Pocket Jumper","price":1100,"imageUrl":"../Images/WomenWear/4.jpg","discount":"24"},{"category":"Watch","productName":"Esprit Guel Shirt","price":1000,"imageUrl":"../Images/Watch/1.jpg","discount":"55"},{"category":"Watch","productName":"Herschel S","price":1300,"imageUrl":"../Images/Watch/2.jpg","discount":"45"},{"category":"Watch","productName":"Classic B Coat","price":800,"imageUrl":"../Images/Watch/3.jpg","discount":"35"},{"category":"Watch","productName":"Front Pocket Jumper","price":1200,"imageUrl":"../Images/Watch/4.jpg","discount":"34"}]';

const CategoryView=()=>{
    
    const { category } = useParams();
    const products=JSON.parse(productItems).filter(product=>product.category===category);

    return(
        <div>
          <Navbar/>
            <div>
              <p className=" px-10 py-6 text-color[#222] text-left capitalize font-bold text-3xl">PRODUCT CATEGORY : <span className="capitalize">{category}</span></p>
            </div>
            <div className="mx-10">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {products.map((productFil)=>
                    <div  className="relative group">
                        <Card product={productFil}  />
                    </div>
                )}
              </div>
            </div>
          <Footer/>
        </div>
      );
}
export default CategoryView;
import ImageSorce from '../Images/templateImage.jpg'
import WomennWare from '../Images/templateWomen.jpg'
import MenWare from '../Images/templateMan.jpg'
const Products=()=>{
    return (
        <div className='pt-10 px-10'>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div >
                    <div  className="relative group ">
                        <img src={WomennWare} alt="Women" className="w-full h-auto group-hover:opacity-40 transition-opacity  duration-600 "/>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                                <p className="text-4xl font-bold group-hover:text-gray-500 opacity-100 text-white transition-colors duration-600">Women</p>
                            </div>
                    </div>
                </div>
                <div>
                        <div className="relative group ">
                        <img src={ImageSorce} alt="Women" className="w-full h-auto group-hover:opacity-40 transition-opacity  duration-600 "/>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-4xl font-bold group-hover:text-gray-500 opacity-100 text-white transition-colors duration-600">Men</p>
                            </div>
                        </div>
                </div>
                <div>
                    <div className="relative group ">
                        <img src={MenWare} alt="Women" className="w-full h-auto group-hover:opacity-40 transition-opacity  duration-600 "/>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-4xl font-bold group-hover:text-gray-500 opacity-100 text-white transition-colors duration-600">Accessories</p>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
}
export default Products;
import ImageSorce from '../Images/templateWomen.jpg'
const FlexImage=()=>{
    return(
        <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <img style={{borderRadius:'10px'}} className='w-[100%] p-2' src={ImageSorce} alt="Not found" />
        </div>
    );
}
export default FlexImage;
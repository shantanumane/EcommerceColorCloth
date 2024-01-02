
const Card = ({ imageUrl , title, description }) => {

  const imageSplit = imageUrl.split('/');
  
  const Images = require.context('../Images/', true)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-24%" src={Images(`./${imageSplit[2]}/${imageSplit[3]}`)} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">₹ {description}</p>
      </div>
    </div>
  );
};

export default Card;

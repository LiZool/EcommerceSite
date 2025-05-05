// src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
        <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <span className="block mt-4 text-xl font-bold">${product.price}</span>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
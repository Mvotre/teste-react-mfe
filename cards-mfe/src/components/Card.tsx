import Product from "../types/Product";
import './Card.css'

type CardProps = {
  product: Product;
  onProductClick: (product: Product) => void;
}

const Card = ({product, onProductClick }: CardProps) => {
  return (
    <div
      key={product.id}
      className="card max-w-sm rounded-2xl overflow-hidden shadow-md bg-white cursor-pointer flex flex-col items-center text-center py-8 px-4 group"
      onClick={() => onProductClick(product)}
    >
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
    
      <div className="flex flex-col justify-between flex-grow items-center text-center">
        <h3 className="font-bold text-xl mb-2 min-h-[48px] group-hover:text-green-600 transition-colors duration-300">
          {product.title}
        </h3>
    
        <p className="text-gray-700 text-base mb-4 line-clamp-3 min-h-[72px] group-hover:text-green-600 transition-colors duration-300">
          {product.description}
        </p>
    
        <p className="text-2xl font-semibold text-green-600 mt-auto">
          Price: ${product.price}
        </p>
      </div>
    </div>
  )
}

export default Card;
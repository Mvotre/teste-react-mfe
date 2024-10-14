import Card from './components/Card';
import Product from './types/Product';

type CardProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
}

function Cards({products, onProductClick}: CardProps) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {products.map(product => (
        <Card key={product.id} product={product} onProductClick={onProductClick}/>
      ))}
    </div>
  )
}

export default Cards

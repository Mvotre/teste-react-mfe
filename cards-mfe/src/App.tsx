import { useState, useEffect } from 'react';

import Product from './types/Product';
import Cards from './Cards';

function App() {
    const [productData, setProductData] = useState<Product[]>([])
    const [_, setClickedProducts] = useState<Product[]>([]);

    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  
    async function useProducts() {
      const z = await fetchProducts();
      setProductData(z.products);
    }
  
    useEffect(()=>{
      useProducts();
    }, [])

    const handleProductClick = (product: Product) => {
      setClickedProducts((prev) => [...prev, product]);
    };
    
  return (
    <>
      <Cards products={productData} onProductClick={handleProductClick}/>
    </>
  )
}

export default App

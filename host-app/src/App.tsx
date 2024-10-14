import { useEffect, useState } from 'react';

import Product from './types/Product';
// @ts-ignore
import Header from "header_mfe/Header";
// @ts-ignore
import Cards from "cards_mfe/Cards";
// @ts-ignore
import Footer from "footer_mfe/Footer";
import ShorterProduct from './types/ShorterProduct';


function App() {
  const [productData, setProductData] = useState<Product[]>([])
  const [clickedProducts, setClickedProducts] = useState<ShorterProduct[]>([]);

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

  const onRemoveProduct = (id: number) => {
    setClickedProducts(prevItems => {
      const updatedItems = prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0);
      return updatedItems;
    });
  };

  const handleProductClick = (product: Product) => {
    setClickedProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);
      if (existingProduct) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { id: product.id, name: product.title, price: product.price, quantity: 1 }];
      }
    });
  };

  useEffect(()=>{
    useProducts();
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <Header className="sticky top-0 z-10" counter={clickedProducts.length} products={clickedProducts} onRemoveProduct={onRemoveProduct} />
      <div className="flex-1 overflow-y-auto">
        <Cards products={productData} onProductClick={handleProductClick}/>
      </div>
      <Footer className="sticky bottom-0 z-10" />
    </div>
  )
}

export default App

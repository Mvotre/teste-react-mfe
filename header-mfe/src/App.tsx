import { useState } from 'react';
import Header from './components/Header'

const initialItems = [
  {
    "id": 1,
    "name": "Eyeshadow Palette with Mirror",
    "price": 19.99,
    "quantity": 1
  },
  {
    "id": 2,
    "name": "Powder Canister",
    "price": 14.99,
    "quantity": 2
  },
  {
    "id": 3,
    "name": "Calvin Klein CK One",
    "price": 49.99,
    "quantity": 1
  }
]

function App() {
  const [items, setItems] = useState(initialItems);

  const onRemoveProduct = (id: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)
    );
  }

  return (
    <>
      <Header counter={items.length} products={items} onRemoveProduct={onRemoveProduct}/>
    </>
  )
}

export default App

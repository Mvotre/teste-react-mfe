// Header.tsx
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo-vr.svg';
import cartIcon from '../assets/shopping-cart.svg';
// @ts-ignore
import ShorterProduct from './types/ShorterProduct';

type HeaderProps = {
  counter: number;
  products: ShorterProduct[];
  onRemoveProduct: (id: number) => void;
}

const Header = ({counter, products, onRemoveProduct}:HeaderProps) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleNotificationClick = () => {
    setShowModal(!showModal);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };

    useEffect(() => {
      if (showModal) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [showModal]);

    return (
      <header className="flex justify-between items-center bg-vrHeader p-4 text-white">
        <div className="text-xl font-bold"><img src={logo} alt="Logo" className="w-12 h-12"/></div>
        <div className="relative" onClick={handleNotificationClick}>
          <img src={cartIcon} alt="cart-icon" className="w-8 h-8" />
          { counter > 0 && (
            <>
              <div
                className="bg-vrLaranja text-white rounded-full w-5 h-5 flex justify-center items-center cursor-pointer absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 p-1"
              >
                <span className="text-xs font-bold">{counter}</span>
              </div>
              {showModal && (
                <div ref={modalRef} className="absolute top-10 right-0 bg-white text-black p-4 border border-gray-300 rounded shadow-lg w-72">
                  <p className="font-bold mb-2">Shopping cart</p>
                  {products.map((product, index) => (
                    <div key={product.id} className="mb-2">
                      <p className="font-semibold">{product.name}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                        <div className="flex space-x-1">
                          <p>Price:</p>
                          <p>${product.price}</p>
                        </div>
                        <div className="flex space-x-1">
                          <p>Quantity:</p>
                          <p>{product.quantity}</p>
                        </div>
                        </div>
                        <button
                        className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                        onClick={() => onRemoveProduct(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                      {index < products.length - 1 && <hr className="my-2 border-gray-300" />}
                      </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </header>
    );
};

export default Header;
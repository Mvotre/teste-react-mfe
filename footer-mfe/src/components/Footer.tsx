import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-vrCinza text-white py-6 text-sm px-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-left">
          <p className="mb-2 pt-1">&copy; 2024 VR Benefícios - CNPJ 02.535.864/0001-33</p>
          <p className="mb-2">Todos os direitos reservados</p>
          <p className="mb-1 hover:text-yellow-500">Políticas de Privacidade</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-gray-400 border-b-2 border-yellow-500 pb-1">Saiba mais sobre</div>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
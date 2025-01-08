import React from 'react';

const Header = () => (
  <header className="container mx-auto px-4 py-8">
    <nav className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-blue-600">Artha Mitra</h1>
      <div className="space-x-4">
        <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
        <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  </header>
);

export default Header;


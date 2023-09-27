// src/components/SellingStore.js
import React from 'react';

const SellingStore = () => {
  // Add your selling products here
  const products = [
    {
      name: 'Game Product 1',
      price: 10,
    },
    {
      name: 'Gift Card 1',
      price: 20,
    },
    {
      name: 'Top-up Card 1',
      price: 30,
    },
  ];

  return (
    <div className="selling-store">
      <h2>Selling Store</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellingStore;

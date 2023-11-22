// import React from 'react'
// import Header from './componentss/Header'
// const App = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default App

import React, { useState } from 'react';
import FoodItem from './componentss/Fooditem';
import Cart from './componentss/Cart';

const foodMenu = [
  { id: 1, name: 'Burger', price: 10.99 },
  { id: 2, name: 'Pizza', price: 12.99 },
  // Add more food items as needed
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <h1>Food Order Website</h1>
      <div>
        <h2>Menu</h2>
        {foodMenu.map((item) => (
          <FoodItem
            key={item.id}
            name={item.name}
            price={item.price}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default App;
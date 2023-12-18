import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  //cart state
  const [cart, setCart] = useState([]);
  const addToCart = (products, id) =>{
    const newItem = {...products,amount: 1}

    //check if item is already aded to cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item)=>{
        if(item.id === id){
          return {...item,amount:cartItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem]);
    }
  }; 

  const removeFromCart = (id) =>{
    const newCart = cart.filter((item)=>{
      return item.id !== id;
    });
    setCart(newCart);
  };
  return <CartContext.Provider value={{cart, addToCart, removeFromCart}}>{children}</CartContext.Provider>;
};

export default CartProvider;

import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  //cart state
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);

  // total price state
  const[total, setTotal] = useState(0);
  
  useEffect(()=>{
    const total = cart.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.price * currentItem.amount;
      },0);
      setTotal(total);
  });

  // update item amount
  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.amount;
      },0);
      setItemAmount(amount);
    }
  },[cart]);

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

  const clearCart = ()=>{
    setCart([])
  };

  const increaseAmount = (id) =>{
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount  = (id) =>{
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem){
      const newCart = cart.map((item)=>{
        if(item.id === id){
          //object spreading
          return{...item, amount: cartItem.amount - 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2){
        removeFromCart(id);
      }
  };

  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount,total}}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;

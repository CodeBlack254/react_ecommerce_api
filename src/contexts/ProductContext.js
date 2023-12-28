import React, { createContext, useEffect, useState }from 'react';

//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //product state
  const [products, setProducts] = useState([]);
  //fetch products

  useEffect(() => {
    const fetchProducts = async () => { 
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Oops Something went wrong !!');
        }
  
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };  
    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;

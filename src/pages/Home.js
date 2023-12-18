import React, {useContext} from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {
  const { products } = useContext(ProductContext);
  // get men and womens clothing
  const filterdProducts = products.filter((item)=>{
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0'>
          {filterdProducts.map(products =>{
            return <Product products = {products} key={products.id} />
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;

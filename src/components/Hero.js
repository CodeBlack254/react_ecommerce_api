import React from 'react';
import WomanImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'> 
    <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New trend
        </div>
        <h1 className='text-[60px] leading-[1.1] font-light mb-4 uppercase'>
          Mtalii shop styles <br/>
          <span className='font-semibold'> WOMEN | MEN</span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
        Discover more 
        </Link>
      </div>
      <div className='hidden lg:block'>
        <img src={WomanImg} alt='image'/> 
      </div>
    </div>
  </section>;
};

export default Hero;

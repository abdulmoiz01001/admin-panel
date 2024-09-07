import React, { useEffect, useState } from 'react';
import ProductCard from './customs/ProductCard';
import { apiClient } from '@/lib/api-client';
import { GET_PRODUCTS_ROUTE } from '@/utils/constants';

const WishListComp = () => {
  const [cardsJust, setCardsJust] = useState<any>([]);
  
  const getDataJustForYou = async () => {
    try {
      const response = await apiClient.get(GET_PRODUCTS_ROUTE);

      if (response.status === 200) {
        // Shuffle the data and pick 4 random products
        const shuffledProducts = response.data.sort(() => 0.5 - Math.random()).slice(0, 4);
        setCardsJust(shuffledProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataJustForYou();
  }, []);

  const cards = [
    { id: 1, image: 'https://th.bing.com/th?q=Bad+Hygiene+Product&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=strict&t=1&mw=247', ProductName: 'Card 1', price: '$10', button: 'Add To Cart ' },
    { id: 2, image: 'https://th.bing.com/th/id/R.52306f2880dca0f3b43890fd874cc641?rik=Vsv90uYQXOIzaw&pid=ImgRaw&r=0', ProductName: 'Card 2', price: '$10', button: 'Add To Cart ' },
    { id: 3, image: 'https://th.bing.com/th/id/OIP.CSrSxiR7BHz26DY4xJomlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', ProductName: 'Card 3', price: '$10', button: 'Add To Cart ' },
    { id: 4, image: 'https://th.bing.com/th/id/OIP.vrDdavLM5ffDfjWGtNQLXgAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', ProductName: 'Card 4', price: '$10', button: 'Add To Cart ' },
    // Add more cards as needed
  ];

  return (
    <div className='max-w-[100vw] min-h-[100vh] flex justify-center items-center'>
      <div className='w-[85%] h-full flex gap-8 flex-col justify-center items-center'>
        <div className='w-full flex justify-center items-center flex-col gap-4'>
          <div className='w-full xs:flex-col xxs:flex-col xxs:gap-4 xs:gap-4 px-6 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-center'>WishList (4)</h1>
            <button className='border-2 w-[223px] h-[56px] text-lg'>
              Move All To Bag
            </button>
          </div>
          <div className='w-full gap-8 overflow-hidden overflow-y-hidden flex flex-wrap justify-evenly items-center'>
            {cards.map(card => (
              <ProductCard 
                key={card.id} 
                see={{
                  wishlist: false,
                  watch: true
                }} 
                card={card} 
              />
            ))}
          </div>
        </div>
        
        <div className='w-full flex justify-center items-center flex-col gap-4'>
          <div className='w-full xs:flex-col xxs:flex-col xxs:gap-4 xs:gap-4 px-6 flex justify-between items-center'>
            <div className='flex justify-between items-center gap-4'>
              <div className='bg-red-500 w-[20px] h-[40px]'></div>
              <p className='text-lg font-bold'>Just For You</p>
            </div>
            <button className='border-2 w-[223px] h-[56px] text-lg'>
              See All
            </button>
          </div>
          <div className='w-full gap-8 overflow-y-hidden flex flex-wrap justify-evenly items-center'>
            {cardsJust.map((card: any) => (
              <ProductCard 
                key={card._id} 
                card={card} 
                see={{
                  wishlist: true,
                  watch: true
                }} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListComp;

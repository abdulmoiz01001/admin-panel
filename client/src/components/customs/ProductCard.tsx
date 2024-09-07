import { apiClient } from '@/lib/api-client';
import { ADD_TO_CART_ROUTE, ADD_TO_WISHLIST_ROUTE } from '@/utils/constants';
import React, { useState } from 'react';
import { IoCartOutline, IoEyeOutline, IoHeartOutline, IoTrashOutline } from "react-icons/io5";
import { toast } from 'sonner';

const ProductCard = ({ key  ,card, see }: {
  key : any,
  card: any;
  see: any;
}) => {
  const [isHover, setIsHover] = useState(false);
  const wishlist = see.wishlist;
  const watch = see.watch;

  const saveToWishlist = async (card : any ) =>{
    try{
        const response = await apiClient.post(`${ADD_TO_WISHLIST_ROUTE}/${card._id}`)
        console.log(response);
        if(response.status === 201){
            toast.success('Added to wishlist successfully');
        }else{
            toast.error('Failed to add to wishlist');
        }
    }catch(e){

    }
  } 

  const addToCart = async (card : any) => {
    try {
      const response = await apiClient.post(
        `${ADD_TO_CART_ROUTE}/${card._id}`,
        { quantity: 1 },
        { withCredentials: true }
      );

      if (response.status === 201) {
        toast.success('Added to cart successfully');
      } else {
        toast.error('Failed to add to cart');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while adding to cart');
    }
  };

  return (
    <>
      {card && (
        <div className='min-w-[270px] cursor-pointer max-w-[270px] flex flex-col justify-start items-start'>
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='w-full relative h-[200px] border border-gray-200 overflow-hidden rounded-md shadow-sm'
          >
            <div className='w-[34px] h-[34px] flex justify-center items-center bg-white rounded-full absolute right-2 top-14'>
              {watch ? (
                <IoEyeOutline className='cursor-pointer text-2xl' />
              ) : (
                <IoTrashOutline className='cursor-pointer text-2xl' />
              )}
            </div>
            <div className='w-[34px] h-[34px] flex justify-center items-center bg-white rounded-full absolute right-2 top-2'>
              {wishlist ? (
                <IoHeartOutline onClick={()=>saveToWishlist(card)} className='cursor-pointer text-2xl' />
              ) : (
                <IoTrashOutline className='cursor-pointer text-2xl' />
              )}
            </div>
            {card.discount > 0 && (
              <div className='w-[55px] h-[26px] absolute left-2 top-2 bg-red-500 text-white'>
                <p className='text-center'>-{card.discount}%</p>
              </div>
            )}
            <img src={card.product || '/placeholder.png'} alt="Product" className='w-full h-[200px] object-cover' />

            <button
              onClick={() => addToCart(card)}
              className={` ${isHover ? 'absolute bottom-0' : 'absolute -bottom-10'} transition-all active:scale-95 duration-300 w-full h-[41px] bg-black text-white text-sm flex justify-center gap-2 items-center text-center`}
            >
              <IoCartOutline /> Add To Cart
            </button>
          </div>
          <div className='w-full flex flex-col mt-2'>
            <p className='text-sm text-black font-semibold'>{card.ProductName || 'Unnamed Product'}</p>
            <p className='text-lg text-red-500 my-1'>${Number(card.price).toFixed(2)}</p>
            {card.review && (
              <div className='flex gap-1 items-center'>
                <p className='text-sm text-black font-semibold'>{card.review.toFixed(1)}</p>
                <div className='w-[20px] h-[20px] bg-yellow-500 rounded-full flex justify-center items-center'>
                  <p className='text-white text-xs'>★</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;

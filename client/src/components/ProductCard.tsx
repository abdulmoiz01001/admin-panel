
import  { useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { createSecureContext } from 'tls';

const ProductCard = ({ product }:any) => {
    const [mouseOnCard,setMouseOnCard]=useState(true);
    return (
       
        <div className='mx-5' onMouseEnter={()=>setMouseOnCard(prev=> (!prev))} onMouseLeave={()=>setMouseOnCard(prev=> (!prev))}
        
        >
            <div className='bg-gray-100 w-full h-[250px] relative rounded-sm bg-center bg-no-repeat' style={{backgroundImage: `url(${product.image})`}}>
                <div className='absolute bg-red-600 text-white w-14  rounded-sm left-3 top-3'>
                    -{product.discount}%
                </div>
                
                <div className='absolute bg-white w-10 h-10 right-3 top-2 rounded-full '>
                    <div className='flex items-center justify-center w-full h-full text-2xl'>
                    <FaRegHeart />
                    </div>
                
                </div>

                <div className='absolute bg-white w-10 h-10 right-3 top-14 rounded-full '>
                    <div className='flex items-center justify-center w-full h-full text-2xl'>
                    <FaRegHeart />
                    </div>
                
                </div>

                <div className={`${mouseOnCard? 'hidden' : ''}  absolute bottom-0 bg-black text-white w-full h-10 text-center font-bold`}>
                    Add To Cart
                </div>

            </div>
            <div>
                <p className='text-left font-semibold'>
                    ${product.name}
                </p>
                <p className='text-left flex gap-2'>
                    <span className='text-red-600'>${product.currentPrice}</span>
                    <span className='line-through text-gray-600'>${product.originalPrice}</span>
                </p>
                {
                    
                    

                }
            </div>
        </div>
    );
};

export default ProductCard;

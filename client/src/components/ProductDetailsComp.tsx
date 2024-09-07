import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { IoBicycleOutline, IoBusOutline, IoHeartOutline, IoStar } from 'react-icons/io5';
import ProductCard from './customs/ProductCard';

const ProductDetailsComp = () => {
  // State variables
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    name: 'Havic HV G-92 Gamepad',
    price: 49.99,
    stockStatus: 'In Stock',
    rating: 5.0,
    reviews: 23,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    images: [
      'https://via.placeholder.com/100x100?text=Headset',
      'https://via.placeholder.com/100x100?text=Headset',
      'https://via.placeholder.com/100x100?text=Headset',
      'https://via.placeholder.com/100x100?text=Headset',
    ],
  });

  // Handlers
  const handleColorChange = (color : any) => setSelectedColor(color);
  const handleSizeChange = (size : any) => setSelectedSize(size);
  const handleQuantityChange = (operation : any) => {
    if (operation === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (operation === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const cardsJust = [
    { id: 1, image: 'https://th.bing.com/th?q=Bad+Hygiene+Product&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=strict&t=1&mw=247', ProductName: 'Card 1', price: '$10', button: 'Add To Cart ', review: '5' },
    { id: 2, image: 'https://th.bing.com/th/id/R.52306f2880dca0f3b43890fd874cc641?rik=Vsv90uYQXOIzaw&pid=ImgRaw&r=0', ProductName: 'Card 2', price: '$10', button: 'Add To Cart ', review: '3.5' },
    { id: 3, image: 'https://th.bing.com/th/id/OIP.CSrSxiR7BHz26DY4xJomlAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', ProductName: 'Card 3', price: '$10', button: 'Add To Cart ', review: '4.5' },
    { id: 4, image: 'https://th.bing.com/th/id/OIP.vrDdavLM5ffDfjWGtNQLXgAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3', ProductName: 'Card 4', price: '$10', button: 'Add To Cart ', review: '2.5' },

    // Add more cards as needed
  ];

  return (
    <div className='max-w-[100vw] flex flex-col justify-center items-center gap-4 min-h-[100vh]'>
      <div className='w-[85%] flex justify-start items-center'>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='w-[85%] border flex justify-between items-center'>
        <div className='w-[15%] border gap-4 flex justify-start items-center flex-col'>
          {product.images.map((image, index) => (
            <div key={index} className='w-[170px] h-[138px] flex justify-center items-center'>
              <img className='w-full h-full object-cover' src={image} alt={`Product Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className='w-[45%] flex justify-start items-center'>
          <img className='w-[78%] h-[600px]' src={product.images[0]} alt='Product' />
        </div>
        <div className='w-[40%] flex flex-col justify-start items-start gap-4'>
          <h1 className='text-4xl font-bold'>{product.name}</h1>
          <div className='w-full flex justify-start gap-8 items-center'>
            <div className='flex justify-evenly items-center'>
              {[...Array(5)].map((_, i) => (
                <IoStar key={i} className='text-yellow-500 text-2xl' />
              ))}
            </div>
            <p className='text-sm'>{product.rating} ({product.reviews} Reviews)</p>
            <p className='text-sm text-green-500'>{product.stockStatus}</p>
          </div>
          <p className='text-lg text-red-500'>${product.price}</p>
          <p className='text-sm'>{product.description}</p>
          <hr className='w-full' />

          <div className='w-full flex justify-start items-center gap-4'>
            <p className='text-lg'>Color:</p>
            {['red', 'blue', 'yellow'].map((color) => (
              <div key={color} className='flex flex-col justify-center items-center gap-2'>
                <label
                  className={`w-[20px] h-[20px] bg-${color}-500 rounded-full cursor-pointer`}
                  onClick={() => handleColorChange(color)}
                ></label>
                <input
                  type='radio'
                  name='color'
                  id={color}
                  checked={selectedColor === color}
                  onChange={() => handleColorChange(color)}
                  className='hidden'
                />
              </div>
            ))}
          </div>

          <div className='w-full flex justify-start items-center gap-4'>
            <p className='text-lg'>Size:</p>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className={`w-[24px] h-[24px] border-2 flex justify-center items-center cursor-pointer ${selectedSize === size ? 'border-black' : ''}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </div>
            ))}
          </div>

          <div className='w-full flex justify-start gap-4 items-center'>
            <div className='flex justify-start items-center'>
              <button className='w-[40px] h-[40px] bg-none text-black text-4xl flex justify-center items-center' onClick={() => handleQuantityChange('decrement')}>-</button>
              <input type='text' className='w-[80px] border h-[40px] text-center' value={quantity} readOnly />
              <button className='w-[40px] h-[40px] bg-red-500 text-white text-2xl flex justify-center items-center' onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
            <button className='w-[223px] h-[40px] bg-red-500 text-white text-lg'>Buy Now</button>
            <button className='w-[34px] h-[34px] flex justify-center items-center bg-none border-2 text-lg'>
              <IoHeartOutline />
            </button>
          </div>

          <div className='w-[400px] border-2 flex flex-col justify-start items-start'>
            <div className='w-full pl-10 py-4 h-[50%] border-b-2 flex justify-start gap-4 items-center'>
              <IoBusOutline className='text-4xl' />
              <div className='w-[90%] flex flex-col justify-start items-start'>
                <p className='text-lg'>Delivery Information</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className='w-full pl-10 py-4 h-[50%] flex justify-start gap-4 items-center'>
              <IoBicycleOutline className='text-4xl' />
              <div className='w-[90%] flex flex-col justify-start items-start'>
                <p className='text-lg'>Return Policy</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className='w-[85%] mt-10 flex justify-center items-center flex-col gap-4' >

<div className='w-full  xs:flex-col xxs:flex-col xxs:gap-4 xs:gap-4   px-6 flex justify-between items-center' >
  <div className='flex  justify-between items-center gap-4' >
    <div className='bg-red-500 w-[20px] h-[40px] ' >

    </div>
    <p className='text-lg font-bold' >Related Items </p>
  </div>
  <button className='border-2 w-[223px] h-[56px] text-lg' >
    See All
  </button>
</div>
<div className='w-full  gap-8  overflow-y-hidden flex flex-wrap justify-evenly items-center ' >
  {
    cardsJust.map(cards => (
      <ProductCard key={cards.id} see={{
        wishlist:true,
        watch:true
      }} card={cards} />
    ))
  }
</div>

</div>
    </div>
  );
};

export default ProductDetailsComp;

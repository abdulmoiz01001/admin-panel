
import FlashSales from '@/components/FlashSales'
import HeroSlider from '@/components/HeroSlider'
import ProductGrid from '@/components/ProductGrid'
import Sidebar from '@/components/SideBar'
import Tag from '@/components/Tag'
import Timer from '@/components/Timer'


const HomePage = () => {
  return (
    <div className=' flex flex-col'>
      <div className='flex w-full'>
          <div className='w-[20%] xxs:hidden xs:hidden sm:hidden md:block '>
            <Sidebar/>
          </div>
          <div className='xxs:w-full xs:w-full sm:w-full  w-[80%]'>
            <HeroSlider/>

          </div>
      </div>
      <div>
        <Tag about={'Todays'} />
      </div>
      <div>
      <div className="flex gap-3 items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mx-4">Flash Sales</h2>
                <Timer countdown={300000} />
            </div>
      </div>
      <FlashSales />

<div className='flex items-center justify-center'>
<button className="mt-8 bg-red-500 text-white py-3 px-12 text-sm rounded-sm hover:bg-red-600">
                View All Products
            </button>
</div>
      <hr  className='m-3 my-24'/>
      <Tag about={'Categories'} />
      <div className="flex gap-3 items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mx-4">Browse By Category</h2>
                
            </div>


      <div>
        <div className='flex gap-5 justify-center items-center text-white flex-wrap'> 
          
        <span className='w-[200px] h-[150px] border-2 rounded-sm border-gray-400 text-black flex flex-col  justify-center items-center'>
            <p>Pic</p>
            <p>Camera</p>
          </span> 


          <span className='w-[200px] h-[150px] border-2 rounded-sm border-gray-400 text-black flex flex-col  justify-center items-center'>
            <p>Pic</p>
            <p>Camera</p>
          </span> 


          
          
          <span className='w-[200px] h-[150px]  bg-red-500 rounded-sm flex flex-col  justify-center items-center'>
            <p>Pic</p>
            <p>Camera</p>
          </span>
          
          <span className='w-[200px] h-[150px] border-2 rounded-sm border-gray-400 text-black flex flex-col  justify-center items-center'>
            <p>Pic</p>
            <p>Camera</p>
          </span>  


          <span className='w-[200px] h-[150px] border-2 rounded-sm border-gray-400 text-black flex flex-col  justify-center items-center'>
            <p>Pic</p>
            <p>Camera</p>
          </span> 

          <span className='w-[200px] h-[150px] border-2 rounded-sm border-gray-400 text-black flex flex-col  justify-center items-center'>
            <p>Pic</p>
            <p>Camera</p>
          </span> 


        </div>
      </div>

      <hr  className='m-3 my-24'/>


      <Tag about={'This Month'} />

      <div className="flex gap-3 items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mx-4">Best Selling Products</h2>
                <button className="mt-8 bg-red-500 text-white py-3 px-8 text-sm rounded-sm hover:bg-red-600">
                View All
            </button>
            </div>

            <FlashSales />

            <div className='my-24 mx-12 flex items-center justify-center'>
              <div className='w-full h-[450px] bg-black'>
                  <div className='flex flex-col gap-4 p-12'>
                    <p className='text-green-600'>Categories</p>
                    <h1 className='text-white lg:text-7xl md:text-5xl sm:text-4xl xxs:text-2xl xs:text-3xl'>Enhance Your <br/> Music Experience</h1>
                    <div className='flex  gap-4'>
                      <span className='flex w-12 h-12 rounded-full bg-white justify-center items-center'>
                      <p className='text-center text-[9px]' ><span className='font-bold text-sm'> 23 <br/></span>Hours</p>
                      </span>
                      <span className='flex w-12 h-12 rounded-full bg-white justify-center items-center'>
                      <p className='text-center text-[9px]' ><span className='font-bold text-sm'> 05 <br/></span>Days</p>
                      </span>
                      <span className='flex w-12 h-12 rounded-full bg-white justify-center items-center'>
                      <p className='text-center text-[9px]' ><span className='font-bold text-sm'> 59 <br/> </span>Minutes</p>
                      </span>
                      <span className='flex w-12 h-12 rounded-full bg-white justify-center items-center'>
                          <p className='text-center text-[9px]' ><span className='font-bold text-sm'> 35 <br/> </span>Seconds</p>
                      </span>
                      
                    </div>

                    <button className="w-32 h-14 mt-8 bg-green-500 text-white py-1 px-8 text-sm rounded-sm hover:bg-red-600">
                Buy now
            </button>
                    
                  </div>

              </div>
            </div>

            <Tag about={'Our Products'} />
      <div className="flex gap-3 items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mx-4">Explore Our Products</h2>
                
            </div>



      <FlashSales />
      <div className='flex items-center justify-center'>
<button className="mt-8 bg-red-500 text-white py-3 px-12 text-sm rounded-sm hover:bg-red-600">
                View All Products
            </button>
</div>
<span className='my-24'/>

<Tag about={'Featured'} />
      <div className="flex gap-3 items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mx-4">New Arrivals</h2>
                
            </div>

      {/* <div className='flex justify-center items-center gap-4'>
        <div className=' h-[500px] w-1/2 flex justify-center items-center gap-5'>
          <div className='w-[80%] h-full bg-black p-10 justify-end flex flex-col '>
            <p className='text-white text-2xl font-semibold'>Play Station 5</p>
            <p className='text-white'>Black and white version of the PS5 <br /> comming out on side.</p>
            <p className='text-lg text-white underline font-bold'>Shop Now</p>
          </div>
        </div>
        <div className=' h-[500px] w-1/2 '>
          <div className='w-[80%] h-1/2 bg-black p-10 justify-end flex flex-col'>
          <p className='text-white text-2xl font-semibold'>Play Station 5</p>
            <p className='text-white'>Black and white version of the PS5 <br /> comming out on side.</p>
            <p className='text-lg text-white underline font-bold'>Shop Now</p></div>

            <div className='flex w-[80%] gap-4'>

            <div className='w-[50%] h-1/2 bg-black p-10 justify-end flex flex-col'>
          <p className='text-white text-2xl font-semibold'>Play Station 5</p>
            <p className='text-white'>Black and white version of the PS5 <br /> comming out on side.</p>
            <p className='text-lg text-white underline font-bold'>Shop Now</p></div> 
            <div className='w-[50%] h-1/2 bg-black p-10 justify-end flex flex-col'>
          <p className='text-white text-2xl font-semibold'>Play Station 5</p>
            <p className='text-white'>Black and white version of the PS5 <br /> comming out on side.</p>
            <p className='text-lg text-white underline font-bold'>Shop Now</p></div> 

            </div>
            
        </div>

        
      </div> */}

        {/* <ProductGrid/> */}



      <span className='my-24'></span>


    </div>
  )
}

export default HomePage

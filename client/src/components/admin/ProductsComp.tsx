import React, { useEffect, useState } from 'react'
import ProductForm from './custom/ProductForm'
import { apiClient } from '@/lib/api-client'
import ProductEditionForm from './custom/ProductEditionForm'
import { DELETE_PRODUCT_ROUTE, GET_PRODUCTS_ROUTE } from '@/utils/constants'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import  {useStore} from '@/store/store' 
import CourseFormModal from './custom/CourseForm'
import CourseForm from './custom/CourseForm'
const ProductsComp = () => {

  const [ products, setProducts ] = useState<any>([])
 
  const setEditeProductId = useStore((state : any)=> state.setEditeProductId)
  const openProductEditForm = useStore((state : any)=> state.openProductEditForm)
  const openEditeForm = useStore((state : any)=> state.openEditeForm)
  const openForm = useStore((state : any)=> state.openForm)

  useEffect(()=>{
  console.log('Open edit form:', openEditeForm)
  console.log('Open  form:', openForm )
  },[openEditeForm])
  

  const getProducts = async () => {
    try{                                    
      const response = await apiClient.get(GET_PRODUCTS_ROUTE)
      console.log('Products:', response.data)
      if(response.status === 200){
        toast.success('Products fetched successfully')
        setProducts(response.data)
        console.log('Products:', products)
      }
      else{
        toast.error('Failed to fetch products')
      }
   }catch(e){
     console.error('Error fetching products:', e)
   }
  }
   
  useEffect(() => {
    getProducts()
  }, [])

  const deleteProduct = async (id : string) => {
    try{
        const response = await apiClient.delete(`${DELETE_PRODUCT_ROUTE}/${id}`)
        console.log('Product deleted:', response.data)
        if(response.status === 200){
          toast.success('Product deleted successfully')
          getProducts()
        }else{
          toast.error('Failed to delete product')
        }
    }catch(e){
      console.error('Error deleting product:', e)
    }
  }

  const editionFormRender = (id : string) => {
    setEditeProductId(id)
    openProductEditForm(true)

  }



  return (
    <>
      <ProductForm />
      <ProductEditionForm />
      <CourseForm  />
      <div className='max-w-[100vw] flex justify-start gap-4 items-start flex-wrap px-2 py-4' >
        {
          products.map((product : any , index : number)=>(
                <>
                 <div className='w-[360px] border border-red-900 bg-white h-[400px] flex flex-col justify-start  items-start px-2 p-y-4 '  >
                      <div className='w-full h-[40%] flex justify-center items-center' >
                        <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
                      </div>
                      <div className='w-full flex flex-col justify-start items-start gap-2 ' >
                        <h1 className='text-lg font-bold' >{product.name}</h1>
                        <p className='text-sm' >{product.description}</p>
                        <p className='text-sm' >{product.price}</p>
                        <p className='text-sm' >{product.categories.map((category : any )=>{category})}</p>
                        <div className='w-full flex justify-between items-center flex-wrap' >

                        <Button className='active:scale-95' onClick={()=> deleteProduct(product._id)}  >Delete</Button>
                        <Button className='active:scale-95' onClick={()=> {
                        editionFormRender(product._id)
                          } }  >Edit</Button>
                        </div>
                       </div>
                 </div>
                </>
          ))
        }
      </div>
    </>
  )
}

export default ProductsComp

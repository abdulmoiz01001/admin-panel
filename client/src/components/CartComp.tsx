import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ProductCartTable from './customs/ProductCartTabe'
import CartTableSummary from './customs/CartTableSummary'
const CartComp = () => {

    const products = [
        {
            id: 1,
            name: 'Wireless Mouse',
            price: 29.99,
            image: 'https://via.placeholder.com/100x100?text=Mouse',
        },
        {
            id: 2,
            name: 'Mechanical Keyboard',
            price: 79.99,
            image: 'https://via.placeholder.com/100x100?text=Keyboard',
        },
        {
            id: 3,
            name: 'HD Monitor',
            price: 149.99,
            image: 'https://via.placeholder.com/100x100?text=Monitor',
        },
        {
            id: 4,
            name: 'USB-C Hub',
            price: 24.99,
            image: 'https://via.placeholder.com/100x100?text=USB-C+Hub',
        },
        {
            id: 5,
            name: 'Bluetooth Speaker',
            price: 49.99,
            image: 'https://via.placeholder.com/100x100?text=Speaker',
        },
        {
            id: 6,
            name: 'Webcam',
            price: 39.99,
            image: 'https://via.placeholder.com/100x100?text=Webcam',
        },
        {
            id: 7,
            name: 'Gaming Headset',
            price: 69.99,
            image: 'https://via.placeholder.com/100x100?text=Headset',
        },
        {
            id: 8,
            name: 'Laptop Stand',
            price: 19.99,
            image: 'https://via.placeholder.com/100x100?text=Stand',
        },
        {
            id: 9,
            name: 'External Hard Drive',
            price: 89.99,
            image: 'https://via.placeholder.com/100x100?text=Hard+Drive',
        },
        {
            id: 10,
            name: 'Wireless Charger',
            price: 29.99,
            image: 'https://via.placeholder.com/100x100?text=Charger',
        },
    ];


    const subtotal = 249.99;
    const total = 249.99;


    return (
        <>
            <div className='max-w-[100vw] flex flex-col justify-center items-center gap-4 min-h-[100vh]  ' >

                <div className='w-[85%]   flex justify-start items-center ' >
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
                        </BreadcrumbItem>


                    </Breadcrumb>
                </div>
                <div className='w-[80%]  gap-8  flex flex-col justify-center items-center ' >
                    <ProductCartTable products={products} />
                    <div className='w-full  flex  justify-between items-center' >
                        <button className='border-2 w-[223px] h-[56px] text-lg' >
                            Return To Shop
                        </button> <button className='border-2 w-[223px] h-[56px] text-lg' >
                            Update Cart
                        </button>
                    </div>
                    <div className='w-full flex  justify-between items-start' >
                        <div className='w-[50%] flex justify-start items-center gap-4 ' >
                            <Input type='text' placeholder='Coupon Code' className='w-[300px]' />
                            <Button className='bg-red-500 text-white hover:bg-red-500 rounded-none w-[211px]'>Apply Coupon </Button>
                        </div>
                        <div className='w-[50%] flex  justify-end items-start' >
                            <div className='w-[470px] border-2 gap-4 flex flex-col justify-start items-end ' >
                                <h1>Cart</h1>
                                <CartTableSummary subtotal={subtotal} total={total} />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartComp

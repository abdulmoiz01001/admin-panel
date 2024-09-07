import React from 'react';
import {Button} from '@/components/ui/button';

const CartTableSummary = ({ subtotal , total , shipping = 'free' }: { subtotal: number; shipping?: string; total: number }) => {
  return (
    <table className="min-w-full bg-white mt-4">
      <tbody className='flex mb-4 flex-col gap-4' >
        <tr>
          <td className="py-2 w-full px-4 border-b text-left font-semibold">Subtotal</td>
          <td className="py-2 w-full px-4 border-b text-right">{`$${subtotal.toFixed(2)}`}</td>
        </tr>
        <tr>
          <td className="py-2 w-full px-4 border-b text-left font-semibold">Shipping</td>
          <td className="py-2 w-full px-4 border-b text-right">{shipping}</td>
        </tr>
        <tr>
          <td className="py-2 w-full px-4 text-left font-semibold">Total</td>
          <td className="py-2 w-full px-4 text-right">{`$${total.toFixed(2)}`}</td>
        </tr>
      </tbody>
      <div className='w-full flex justify-center items-center' >

      <Button className='bg-red-500 w-[260px] h-[56px] text-white hover:bg-red-500 rounded-none '>Proceed to Checkout </Button> 
      </div>
                 
    </table>
  );
};

export default CartTableSummary;

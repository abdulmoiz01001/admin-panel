import React from 'react';

interface Product {
  name: string;
  price: number;
  image: string;
}

interface CheckoutOrderSummaryTableProps {
  products: Product[];
  subtotal: number;
  shipping?: string;
  total: number;
    isSubmitting: boolean;
}

const CheckoutOrderSummaryTable: React.FC<CheckoutOrderSummaryTableProps> = ({ products, isSubmitting , subtotal, shipping = 'Free', total }) => {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded">
      <table className="min-w-full bg-white">
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 text-left flex items-center">
                <img src={product.image} alt={product.name} className="w-10 h-10 object-cover mr-4" />
                {product.name}
              </td>
              <td className="py-2 px-4 text-right">{`$${product.price.toFixed(2)}`}</td>
            </tr>
          ))}
          <tr>
            <td className="py-2 px-4 border-t text-left font-semibold">Subtotal:</td>
            <td className="py-2 px-4 border-t text-right">{`$${subtotal.toFixed(2)}`}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-left font-semibold">Shipping:</td>
            <td className="py-2 px-4 text-right">{shipping}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-t text-left font-semibold">Total:</td>
            <td className="py-2 px-4 border-t text-right">{`$${total.toFixed(2)}`}</td>
          </tr>
        </tbody>
      </table>

      {/* Payment Method */}
      <div className="mt-6">
        <p className="font-semibold text-left">Payment Method:</p>
        <div className="mt-2">
          <label className="flex items-center mb-2">
            <input type="radio" name="paymentMethod" className="mr-2" />
            Bank
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="paymentMethod" className="mr-2" />
            Cash on delivery
          </label>
        </div>
      </div>

      {/* Coupon Code */}
      <div className="mt-6">
        <p className="font-semibold text-left">Coupon Code:</p>
        <div className="mt-2 flex">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="border border-gray-300 p-2 flex-grow rounded-l"
          />
          <button className="bg-blue-500 text-white px-4 rounded-r">Apply Coupon</button>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="mt-6">
        <button
        disabled={isSubmitting}
        className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrderSummaryTable;

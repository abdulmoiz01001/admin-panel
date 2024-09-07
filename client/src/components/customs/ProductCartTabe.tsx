import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductCartTableProps {
  products: Product[];
}

const ProductCartTable: React.FC<ProductCartTableProps> = ({ products }) => {
  const [quantities, setQuantities] = useState<number[]>(products.map(() => 1));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 5;

  const handleIncrement = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  const handleClick = (pageNumber: number) => setCurrentPage(pageNumber);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className='w-full' >
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Product</th>
            <th className="py-2 px-4 border-b text-right">Price</th>
            <th className="py-2 px-4 border-b text-center">Quantity</th>
            <th className="py-2 px-4 border-b text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b flex items-center">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                <span>{product.name}</span>
              </td>
              <td className="py-2 px-4 border-b text-right">{`$${product.price.toFixed(2)}`}</td>
              <td className="py-2 px-4 border-b text-center">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleDecrement(indexOfFirstProduct + index)}
                    className="px-2 py-1 bg-gray-300 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">{quantities[indexOfFirstProduct + index]}</span>
                  <button
                    onClick={() => handleIncrement(indexOfFirstProduct + index)}
                    className="px-2 py-1 bg-gray-300 rounded-r"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-2 px-4 border-b text-right">
                {`$${(product.price * quantities[indexOfFirstProduct + index]).toFixed(2)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCartTable;

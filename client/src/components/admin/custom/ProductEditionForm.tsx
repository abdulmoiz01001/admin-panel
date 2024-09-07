import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import { useStore } from '@/store/store';
import { CREATE_PRODUCT_ROUTE, GET_PRODUCT_BY_ID_ROUTE, GET_PRODUCTS_ROUTE, UPDATE_PRODUCT_ROUTE } from '@/utils/constants';
import { apiClient } from '@/lib/api-client';
import { toast } from 'sonner';

interface ProductFormProps {
  productData?: any; // replace 'any' with your product type if available
}

const ProductEditionForm: React.FC<ProductFormProps> = ({ productData }) => {
  const initialValues = {
    media: productData?.media || '',
    name: productData?.name || '',
    description: productData?.description || '',
    price: productData?.price || '',
    discount: productData?.discount || '',
    stocks: productData?.stocks || 'in_stock',
    categories: productData?.categories || '',
  };

  const fetchProducts = async (id : any) => {
    try{
       const response = await apiClient.get(`${GET_PRODUCT_BY_ID_ROUTE}/${id}`)
       console.log('Products:', response.data)
    }catch(e){
      console.error('Error fetching products:', e)
    }
  }
  const id = useStore((state : any)=> state.editeProductId)
  
  useEffect(()=>{
   fetchProducts(id)
  },[id])

  const validationSchema = Yup.object().shape({
    media: Yup.mixed().required('Product Image is required'),
    name: Yup.string().required('Product Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
    discount: Yup.number(),
    stocks: Yup.string().required('Stock Status is required'),
    categories: Yup.string().required('Category is required'),
  });

  const handleSubmit = async (values: any, resetForm: () => void) => {
    try {
      console.log('Product Data:', values);

      const route = productData
        ? `${UPDATE_PRODUCT_ROUTE}/${productData.id}`
        : CREATE_PRODUCT_ROUTE;

      const method = productData ? 'put' : 'post';

      const response = await apiClient[method](route, values);

      if (response.status === productData ? 200 : 201) {
        toast.success(
          productData ? 'Product updated successfully' : 'Product added successfully'
        );
      } else {
        toast.error(productData ? 'Failed to update product' : 'Failed to add product');
      }
    } catch (e) {
      console.error('Error processing product:', e);
    }
    resetForm();
    closeProductForm(false);
  };

  const [productImage, setProductImage] = useState<string | null>(null);

  useEffect(() => {
    if (productData?.media) {
      setProductImage(productData.media);
    }
  }, [productData]);

  const uploadProductImage = async (e: any, setFieldValue: any) => {
    const file = e.target.files[0];
    setProductImage(file);
    setFieldValue('media', file);
  };

  const openForm = useStore((state: any) => state.openForm);
  const openEditForm = useStore((state: any) => state.openEditeForm);
  const closeProductForm = useStore((state: any) => state.closeProductForm);
  const closeProductEditForm = useStore((state: any) => state.closeProductEditForm);

  useEffect(() => {
    console.log('Open edit form: in edition', openEditForm);
    console.log('Open form: in edition', openForm);
  }, [openForm , openEditForm]);

  return (
    <div>
      <Modal
        isOpen={openForm || openEditForm}
        onClose={() => (productData ? closeProductEditForm(false) : closeProductForm(false))}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values: any, { resetForm }: any) => {
            await handleSubmit(values, resetForm);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="space-y-4 h-full flex flex-col">
              <h2 className="text-lg font-bold mb-4">
                {productData ? 'Edit Product' : 'Add New Product'}
              </h2>

              <div className="overflow-y-auto h-[400px] p-2">
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Image
                  </label>
                  <img
                    src={
                      productImage
                        ? URL.createObjectURL(new Blob([productImage]))
                        : 'https://via.placeholder.com/150/000000/FFFFFF/?text=Product'
                    }
                    alt="Product"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(e: any) => uploadProductImage(e, setFieldValue)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter product name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <Field
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter product description"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <Field
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Enter price"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="discount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Discount
                  </label>
                  <Field
                    id="discount"
                    name="discount"
                    type="number"
                    placeholder="Enter discount"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="discount"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="stocks"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Stock Status
                  </label>
                  <Field
                    as="select"
                    id="stocks"
                    name="stocks"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="in_stock">In Stock</option>
                    <option value="out_stock">Out of Stock</option>
                  </Field>
                  <ErrorMessage
                    name="stocks"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="categories"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <Field
                    id="categories"
                    name="categories"
                    type="text"
                    placeholder="Enter category"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="categories"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-green-500 active:scale-95 text-white rounded hover:bg-green-600"
                >
                  {productData ? 'Update Product' : 'Save Product'}
                </button>
                <button
                  type="button"
                  onClick={() =>
                   closeProductEditForm(false)
                      
                  }
                  className="px-4 py-2 bg-red-500 active:scale-95 text-white rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default ProductEditionForm;

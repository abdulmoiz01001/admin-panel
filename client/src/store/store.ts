import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { authSlice } from './slices/authSlice';
import { userSlice } from './slices/userSlice';
import { productSlice } from './slices/productSlice';
import { productFormSlice } from './slices/adminSlices/productFormSlice';
import { courseFormSlice } from './slices/adminSlices/courseFormSlice';


export const useStore = create(
  devtools((set, get) => ({
    ...authSlice(set, get),
    ...userSlice(set, get),
    ...productSlice(set, get),
    ...productFormSlice(set),
    ...courseFormSlice(set),
  }))
);  
export default useStore;

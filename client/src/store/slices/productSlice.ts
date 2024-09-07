export const productSlice = (set : any , get : any) => ({
    products: [],
    selectedProduct: null,
  
    fetchProducts: async () => {
      try {
        const response = await fetch('/api/products');
        const products = await response.json();
        set({ products });
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    },
  
    selectProduct: (productId: any) =>
      set((state : any) => ({
        selectedProduct: state.products.find((p : any) => p.id === productId),
      })),
      getSelectedProduct: () => get().selectedProduct,

  });
  
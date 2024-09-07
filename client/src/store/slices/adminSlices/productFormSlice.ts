export const productFormSlice = (set : any) => ({
   openForm : false,
   openEditeForm: false,
   editeProductId: '',

    openProductForm: () => set({ openForm: true }),
    closeProductForm: () => set({ openForm: false }),

    openProductEditForm: () => set({ openEditeForm: true }),
    closeProductEditForm: () => set({ openEditeForm: false }),

    setEditeProductId: (id : string) => set({ editeProductId: id }),
    getEditeProductId: () => set({ editeProductId: '' }),
    
})
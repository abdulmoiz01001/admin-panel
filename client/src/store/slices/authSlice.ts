export const authSlice = (set : any, get : any) => ({
    user: null,
    isAuthenticated: false,
  
    login: (userData : any) => set(() => ({ user: userData, isAuthenticated: true })),
    logout: () => set(() => ({ user: null, isAuthenticated: false })),
  
    // Example of a derived state using selectors
    isUserAdmin: () => get().user?.role === 'admin',
  });
  
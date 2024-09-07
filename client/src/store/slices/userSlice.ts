export const userSlice = (set : any , get : any) => ({
    profile: {},
    loading: false,
  
    fetchUserProfile: async (userId : any) => {
      set({ loading: true });
      try {
        const response = await fetch(`/api/users/${userId}`);
        const profile = await response.json();
        set({ profile, loading: false });
      } catch (error) {
        console.error('Failed to fetch user profile', error);
        set({ loading: false });
      }
    },
    getProfile: () => get().profile,
  });
  
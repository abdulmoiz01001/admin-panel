export const courseFormSlice = (set : any) => ({
    openCForm: false,
    openEditeCourseForm: false,
    editeCourseId: '',


    openCourseForm: () => set({ openCForm: true }),
    closeCourseForm: () => set({ openCForm: false }),

    openCourseEditForm: () => set({ openEditeCourseForm: true }),
    closeCourseEditForm: () => set({ openEditeCourseForm: false }),

    setEditeCourseId: (id : string) => set({ editeCourseId: id }),
    getEditeCourseId: () => set({ editeCourseId: '' }),
});
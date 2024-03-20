import { create } from 'zustand';



export const useStore = create((set) => ({
    selectedCategory: null,
    selectedLevel: null,
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    setSelectedLevel: (level) => set({ selectedLevel: level }),
  }));
import {create} from 'zustand';

export const useStoreResults = create((set) => ({
  //selectedCategory: null,
  correctAnswers: 0,
  incorrectAnswers: 0,
  setCorrectAnswers: (answers) => set({correctAnswers: answers}),
  setIncorrectAnswers: (incorrect) => set({incorrectAnswers: incorrect})


}));



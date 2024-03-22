import { create } from "zustand";

const useStoreResults = create((set) => ({
  //selectedCategory: null,
  correctAnswers: 0,
  incorrectAnswers: 0,
  setCorrectAnswers: (answers) => set({ correctAnswers: answers }),
  setIncorrectAnswers: (incorrect) => set({ incorrectAnswers: incorrect }),
}));

const useTimerStore = create((set) => ({
  timeElapsed: 0,
  startTimer: () => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      set({ timeElapsed: elapsedTime });
    }, 1000); // Actualiza el estado cada segundo
    return interval; // Devuelve el ID del intervalo para poder detenerlo más tarde
  },
  stopTimer: (interval) => clearInterval(interval), // Detiene el cronómetro
}));

export { useStoreResults, useTimerStore };

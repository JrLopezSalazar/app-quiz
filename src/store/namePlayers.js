import {create} from 'zustand'
import { persist } from "zustand/middleware"

const INITIAL_STATE ={
    namePlayer: ""
}

export const userInfo = create(
    persist(
        (set) => ({
          user: INITIAL_STATE,
          login: (name) => {
            set({ user: name });
          },
          logout: () => {
            set({user: INITIAL_STATE})
            localStorage.removeItem("userInfo")
          }
        }),
        {
          name: "userInfo",
        }
      ) 
)
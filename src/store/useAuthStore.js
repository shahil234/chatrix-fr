import { create } from "zustand";

export const useAuthStore = create((set) => ({
    isLogedIn: false,
    userData: null,
    setUserData: (data) => set(state => ({
        ...state,
        userData: data,
        isLogedIn: !!data
    })),
    setLoginStatus: (status) => set(state => ({
        ...state,
        isLogedIn: status
    })),
    clearAuthStore: () => set({
        isLogedIn: false,
        userData: null
    })
}))
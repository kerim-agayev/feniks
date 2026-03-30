import { create } from 'zustand'

interface UIStore {
  isNavOpen: boolean
  isLoading: boolean
  setNavOpen: (open: boolean) => void
  setLoading: (loading: boolean) => void
}

export const useUIStore = create<UIStore>((set) => ({
  isNavOpen: false,
  isLoading: true,
  setNavOpen: (open) => set({ isNavOpen: open }),
  setLoading: (loading) => set({ isLoading: loading }),
}))

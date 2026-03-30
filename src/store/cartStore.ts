import { create } from 'zustand'

interface CartItem {
  productId: string
  color: string
  size: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (productId: string, color: string, size: string) => void
  toggleCart: () => void
  totalItems: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.productId === item.productId && i.color === item.color && i.size === item.size
      )
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === item.productId && i.color === item.color && i.size === item.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return { items: [...state.items, { ...item, quantity: 1 }] }
    }),
  removeItem: (productId, color, size) =>
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.productId === productId && i.color === color && i.size === size)
      ),
    })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  totalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
}))

import { create } from 'zustand'
import { ICartState } from './types/ICartState'
import { calculateCartTotals } from './utils/calculateCartTotals'
import { ICartItem } from './types/ICartItem'

export const useCartStore = create<ICartState>((set) => ({
  products: [],
  cartTotals: {
    total: 0,
    subtotal: 0,
    shipping: 0,
    tax: 0,
    totalItems: 0,
    totalUniqueProducts: 0,
  },
  cartInfo: {
    cargoMethod: {},
    paymentMethod: {},
  },
  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id)

      let newProducts
      if (existingProduct) {
        // Ürün zaten sepetteyse, miktarını artır
        newProducts = state.products.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p))
      } else {
        // Ürün sepette değilse, yeni ürünü ekle
        newProducts = [...state.products, { ...product, quantity }]
      }

      const newCartTotals = calculateCartTotals(newProducts)
      return { products: newProducts, cartTotals: newCartTotals }
    }),
  removeFromCart: (product) =>
    set((state) => {
      const newProducts = state.products.filter((p) => p.id !== product.id)
      const newCartTotals = calculateCartTotals(newProducts)
      return { products: newProducts, cartTotals: newCartTotals }
    }),
  updateQuantity: (product, quantity) =>
    set((state) => {
      const newProducts = state.products.map((p) => (p.id === product.id ? { ...p, quantity } : p))
      const newCartTotals = calculateCartTotals(newProducts)
      return { products: newProducts, cartTotals: newCartTotals }
    }),
  increaseQuantity: (product) =>
    set((state) => {
      const newProducts = state.products.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
      const newCartTotals = calculateCartTotals(newProducts)
      return { products: newProducts, cartTotals: newCartTotals }
    }),
  decreaseQuantity: (product) =>
    set((state) => {
      const newProducts = state.products.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p))
      const newCartTotals = calculateCartTotals(newProducts)
      return { products: newProducts, cartTotals: newCartTotals }
    }),
  clearCart: () =>
    set(() => {
      const newProducts: ICartItem[] = []
      const newCartTotals = calculateCartTotals(newProducts)
      return { products: newProducts, cartTotals: newCartTotals }
    }),
  sortCart: (sortBy) =>
    set((state) => {
      const newProducts = [...state.products]
      if (sortBy === 'price') {
        newProducts.sort((a, b) => a.price - b.price)
      } else if (sortBy === 'name') {
        newProducts.sort((a, b) => a.name.localeCompare(b.name))
      }
      return { products: newProducts }
    }),
  selectCargoMethod: (cargoMethod) =>
    set((state) => {
      return { cartInfo: { ...state.cartInfo, cargoMethod } }
    }),
  selectPaymentMethod: (paymentMethod) =>
    set((state) => {
      return { cartInfo: { ...state.cartInfo, paymentMethod } }
    }),
}))

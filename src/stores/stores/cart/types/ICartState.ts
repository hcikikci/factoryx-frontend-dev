import { ICartItem } from './ICartItem'
import { ICargoMethod } from '../../../../types/ICargoMethod'
import { IPaymentMethod } from '../../../../types/IPaymentMethod'
import { IProduct } from '../../../../types/IProduct'

export interface ICartState {
  products: ICartItem[] | []
  cartTotals: {
    total: number
    subtotal: number
    shipping: number
    tax: number
    totalItems: number
    totalUniqueProducts: number
  }
  cartInfo: {
    cargoMethod: ICargoMethod | Record<string, never>
    paymentMethod: IPaymentMethod | Record<string, never>
  }
  addToCart: (product: IProduct, quantity?: number) => void
  removeFromCart: (product: IProduct) => void
  updateQuantity: (product: IProduct, quantity: number) => void
  increaseQuantity: (product: IProduct) => void
  decreaseQuantity: (product: IProduct) => void
  clearCart: () => void
  sortCart: (sortBy: string) => void
  selectCargoMethod: (cargoMethod: ICargoMethod) => void
  selectPaymentMethod: (paymentMethod: IPaymentMethod) => void
}

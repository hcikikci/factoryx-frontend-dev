import { ICartItem } from '../types/ICartItem'

export function calculateCartTotals(products: ICartItem[]) {
  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0)
  const totalItems = products.reduce((total, product) => total + product.quantity, 0)
  const totalUniqueProducts = products.length

  const total = subtotal //TODO: Cargo and tax calculation can be added.
  const shipping = 0 //TODO: Cargo calculation can be added.
  const tax = 0 //TODO: Tax calculation can be added.

  return { subtotal, totalItems, totalUniqueProducts, total, shipping, tax }
}

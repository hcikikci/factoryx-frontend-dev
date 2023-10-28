import { IProduct } from '../../../../types/IProduct'

export type ICartItem = {
  quantity: number
} & IProduct

import React from 'react'
import { IProduct } from '../types/IProduct'
import { useCartStore } from '../stores/stores/cart/useCartStore'

type AddToCartProps = {
  product: IProduct
  quantity: number
  children: React.ReactElement
}

const AddToCart = ({ product, quantity, children }: AddToCartProps) => {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return React.cloneElement(children, { onClick: handleAddToCart })
}

export default AddToCart

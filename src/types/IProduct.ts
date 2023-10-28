export type IProduct = {
  id: number
  name: string
  price: number
  sku: string
  description: string
  brand: {
    id: number
    name: string
    letter: string
  }
  size: {
    id: number
    name: string
  }
  color: {
    id: number
    name: string
  }
  ean: string
  stock_quantity: number
  images: string[]
  categories: {
    id: number
    name: string
  }[]

  related_products?: IRelatedProduct[]
}

export type IRelatedProduct = {
  id: number
  name: string
  price: number
  image: string
}

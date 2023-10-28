import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { AddToCart } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <AddToCart product={exampleProduct} quantity={1}>
        <button style={{ backgroundColor: 'blue', color: 'white' }}>Sepete Ekle</button>
      </AddToCart>,
    )
  })
})

const exampleProduct = {
  id: 1,
  name: 'Ürün 1',
  price: 100,
  sku: 'U100',
  description: 'Bu bir ürün açıklamasıdır.',
  brand: { id: 1, name: 'Marka 1', letter: 'M' },
  size: { id: 1, name: 'Büyük' },
  color: { id: 1, name: 'Kırmızı' },
  ean: '1234567890123',
  stock_quantity: 10,
  images: ['image1.jpg', 'image2.jpg'],
  categories: [
    { id: 1, name: 'Kategori 1' },
    { id: 2, name: 'Kategori 2' },
  ],
  related_products: [
    { id: 2, name: 'İlgili Ürün 1', price: 150, image: 'related1.jpg' },
    { id: 3, name: 'İlgili Ürün 2', price: 200, image: 'related2.jpg' },
  ],
}

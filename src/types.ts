export interface Product {
  id: number
  name: string
  price: number
  description: string
  inStock: boolean
}

export interface CartItem extends Product {
  cartId: number
  addedAt: string
}

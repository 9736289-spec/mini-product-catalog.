
<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from './components/ProductCard.vue'
import Cart from './components/Cart.vue'
import type { Product, CartItem } from './types'

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Навушники',
    price: 850,
    description: 'Бездротові навушники',
    inStock: true
  },
  {
    id: 2,
    name: 'Мишка',
    price: 450,
    description: 'Комп’ютерна мишка',
    inStock: true
  },
  {
    id: 3,
    name: 'Клавіатура',
    price: 1200,
    description: 'Механічна клавіатура',
    inStock: false
  },
  {
    id: 4,
    name: 'Килимок',
    price: 200,
    description: 'Килимок для мишки',
    inStock: true
  }
])

const cart = ref<CartItem[]>([])

const availableCount = computed(() => {
  return products.value.filter(product => product.inStock).length
})

function addToCart(product: Product) {
  const newItem: CartItem = {
    ...product,
    cartId: Date.now() + Math.random(),
    addedAt: new Date().toLocaleString('uk-UA', {
      hour12: false
    })
  }

  cart.value.push(newItem)
}

function removeFromCart(cartId: number) {
  cart.value = cart.value.filter(item => item.cartId !== cartId)
}
</script>


<template>
  <h1>Каталог товарів</h1>

  <p class="count">
    Товарів у наявності: {{ availableCount }}
  </p>

  <div class="products">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @addToCart="addToCart"
    />
  </div>

  <Cart
    :items="cart"
    @removeItem="removeFromCart"
  />
</template>

<style scoped>
.count {
  text-align: center;
  margin-bottom: 25px;
}

.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

@media (max-width: 600px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>

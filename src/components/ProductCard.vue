<script setup lang="ts">
import type { Product } from '../types'

defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  addToCart: [product: Product]
}>()
</script>

<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>

    <p>{{ product.description }}</p>
    <p>Ціна: {{ product.price }} грн</p>

    <p v-if="product.inStock">Є в наявності</p>
    <p v-else>Немає в наявності</p>

    <button :disabled="!product.inStock" @click="emit('addToCart', product)">
     Додати до кошика</button>
  </div>
</template>


<style scoped>
.product-card {
  background-color: #1b1b1b;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
  color: #eeeeee;
}

.product-card h3 {
  font-size: 21px;
  margin-top: 5px;
  color: #ffffff;
}

.product-card p {
  color: #bbbbbb;
  font-size: 14px;
}

.product-card button {
  background-color: #d8b27c;
  color: #161616;
  border: none;
  border-radius: 6px;
  padding: 11px 16px;
  font-weight: bold;
  cursor: pointer;
}

.product-card button:hover:not(:disabled) {
  background-color: #eacb9d;
}

.product-card button:disabled {
  background-color: #555555;
  color: #aaaaaa;
  cursor: not-allowed;
}
</style>

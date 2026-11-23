<script setup lang="ts">
import { computed } from 'vue'
import type { CartItem } from '../types'

const props = defineProps<{
  items: CartItem[]
}>()

const emit = defineEmits<{
  removeItem: [cartId: number]
}>()

const totalPrice = computed(() => {
  return props.items.reduce((sum, item) => sum + item.price, 0)
})
</script>

<template>
  <div class="cart">
    <h2>Кошик</h2>
    <p v-if="items.length === 0">Кошик порожній</p>

    <div v-for="item in items" :key="item.cartId" class="cart-item">
      <p>{{ item.name }} — {{ item.price }} грн</p>
      <p>Додано: {{ item.addedAt }}</p>
      <button @click="emit('removeItem', item.cartId)">
        Видалити
      </button>
    </div>

    <p>Кількість товарів: {{ items.length }}</p>
    <p>Загальна сума: {{ totalPrice }} грн</p>
  </div>
</template>


<style scoped>
.cart {
  background-color: #1b1b1b;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 25px;
  margin-top: 30px;
  color: #eeeeee;
}

.cart h2 {
  color: #d8b27c;
  margin-top: 0;
  margin-bottom: 20px;
}

.cart-item {
  border-bottom: 1px solid #444;
  padding: 12px 0;
}

.cart-item p {
  color: #cccccc;
  margin: 8px 0;
}

.cart-item button {
  background-color: #a64b4b;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}

.cart-item button:hover {
  background-color: #c45c5c;
}

.cart > p {
  color: #d8b27c;
  font-size: 16px;
}
</style>

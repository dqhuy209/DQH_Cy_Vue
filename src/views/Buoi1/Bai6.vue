<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, reactive } from 'vue'

// Tạo một ứng dụng Vue.js với một danh sách sản phẩm, mỗi sản phẩm có giá và số lượng.
//  Sử dụng computed để tính tổng giá trị của tất cả các sản phẩm trong giỏ hàng.

const products = reactive([
  { id: 1, name: 'Product 1', price: 0, quantity: 0 },
  { id: 2, name: 'Product 2', price: 0, quantity: 0 },
  { id: 3, name: 'Product 3', price: 0, quantity: 0 },
])
const totalValue = computed(() => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  )
})
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>Sản phẩm</th>
        <th>Giá</th>
        <th>Số lượng</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>
          <input type="number" v-model="product.price" />
        </td>
        <td>
          <input type="number" v-model="product.quantity" />
        </td>
      </tr>
    </tbody>
  </table>
  <div>
    <th style="width: 92px">Tổng</th>
    <td style="width: 20px">{{ totalValue }}</td>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fafafa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

th,
td {
  padding: 12px 16px;
  text-align: left;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
}

thead th {
  background-color: #4caf50;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

input[type='number'] {
  width: 100%;
  padding: 6px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

div {
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  text-align: right;
}

th {
  text-align: left;
}
</style>

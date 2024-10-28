<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

// Tạo một ứng dụng Vue.js với một input cho phép
// người dùng nhập vào kích thước chữ. Sử dụng v-bind
//  để cập nhật kích thước chữ của một đoạn văn bản dựa
//   trên giá trị người dùng nhập vào.
const font = ref(16)
</script>
<template>
  <div>
    <p>Kích thước chữ</p>
    <input v-model="font" type="text" />
    <p v-bind:style="{ fontSize: font + 'px' }">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corporis,
      quisquam autem a quas ducimus at nisi repellendus reprehenderit atque eos
      laudantium consectetur officiis optio suscipit, molestias sint eaque! Qui!
    </p>
  </div>
</template>

<style scoped>
div {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
}

p:first-of-type {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

input {
  padding: 8px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #4caf50;
}

p:last-of-type {
  line-height: 1.6;
  color: #333;
}
</style>

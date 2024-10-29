<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, ref } from 'vue'

const length = ref(0)
const area = computed(() => {
  return length.value * length.value
})
</script>
<template>
  <!-- Tạo một ứng dụng Vue.js với một input để người dùng nhập vào chiều dài cạnh của một hình vuông. Sử dụng thuộc tính computed để tính và hiển thị diện tích của hình vuông. -->
  <div id="app">
    <p>Nhập cạnh hình vuông</p>
    <input v-model="length" type="text" />
    <p>Diện tích hình vuông là {{ area }}</p>
  </div>
</template>
<style scoped>
/* Container chính */
#app {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

p:first-of-type {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
  text-align: center;
}

input:focus {
  border-color: #4caf50;
}

p:last-of-type {
  font-size: 18px;
  font-weight: 600;
  color: #4caf50;
  margin-top: 15px;
}
</style>

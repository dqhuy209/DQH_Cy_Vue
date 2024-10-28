<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// Tạo một ứng dụng Vue.js với hai input, cho phép người dùng nhập vào hai số.
//  Sử dụng watch để lắng nghe thay đổi ở mỗi input và tính tổng, hiệu, tích,
//   thương của hai số, sau đó hiển thị kết quả trong một thẻ p.

import { ref, watch } from 'vue'

const num1 = ref()
const num2 = ref()

watch(
  [num1, num2],
  () => {
    const sum = Number(num1.value) + Number(num2.value)
    const diff = Number(num1.value) - Number(num2.value)
    const multiplication = num1.value * num2.value
    const division = num1.value / num2.value
    if (!isNaN(num1.value) && !isNaN(num2.value)) {
      document.getElementById('result').innerText = `
    Tổng: ${sum},
    Hiệu: ${diff},
    Tích: ${multiplication},
    Thương: ${division},`
    }
  },
  { deep: true },
)
</script>
<template>
  <div>
    <p>Nhập số thứ nhất</p>
    <input v-model="num1" />
    <p>Nhập số thứ hai</p>
    <input v-model="num2" />
    <p id="result"></p>
  </div>
</template>

<style scoped>
div {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #4caf50;
}

#result {
  margin-top: 20px;
  font-size: 16px;
  color: #444;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #4caf50;
  white-space: pre-line;
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// Tạo một ứng dụng Vue.js với một input kiểm tra (checkbox).
//  Nếu checkbox được chọn, đoạn văn bản sẽ có màu xanh
// và chữ đậm; nếu không, đoạn văn bản sẽ có màu đỏ và chữ bình thường.

import { ref } from 'vue'

const checked = ref(false)
</script>
<template>
  <div>
    <div class="check">
      <p>Kiểm tra văn bản</p>
      <input type="checkbox" v-model="checked" />
    </div>
    <p
      :style="{
        color: checked ? 'green' : 'red',
        fontWeight: checked ? 'bold' : 'normal',
      }"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, corrupti
      quaerat officia aliquam animi consectetur assumenda culpa voluptates
      praesentium et reprehenderit alias ipsam sed voluptate consequuntur
      aperiam exercitationem quidem dolore?
    </p>
  </div>
</template>

<style scoped>
div {
  align-items: center;
  margin: 20px;
}
.check {
  display: flex;
  gap: 10px;
}

p:first-of-type {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

input[type='checkbox'] {
  margin-top: 10px;
  transform: scale(1.2);
  cursor: pointer;
}

p:last-of-type {
  max-width: 500px;
  line-height: 1.6;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition:
    color 0.3s ease,
    font-weight 0.3s ease;
  text-align: justify;
}
</style>

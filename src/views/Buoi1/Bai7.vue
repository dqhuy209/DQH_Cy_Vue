<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// Tạo một ứng dụng Vue.js với một form đăng ký gồm các trường: họ tên, email,
//  số điện thoại, password, re-password. Nếu người dùng nhập ít hơn
//   8 ký tự, nút “Đăng ký” sẽ bị vô hiệu hóa và có màu xám.
//   Nếu mật khẩu đủ điều kiện, nút sẽ có màu xanh và có thể bấm được.
//   Sử dụng computed để kiểm tra độ dài mật khẩu và v-bind:class cho trạng thái nút.
//   .Sử dụng watch để theo dõi từng thay đổi của các trường này. Nếu tất cả các trường đều đã được điền,
//   một thông báo “Form đã hoàn tất” sẽ xuất hiện sau khi click “Đăng ký”.

import { ref, computed } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const rePassword = ref('')
const isFormValid = computed(() => {
  return password.value.length >= 8
})
const isFormComplete = computed(() => {
  return (
    name.value !== '' &&
    email.value !== '' &&
    phone.value !== '' &&
    password.value !== '' &&
    rePassword.value !== ''
  )
})

const handleSubmit = () => {
  if (isFormValid.value) {
    alert('Registration successful!')
  }
}
</script>
<template>
  <div>
    <form @submit.prevent>
      <div>
        <label for="name">Họ tên:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="phone">Số điện thoại:</label>
        <input type="tel" id="phone" v-model="phone" />
      </div>
      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="re-password">Nhập lại mật khẩu:</label>
        <input type="password" id="re-password" v-model="rePassword" />
      </div>
      <div>
        <button
          type="submit"
          :style="{
            backgroundColor: isFormValid ? '#4caf50' : 'gray',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }"
          @click="isFormComplete ? handleSubmit() : ''"
        >
          Đăng ký
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f1f1f1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  cursor: pointer;
  display: block;
  text-align: left;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: block;
  text-align: center;
  box-sizing: border-box;
}
</style>

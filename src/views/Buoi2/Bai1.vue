<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import { computed, reactive, ref, watch } from 'vue'
const data = reactive({
  cart: [],
  products: [
    {
      id: 1,
      name: 'PS5',
      price: 5555,
      publicDate: '05-05-2021',
      image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
      hot: true,
    },
    {
      id: 2,
      name: 'PS4',
      price: 4444,
      publicDate: '04-04-2021',
      image:
        'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$',
      hot: true,
    },
    {
      id: 3,
      name: 'PS3',
      price: 3333,
      publicDate: '03-03-2021',
      image:
        'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$',
      hot: false,
    },
  ],

  paymentMethods: [
    { text: 'COD', value: 1 },
    { text: 'Banking', value: 2 },
    { text: 'Ứng dụng bên thứ 3', value: 3 },
  ],
  selectedPayment: 2,
})
const hotProducts = computed(() => {
  return data.products.filter(product => product.hot)
})
const mostExpensiveProduct = computed(() =>
  data.products.reduce((max, product) =>
    product.price > max.price ? product : max,
  ),
)
const cheapestProduct = computed(() =>
  data.products.reduce((min, product) =>
    product.price < min.price ? product : min,
  ),
)
const showExpensive = ref(true)
const toggleProduct = () => {
  showExpensive.value = !showExpensive.value
}
const addToCart = product => {
  data.cart.push(product)
  alert(`${product.name} đã được thêm vào giỏ hàng!`)
}
watch(
  () => data.selectedPayment,
  (newMethod, oldMethod) => {
    const methodText = data.paymentMethods.find(
      method => method.value === newMethod,
    ).text
    alert(`Phương thức thanh toán đã được thay đổi thành: ${methodText}`)
  },
)
// ●	Yêu cầu 1: Đổ danh sách sản phẩm sử dụng v-for
// ●	Yêu cầu 2: Sử dụng v-for kèm computed để đổ ra danh sách sản phẩm hot
// ●	Yêu cầu 3: Sử dụng v-if, v-else để hiển thị sản phẩm đắt rẻ
// ●	Yêu cầu 4: Tạo event thêm giỏ hàng
// ●	Yêu cầu 5: Đổ ra phương thức thanh toán và set giá trị ban đầu là “Banking”
// ●	Yêu cầu 6: Thông báo khi thay đổi phương thức thanh toán
</script>
<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in data.products" :key="product.id">
        <img :src="product.image" alt="Product Image" />
        <h3>Tên sản phẩm: {{ product.name }}</h3>
        <p>Giá: {{ product.price }}</p>
        <!--Thêm giỏ hàng  -->
        <button @click="addToCart(product)">Thêm vào giỏ hàng</button>
      </li>
    </ul>
  </div>
  <div>
    <h2>Danh sách sản phẩm hot</h2>
    <ul>
      <li v-for="productHot in hotProducts" :key="productHot.id">
        <img :src="productHot.image" alt="Product hot Image" />
        <h3>Tên sản phẩm: {{ productHot.name }}</h3>
        <p>Giá: {{ productHot.price }}</p>
      </li>
    </ul>
    <div>
      <h2>Sản phẩm đắt/rẻ nhất</h2>
      <button @click="toggleProduct">Hiển thị</button>
      <div v-if="showExpensive">
        <h3>Sản phẩm đắt nhất</h3>
        <ul>
          <li>
            <p>
              {{ mostExpensiveProduct.name }} - Giá:
              {{ mostExpensiveProduct.price }}
            </p>
            <img :src="mostExpensiveProduct.image" alt="img" />
          </li>
        </ul>
      </div>
      <div v-else>
        <h3>Sản phẩm rẻ nhất</h3>
        <ul>
          <li>
            <p>{{ cheapestProduct.name }} - Giá: {{ cheapestProduct.price }}</p>
            <img :src="cheapestProduct.image" alt="img" />
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2>Phương thức thanh toán</h2>
      <select v-model="data.selectedPayment" class="payment-select">
        <option
          v-for="method in data.paymentMethods"
          :key="method.value"
          :value="method.value"
        >
          {{ method.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
div {
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
}

h2 {
  text-align: center;
  color: #4caf50;
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 1200px;
}

li {
  background-color: #f9f9f9;
  list-style-type: none;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

h3 {
  font-size: 18px;
  color: #555;
  margin-bottom: 5px;
}

p {
  font-size: 16px;
  color: #777;
}
button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
/* Container cho Select */
.payment-select {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.payment-select:hover,
.payment-select:focus {
  border-color: #4caf50;
  background-color: #fff;
}

.payment-select option {
  padding: 8px;
  background-color: #fff;
  color: #333;
}
</style>

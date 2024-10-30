<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, reactive, ref } from 'vue'
import product1 from '@/assets/img/product1.jpg'
import product2 from '@/assets/img/product2.jpg'
import product3 from '@/assets/img/product3.jpg'
import product4 from '@/assets/img/product4.jpg'
import product5 from '@/assets/img/product5.jpg'
import product6 from '@/assets/img/product6.jpg'
import cart from '@/assets/img/cart.svg'

// Tạo danh sách các sản phẩm bao gồm các thuộc tính:
// id, tên, giá, ngày phát hành, có phải sản phẩm bán chạy hay không, nhãn hiệu(brand),
//  mô tả, hình ảnh, các phiên bản màu sắc
const products = reactive([
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 1212150,
    releaseDate: new Date('2022-02-12'),
    isBestseller: true,
    brand: 'SoundMax',
    description:
      'High-quality wireless earbuds with noise cancellation and long battery life. Perfect for music.',
    image: product1,
    colors: [
      { color: 'Orange', quantity: 10, img: product2 },
      { color: 'Lime', quantity: 0, img: product4 },
      { color: 'Blue', quantity: 5, img: product3 },
    ],
  },
  {
    id: 2,
    name: 'Smartwatch Pro',
    price: 11212200,
    releaseDate: new Date('2022-02-01'),
    isBestseller: false,
    brand: 'TechTime',
    description:
      'Feature-rich smartwatch with heart rate monitoring, GPS tracking, and customizable watch faces.  ',
    image: product2,
    colors: [
      { color: 'Yellow', quantity: 2, img: product5 },
      { color: 'Green', quantity: 0, img: product6 },
      { color: 'Red', quantity: 7, img: product3 },
    ],
  },
  {
    id: 3,
    name: 'Smartwatch Pro',
    price: 3212200,
    releaseDate: new Date('2022-02-01'),
    isBestseller: false,
    brand: 'TechTime',
    description:
      'Feature-rich smartwatch with heart rate monitoring, GPS tracking, and customizable watch faces.  ',
    image: product3,
    colors: [
      { color: 'Emerald', quantity: 2, img: product1 },
      { color: 'Teal', quantity: 0, img: product5 },
      { color: 'Cyan', quantity: 7, img: product6 },
    ],
  },
  {
    id: 4,
    name: 'Smartwatch Pro',
    price: 5212200,
    releaseDate: new Date('2024-10-10'),
    isBestseller: true,
    brand: 'TechTime',
    description:
      'Feature-rich smartwatch with heart rate monitoring, GPS tracking, and customizable watch faces.  ',
    image: product4,
    colors: [
      { color: 'Cyan', quantity: 2, img: product2 },
      { color: 'Green', quantity: 6, img: product3 },
      { color: 'Red', quantity: 7, img: product1 },
    ],
  },
  {
    id: 5,
    name: 'Smartwatch Pro',
    price: 2212200,
    releaseDate: new Date('2023-09-20'),
    isBestseller: false,
    brand: 'TechTime',
    description:
      'Feature-rich smartwatch with heart rate monitoring, GPS tracking, and customizable watch faces.  ',
    image: product5,
    colors: [
      { color: 'Fuchsia', quantity: 2, img: product1 },
      { color: 'Purple', quantity: 0, img: product2 },
      { color: 'Pink', quantity: 7, img: product3 },
    ],
  },
  {
    id: 6,
    name: 'Smartwatch Pro',
    price: 1212200,
    releaseDate: new Date('2022-02-01'),
    isBestseller: true,
    brand: 'TechTime',
    description:
      'Feature-rich smartwatch with heart rate monitoring, GPS tracking, and customizable watch faces.  ',
    image: product6,
    colors: [
      { color: 'Sky', quantity: 2, img: product4 },
      { color: 'Indigo', quantity: 10, img: product5 },
      { color: 'Violet', quantity: 7, img: product1 },
    ],
  },
])
const selectedColors = reactive({})

function isColorAvailable(productId) {
  const product = products.find(p => p.id === productId)
  if (!product) return false
  const selectedColor = selectedColors[productId]
  const colorData = product.colors.find(c => c.color === selectedColor)
  return colorData ? colorData.quantity > 0 : false
}
function toggleColorSelection(productId, color) {
  if (selectedColors[productId] === color.color) {
    selectedColors[productId] = null
  } else {
    selectedColors[productId] = color.color
  }
}
// change img
function changeImage(productId, color) {
  selectedColors[productId] = color.color
  products.forEach(p => {
    if (p.id === productId) {
      p.colors.forEach(c => {
        if (c.color === color.color) {
          p.image = color.img
        }
      })
    }
  })
}
// Format
function formatReleaseDate(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `Day ${day} Month ${month} Year ${year}`
}
function formatPrice(price) {
  return price.toLocaleString('ja-JP')
}
// Modal Cart
const carts = reactive([])
const isCartModalOpen = ref(false)
function addToCart(productId) {
  const product = products.find(p => p.id === productId)
  const color = selectedColors[productId]

  const cartItem = carts.find(
    item => item.id === productId && item.color === color,
  )

  if (cartItem) {
    cartItem.quantity += 1
    alert('Add to cart successfully')
  } else {
    carts.push({
      id: productId,
      name: product.name,
      price: product.price,
      color: color,
      quantity: 1,
    })
    alert('Add to cart successfully')
  }
}
const cartTotal = computed(() => {
  return carts.reduce((total, item) => total + item.price * item.quantity, 0)
})
// add to cart
</script>
<template>
  <div
    class="container relative mx-auto p-6 flex gap-[50px] justify-center flex-wrap"
  >
    <div
      v-for="product in products"
      :key="product.id"
      class="border border-gray-300 rounded-lg p-4 shadow-md mb-6 w-[400px]"
      :class="
        selectedColors[product.id]
          ? 'bg-' + selectedColors[product.id].toLowerCase() + '-400'
          : ''
      "
    >
      <h2 class="text-lg font-bold text-gray-800 mb-2">{{ product.name }}</h2>

      <div class="relative">
        <img
          :src="product.image"
          alt="Product Image"
          class="w-full h-48 object-cover rounded mb-4"
        />
        <span
          v-if="product.isBestseller"
          class="bg-red-500 text-white text-xs font-semibold px-2 py-1 absolute top-0"
        >
          Hot
        </span>
        <span
          v-else
          class="bg-gray-500 text-white text-xs font-semibold px-2 py-1 absolute top-0"
        >
          Sale
        </span>
      </div>
      <p class="text-[#333] mb-2">{{ product.description }}</p>
      <p class="text-gray-800 font-semibold mb-2">
        Price: ￥{{ formatPrice(product.price) }}
      </p>
      <p class="text-[#333] mb-2">Brand: {{ product.brand }}</p>
      <p class="text-[#333] mb-2">
        ReleaseDate: {{ formatReleaseDate(product.releaseDate) }}
      </p>
      <div class="flex gap-6 mb-4 justify-end">
        <button
          v-for="color in product.colors"
          :key="color.color"
          @click="toggleColorSelection(product.id, color)"
          @mouseover="changeImage(product.id, color)"
          :class="'bg-' + color.color.toLowerCase() + '-500'"
          class="w-[75px] pt-[10px] py-[10px] rounded-full border-2 border-white border-solid"
        ></button>
      </div>
      <div class="flex justify-end">
        <button
          :disabled="!isColorAvailable(product.id)"
          class="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          @click="addToCart(product.id)"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <!-- Icon Giỏ Hàng -->
    <div class="absolute right-0">
      <img
        :src="cart"
        alt=""
        class="w-12 cursor-pointer"
        @click="isCartModalOpen = !isCartModalOpen"
      />
    </div>
    <!-- Modal Giỏ Hàng -->

    <div
      v-if="isCartModalOpen"
      class="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-50"
    >
      <div
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-white rounded-lg p-8"
      >
        <div class="flex justify-between">
          <h2 class="text-lg font-bold text-[#1c1c1c] mb-4">Shopping Cart</h2>
          <button @click="isCartModalOpen = !isCartModalOpen">❌</button>
        </div>

        <table
          v-if="carts.length > 0"
          class="min-w-full bg-gray-300 rounded-lg shadow-md"
        >
          <thead>
            <tr class="bg-gray-200">
              <th class="py-2 px-4 text-left font-semibold text-[#1c1c1c]">
                Tên sản phẩm
              </th>
              <th class="py-2 px-4 text-left font-semibold text-[#1c1c1c]">
                Màu sắc
              </th>
              <th class="py-2 px-4 text-left font-semibold text-[#1c1c1c]">
                Số lượng
              </th>
              <th class="py-2 px-4 text-left font-semibold text-[#1c1c1c]">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in carts"
              :key="`${item.id}-${item.color}`"
              class="border-t hover:bg-gray-400"
            >
              <td class="py-2 px-4 text-[#1c1c1c]">{{ item.name }}</td>
              <td class="py-2 px-4 text-[#1c1c1c]">{{ item.color }}</td>
              <td class="py-2 px-4 text-[#1c1c1c] font-semibold">
                {{ item.quantity }}
              </td>
              <td class="py-2 px-4 text-[#1c1c1c] font-semibold">
                ￥{{ formatPrice(item.price) }}
              </td>
            </tr>
          </tbody>
        </table>

        <p v-else class="text-center text-[#1c1c1c] mt-6">Giỏ hàng trống.</p>
        <!-- Button Thanh Toán -->
        <div class="flex justify-end">
          <p class="py-2 px-4 text-[#1c1c1c] font-semibold">
            Total: ￥{{ formatPrice(cartTotal) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

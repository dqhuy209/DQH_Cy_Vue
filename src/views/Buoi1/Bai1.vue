<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <img :src="game.image" :alt="game.imageAlt" />
    <h3 :class="game.inStock ? 'in-stock' : 'out-of-stock'">
      {{ game.product }}
    </h3>
    <a href="#">{{ game.productLink }}</a>
    <p>{{ productDescription }}</p>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
const game = reactive({
  image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
  imageAlt: 'ps5 alt',
  product: 'ps5',
  productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
  quantity: 10,
  price: 10000,
  discount: 0.2,
  inStock: true,
  classObject: {
    'bg-green': true,
    'bg-blue': false,
  },
})
const priceDiscount = () => {
  return game.price * (1 - game.discount)
}
const productDescription = computed(() => {
  if (game.quantity > 0) {
    return `Sản phẩm ${game.product} hiện có sẵn với giá giảm là ${formatPrice()}VND.`
  } else {
    return `Sản phẩm ${game.product} hiện không có sẵn.`
  }
})
const formatPrice = () => {
  return priceDiscount().toLocaleString('vi-VN')
}
</script>

<style scoped>
img {
  width: 300px;
}
.in-stock {
  color: green;
}
.out-of-stock {
  color: red;
}
</style>
<!-- {
  image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
  imageAlt: 'ps5 alt',
  product: 'ps5',
  productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
  quantity: 10,
  price: 10000,
  discount: 0.2,
  inStock: true,
  classObject: {
    'bg-green': true,
    'bg-blue': false
  }
}

●	 Yêu cầu 1: Đổ ra tên sản phẩm
●	 Yêu cầu 2: Bind hình ảnh vào thẻ <img> trong html
●	 Yêu cầu 3: Thay đổi màu sắc tên sản phẩm dựa vào thuộc tính “inStock”
●	 Yêu cầu 4: Bind class cho 1 thẻ bất kỳ bằng cách truyền 1 đối tượng vào
●	 Yêu cầu 5: Sử dụng methods để tính toán giá tiền sau giảm giá
●	 Yêu cầu 6: Sử dụng computed để thay text cho mô tả sản phẩm
●	 Yêu cầu 7: Sử dụng filter để format lại giá tiền -->

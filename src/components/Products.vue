<template>
  <div class="product-cards">

    <v-row>

      <v-col v-for="item in product" :key="item.id" cols="12" sm="6" md="4"
        xs="12">
        <v-card class="mx-auto product-card" max-width="350" min-width="350">
          <v-img class="align-end text-white" :src="item.image" height="125" min-width="125" cover>

          </v-img>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle class="pt-4">Rs. {{ item.price }}</v-card-subtitle>

          <v-card-text>
            <div>
              Lorem ipsum dolor sit amet consectetur
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="addCart(item)" class="bg-primary" variant="tonal"> ADD TO CART </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";

import { useRouter } from "vue-router";
import { useStore } from "vuex";
// import Header from "./Header.vue";
import product from "../assets/products.json";
console.log(product, "product");
const store = useStore();
const router = useRouter();
const alreadyAdded = ref(false);
const Products = ref([
]);
const addCart = (item) => {
  // console.log(item);
  let existingItem = null;
  store.state.cart.forEach((cartItem) => {
    if (cartItem.id == item.id) {
      existingItem = cartItem;
    }
  });
  if (existingItem) {
    store.commit("UPDATE_CART", {
      ...existingItem,
      count: existingItem.count + 1,
    });
  } else {
    store.commit("ADD_TO_CART", {
      ...item,
      count: 1,
    });
  }
  console.log(store.state);
};
</script>
<style lang="scss" scoped>



</style>
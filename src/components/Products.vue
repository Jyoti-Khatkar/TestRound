<template>
  <div class="product-card">
    <!-- <Header /> -->
    <v-row>
      <v-col v-for="item in product" :key="item.name" cols="4" xs="12">
        <v-card class="mx-auto" max-width="600">
          <v-img
            class="align-end text-white"
            :src="item.image"
            height="125"
            min-width="125"
            cover
          >
            
          </v-img>
  <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle class="pt-4">Rs. {{ item.price }}</v-card-subtitle>

          <v-card-text>
            <div>
              Lorem ipsum dolor sit amet consectetur
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="addCart(item)" color="orange"> ADD TO CART </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-card width="550" height="450" class="rounded-lg ma-2" elevation="15">
      <v-card-title>
        <span class="d-flex justify-space-between mt-2">
          <p class="text-h6 text--primary mb-1">Product List</p>
        </span>
      </v-card-title>
      <v-card-text class="card-sm-content">
        <v-list>
          <v-list-item
            v-for="(item, i) in product"
            :key="i"
            :value="item"
            :class="item.name"
            active-color="purple"
          >
            <template v-slot:prepend>
              <v-avatar size="84" tile>
                <img
                  :src="item.image"
                  alt="user"
                  style="width: 35px; height: 35px"
                />
              </v-avatar>
            </template>

            <v-list-item-title v-text="item.name"></v-list-item-title>

            <template v-slot:append>
              <Button icon="mdi mdi-eye" iconPos="center" class="ml-2 purple" />
              <v-btn
                @click="addCart(item)"
                :class="alreadyAdded ? 'bg-blue' : 'bg-light'"
                >ADD TO CART
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-sheet class="d-flex justify-center my-4 py-2 add-user">
        <Button
          icon="pi pi-plus"
          iconPos="center"
          class="purple"
          @click="addUser(true)"
        />
      </v-sheet>
    </v-card> -->
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
  {
    name: "iphone",
    avatar: "",
  },

  {
    name: "Hp laptop",
    avatar: "",
  },
]);
const addCart = (item) => {
  // console.log(item);
  let existingItem = null;
  store.state.cart.forEach((cartItem) => {
    if (cartItem.name == item.name) {
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
.product-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
 
}


</style>
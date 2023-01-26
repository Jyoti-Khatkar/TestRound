<template>
    <div class="cart-card">
      <v-row>
        <v-col v-for="item in $store.state.cart" :key="item.name" >
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
              <v-btn color="orange">{{ item.count }}</v-btn>
  
              <v-btn @click="increaseProductAmount(item)" color="orange">+</v-btn>
              <v-btn @click="decreaseProductAmount(item)" color="orange">-</v-btn>
  
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
     
     
     
    </div>
  </template>
    <script setup>
  import { ref, watch, onMounted } from "vue";
  import {useStore} from 'vuex';
  const store = useStore();
  const increaseProductAmount = (item) => {
    store.state.cart.forEach((cartItem) => {
      if (cartItem.id == item.id) {
        store.commit("UPDATE_CART", {
        ...item,
        count: item.count + 1,
      });
      }
    });
  };
  const decreaseProductAmount = (item) => {
    store.state.cart.forEach((cartItem) => {
      if (cartItem.id == item.id && item.count >= 1) {
        store.commit("UPDATE_CART", {
        ...item,
        count: item.count - 1,
      });
      }
    });
  };
  </script>
    <style lang="scss" scoped>
    .cart-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
   
  }
  </style>
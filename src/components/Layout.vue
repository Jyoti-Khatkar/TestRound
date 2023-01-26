<template>
  
    <v-app-bar 
      color="teal-darken-4"
      class="bg-primary position-fixed"
    >
    <template v-slot:prepend >
  
      <v-btn :class="selected==='Products'?'bg-red mr-4':'bg-grey mr-4'"  @click="productList">
    Products
    </v-btn>
    <v-btn @click="CartList" :class="selected==='Cart'?'bg-red':'bg-grey'" >
    Cart
    </v-btn>
      </template>
    <v-app-bar-title>
    
    
    </v-app-bar-title>
    <template v-slot:append >
        <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
        <v-btn @click="signOut" :class="selected==='signOut'?'bg-red':'bg-grey'" >
    SignOut
    </v-btn>
      </template>
    </v-app-bar>

    <v-main class="set-heig">
      <v-card class="set-color"><router-view /></v-card>
    </v-main>
</template>
<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";
const selected=ref("Products");
const router=useRouter();
const productList=()=>{
    selected.value='Products';  
router.push({name:'Products'})
}
const CartList=()=>{
    selected.value='Cart';

router.push({name:'Cart'})
}
const signOut = () => {
    selected.value='SignOut';

let user = localStorage.getItem("UserDetail");
if (user) {
  localStorage.removeItem("UserDetail");
}
router.push({ name: "Login" ,path: "/login"});

};
</script>
<style lang="scss" scoped></style>
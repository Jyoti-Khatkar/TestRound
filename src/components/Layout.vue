<template>
  
    <v-app-bar 
      color="teal-darken-4"
      class="bg-primary position-fixed"
    >
    <template v-slot:prepend >
  
      <v-btn class="mr-5 bg-green" color="red" @click="productList">
    Products
    </v-btn>
    <v-btn @click="CartList">
    Cart
    </v-btn>
      </template>
    <v-app-bar-title>
    
    
    </v-app-bar-title>
    <template v-slot:append >
        <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
        <v-btn @click="signOut">
    SignOut
    </v-btn>
      </template>
    </v-app-bar>

    <v-main class="set-heig">
      <v-card class="set-color"><router-view /></v-card>
    </v-main>
</template>
<script setup>
import { useRouter } from "vue-router";

const router=useRouter();
const productList=()=>{
router.push({name:'Products'})
}
const CartList=()=>{
router.push({name:'Cart'})
}
const signOut = () => {

let user = localStorage.getItem("UserDetail");
if (user) {
  localStorage.removeItem("UserDetail");
}
router.push({ name: "Login" ,path: "/login"});

};
</script>
<style lang="scss" scoped></style>
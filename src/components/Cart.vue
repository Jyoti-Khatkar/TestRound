<template>
    <div class="cart-card" v-if="$store.state.cart.length > 0 ">
        <v-row>
            <v-col  v-for="item in $store.state.cart" :key="item.id" cols="12" sm="6" md="4" xs="12">
                <v-card class="mx-auto product-card" max-width="350" min-width="350" >
                    <v-img class="align-end text-white" :src="item.image" height="125" min-width="125" max-width="350" cover>

                    </v-img>
                    <v-card-title>{{ item.name }}</v-card-title>
                    <v-card-subtitle class="pt-4">Rs. {{ item.price }}</v-card-subtitle>

                    <v-card-text>
                        <div>
                            Lorem ipsum dolor sit amet consectetur
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn variant="outlined">{{ item.count }}</v-btn>

                        <v-btn @click="increaseProductAmount(item)" class="bg-success" variant="tonal"
                            style="font-size:1.8rem">+</v-btn>
                        <v-btn @click="decreaseProductAmount(item)" class="bg-red" variant="tonal"
                            style="font-size:1.8rem">-</v-btn>
                            <v-btn @click="removeItem(item)" class="mdi mdi-delete" variant="tonal"
                            style="font-size:1.8rem"></v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>


    <div v-else class="empty-cart">
    <h1>Cart is empty</h1>
    
</div>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import { useStore } from 'vuex';
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
        if (cartItem.id == item.id && item.count > 1) {
            store.commit("UPDATE_CART", {
                ...item,
                count: item.count - 1,
            });
        }
    });
};
const removeItem = (item) => {
  store.commit("REMOVE_FROM_CART", item);
};
</script>
<style lang="scss" scoped>
.cart-card {

    margin:1.5rem;

}

.empty-cart{
    margin:1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
</style>
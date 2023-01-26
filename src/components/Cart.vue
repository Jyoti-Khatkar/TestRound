<template>
    <div class="cart-card">
        <v-row>
            <v-col v-for="item in $store.state.cart" :key="item.id"  cols="12"
        sm="6" md="4" xs="12">
                <v-card class="mx-auto" max-width="350" min-width="350">
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
                        <v-btn variant="outlined" >{{ item.count }}</v-btn>

                        <v-btn @click="increaseProductAmount(item)" class="bg-success" variant="tonal" style="font-size:1.8rem">+</v-btn>
                        <v-btn @click="decreaseProductAmount(item)" class="bg-red" variant="tonal" style="font-size:1.8rem">-</v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>



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
</script>
<style lang="scss" scoped>
.cart-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

}
</style>
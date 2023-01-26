import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART (state, item) {
      state.cart.push(item);
    },
    UPDATE_CART (state, item) {
        state.cart.forEach(cartItem=>{
            if(cartItem.id==item.id){
                cartItem.count = item.count;
            }
        });
    }
  }
})
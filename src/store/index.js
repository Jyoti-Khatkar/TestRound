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
    },
    REMOVE_FROM_CART(state, item) {
        let newState = state.cart.filter(cartItem => 
          cartItem.id!=item.id
        );
        state.cart = newState;
      }
  }
})
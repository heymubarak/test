<template>
  <div>
    <h2>{{title}}</h2>
    <div v-for= "item in items_cart" :key= "item.id" class="item">
      <div class="card">
        <div>
          <span>{{item.id}}</span>
        </div>
        <div class="card-header">
          <span>{{item.name | upperCase}}</span>
        </div>
				<div class="card-body">
					<div>
						<span>Qty: {{item.quantity}}</span>
					</div>
					<div>
						<span>Price/Piece: {{item.price}}</span>
					</div>
					<div>
						<span>Price: {{item.price * item.quantity}}</span>
					</div>
				</div>

        <div class="inline">
          <button class="btn-sm btn-danger" @click="removeItemCart(item)">Remove</button>
        </div>
        <div class="inline">
          <button class="btn btn-info" @click="addToWish(item);removeItemCart(item)">Move to Wishlist</button>
        </div>
      </div>
    </div>
    <span></span>
    <div v-if="total != 0" class="total">Total:{{total | roundOff}}</div>
    <!-- <span>{{items_cart}}</span> -->
    <div v-else class="emptyCart">
      <p>Cart is Empty</p>
      <span>
        GO for
        <router-link to="/products" class="emp_router emptyCart">SHOP</router-link>
      </span>
      <span> or </span>
      <span><router-link to="/wishlist" class="emp_router emptyCart">WishList</router-link></span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      title: "Cart",
      // hello: false
    };
  },
  created() {
    // console.log(this.items_cart.length)
    // console.log(numberInCart)
``
    
  },
  computed: {
    ...mapGetters(["items_cart"]),
    total() {
      return this.items_cart.reduce(function(total, item) {
        return total + item.price * item.quantity;
      }, 0);
    }
  },
  methods: {
    ...mapActions(['addToWish', 'removeItemCart'])
  }
};
</script>
 
<style scoped>
h2 {
  text-align: center;
  font-size: 40px;
}
.item {
  text-align: center;
  padding-top: 50px;
}
.emptyCart {
  color: red;
  text-align: center;
  font-size: 25px;
  padding-top: 50px;
}
.emp_router {
  text-decoration: none;
}
.total {
  text-align: right;
  padding: 20px;
}
</style>

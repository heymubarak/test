<template>
  <div>
    <!-- <button type="" @click= "hello"></button> -->
    <div v-for="product in products" :key="product.id">
      <div style= "display : ">
        <div class="card" >
          <div class="card-body">
            <span class="card-title">{{product.id}}..</span>
            <span class="card-text">{{product.name | upperCase}}</span>
            <div style="color:#2f3b38; font-weight:bold"> <span> $ {{product.price}}</span> </div>
            
            <span>
              <router-link :to="{name:'product', params:{id : product.id}}" class="btn-sm btn-primary float-right">details</router-link>
            </span>
asdasd
            <button class="btn-sm btn-success float-right" @click="addToCart(product)">Add to Cart</button>
            <button class="btn-sm btn-success float-right" @click="addToWish(product)">Add to Wishlist</button>
          </div>
        </div>
      </div>  
    </div>
    <div>
      <button class="btn btn-success" v-show= "userType === 3" @click= "modalAddProduct">Add Products</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import { mapActions } from 'vuex';

export default {
  name: "products",
  data() {
    return {};
  },
  created() {
    // this.addToProducts()
    // console.log(this.products)
  },
  computed: mapGetters(["products", 'userType']),
  methods: {
    ...mapActions(["addToCart", "addToWish"]),
    modalAddProduct(){
      this.$modal.show('editDetails');
      console.log('abc')
    }
  }
  
};
</script>

<style scoped>
</style>
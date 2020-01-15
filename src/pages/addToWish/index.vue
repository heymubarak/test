<template>
  <div>
    <h3> {{title}} </h3>
    <div v-for= "item in items_wish" :key= "item.id">
      <span>{{item.name | upperCase}}</span>
      <span> {{item.price}} </span>
      <button type="" class="btn btn-info" @click="addToCart(item);removeItemWish(item)">Move to Cart</button>
    </div>
    
  </div>
  

  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'wishlist',
  data(){
    return{
      title: 'Wishlist',
      // items_wish: [],
    }
  },

  created(){
    console.log(this.items_wish)
  },

  methods:{
    ...mapActions(["addToCart",'removeItemWish'])
  },
  computed : {
    ...mapGetters(["items_wish",'cities'])  
  },
  
}
</script>


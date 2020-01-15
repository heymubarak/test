<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div class="navbar-nav">
        <router-link :to="{ name: 'products'}" class="nav-item nav-link">Products</router-link>
        <router-link
          :to= "{name:'customers'}"
          v-show="userType === 3"
          class="nav-item nav-link"
        >Customers</router-link>
        <router-link :to="{name:'cart'}"  class="nav-item nav-link">Go to Cart</router-link>
        <router-link :to="{name:'wishlist'}"  class="nav-item nav-link">Wishlist</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapActions } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      // userType: 3,
    };
  },
  computed: {
    ...mapGetters(["userType"])
  }
  // methods: mapActions([ 'addToProducts' ])
};
</script>

<style scoped>
</style>
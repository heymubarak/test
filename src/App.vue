<template>
  <div id="hello">
  <div id="app" class="container ">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-nav">
        <a href="/">
        <img class="" src="../src/assets/images/logo.png" alt="logo">
        <!-- <span class="navbar-brand">yoozd</span> -->
        </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button> 
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <a class="nav-item nav-link" href="/#about">About <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="/#process">Process</a>
        <a class="nav-item nav-link" href="/#customerSay">Customer Says</a>
        <modalLogin style="" v-if= "hello"/>
        <modalSignUp v-if= "hello"/>
      </div>
      </div>
      </nav>
    <router-view></router-view>
    <!-- <cust/> -->
    <!-- <products/> -->
  </div>
  </div>

</template>

<script>
// import Home from './pages/home'
import Login from "./pages/login";
import Signup from "./pages/signupForm";
// import Customer from './pages/customerList/customer'
// import Login from './pages/login'
// import Products from './pages/productList'
export default {
  name: 'app',
  data(){
    return{
      hello: true,
    }
  },
  components: {
    // 'home': Home,
    'modalLogin': Login,
    'modalSignUp': Signup
    // 'login': Login
    // 'cust': Customer,
    // 'products': Products,
  },
    methods: {
    show(){
      // console.log('hello')
     return this.$modal.show('hello');
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */

}
#hello{
    background-color: #07ffc357;
}
</style>

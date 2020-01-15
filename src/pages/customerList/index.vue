<template>
  <div class="list-group">
    <div v-for="customer in customers" :key="customer.id">
      <div class="list-group-item">
        <div class="">
          <span class="">{{customer.name}}</span>
          <span class="float-right">
            <router-link :to="{name:'customer', params :{ id : customer.id}}" class="btn btn-info">view</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customer_list",
  data() {
    return {};
  },
  computed: {
    customers() {
      return this.$store.getters.customers;
    }
  }
};
</script>

<style scoped>
</style>
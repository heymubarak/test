<template>
  <div>
    <!-- <span> {{$route.params.id}} </span> -->
    <div>
      <input type="text" name="" id="" v-model="getCustomer.name" v-show = 'editable'/>
      <span v-show="!editable" >{{greeting}} {{getCustomer.name}}</span>
      <span id="edit_in_name" style="float:right" @click= "editName"> Edit</span>
    </div>
    <div>
      <span class="hello1">{{getCustomer.username}}</span>
    </div>
    <div>
      <span class="hello1">{{getCustomer.email}}</span>
    </div>
    <div>
      <span class="hello1">{{getCustomer.phone}}</span>
    </div>
    <div>
      <span>{{getCustomer.address.street}}</span>
    </div>
    <div>
      <span>{{getCustomer.address.city}}-</span>
      <span>{{getCustomer.address.zipcode}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "customer",
  data() {
    return {
      greeting: "Hello",
      // ContentEditable : false,
      editable : false,
    };
  },
  created(){
    console.log('abc')
  },
  computed: {
    getCustomer() {
      const selectedCustomer = this.$route.params.id;
      return this.$store.getters.getCustomer(selectedCustomer);
      
    }
  },
  methods:{
    editName(){
      let editLabel = document.getElementById('edit_in_name');
      if(this.editable){
        editLabel.innerText = 'Edit'
        this.editable = false
      }
      else{
        editLabel.innerText = 'Save',
        this.editable = true
      }
      // this.editable != this.editable;
      // return this.editable = true;
    }
  },
};
</script>

<style scoped>
</style>
<template>
  <div>
    <div class="header card-header">
			<h3>
				<span id='product-id'>{{getProduct.id}}</span>
				<span id='product-name'>{{getProduct.name}}</span>
			</h3>
		</div>

    <div class="card-body">
			<div class="description">
				<h4>Description</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dicta asperiores repellat tempore, et qui magnam nihil assumenda odit architecto nemo, cum inventore sed vel tempora quisquam repellendus accusamus. Reiciendis perferendis, blanditiis nobis facilis non repellendus, ratione eligendi voluptate quas asperiores rem vitae atque qui consectetur dolores, id laudantium. Adipisci.</p>
			</div>
			<div class="">
				<p>{{getProduct.price}}</p>
        <button class="btn btn-primary" @click="addToCart(getProduct)">Add to Cart</button>
        <button class="btn btn-primary" @click="addToWish(getProduct)">Add to WishList</button>
        <button class="btn btn-primary" v-show= "userType === 3" @click= "editDetails">Edit Details</button>
        <modal name="editDetails">
          <div>
            <div>
              <div>
                <span>
                  Edit the Details
                </span> 
              </div>
              <div>
                <label for="itemName">Product Name:</label>
                <input type="text" name="" id="itemName" v-model="getProduct.name"/>
              </div>
            </div>
          </div>
          
        </modal>
        
			</div>			
		</div>
		
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
//  import { mapGetters } from "vuex";

export default {
  name: "product",
  created() {
    // this.getProduct();
  },
  computed: {
    ...mapGetters(['userType']),
    // ...mapGetters(['getProduct'])
    getProduct() {
      const selectedProduct = this.$route.params.id;
      return this.$store.getters.getProduct(selectedProduct);
    }
  },
  data() {
    return {

    };
  },
  methods: {
    ...mapActions(['addToCart', 'addToWish']),
    editDetails(){
      this.$modal.show('editDetails')
    },
  }
};
</script>

<style scoped>
.price{
	color:#6c8298;
	font-weight: bold;
}
</style>
import axios from "axios";
// import {hello} from './product';

const state = {
  allCities: [],
  allProducts: [
    {
      id: "69",
      name: "egestas",
      price: 229.13
    },
    {
      id: "66",
      name: "arcu et",
      price: 982.5
    },
    {
      id: "67",
      name: "egestas",
      price: 1147.2
    },
    {
      id: "68",
      name: "tincidunt",
      price: 182.3
    },
    {
      id: "58",
      name: "aliquet nec",
      price: 403.42
    }
  ],
  userType : 3,
  allCustomers: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light, Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
      },
      phone: "1-770-736-8031 x56442"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains, Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771"
      },
      phone: "010-692-6593 x09125"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension, Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157"
      },
      phone: "1-463-123-4447"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall, Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257"
      },
      phone: "493-170-9623 x156"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks, Suite 351",
        city: "Roscoeview",
        zipcode: "33263"
      },
      phone: "(254)954-1289"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing, Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337"
      },
      phone: "1-477-935-8478 x6430"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail, Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099"
      },
      phone: "210.067.6132"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit, Suite 729",
        city: "Aliyaview",
        zipcode: "45169"
      },
      phone: "586.493.6943 x140"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park, Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109"
      },
      phone: "(775)976-6794 x41206"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike, Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261"
      },
      phone: "024-648-3804"
    }
  ],
  inTheCart: [],
  inTheWish: [],
};


const getters = {
  cities: state => state.allCities,

  products: state => state.allProducts,

  userType:function(state){
    return state.userType
   },
   
  getProduct: function (state) {
    return function (selection_id) {
      // console.log(y);
      // console.log(state.allProducts);
      const prod = state.allProducts.find(({ id }) => id === selection_id);
      // console.log(prod);
      return prod;
    }
  },
  customers: state => state.allCustomers,
  // console.log(state.allCustomers)

  getCustomer: function (state) {
    return function (selection_id) {
      // console.log(selection_id);
      // console.log(state.allCustomers);
      const cust = state.allCustomers.find(({ id }) => id == selection_id);
      // console.log(cust);
      return cust;
    }
  },
  items_cart: state => {
    // console.log(state.inTheCart)
    return state.inTheCart.map(({id, quantity}) =>{
      const item = state.allProducts.find(p=>p.id===id)
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity
        
      }
    })
  },
  items_wish: state => {
    // console.log('xyz')
    return state.inTheWish.map(({id}) =>{
      const item = state.allProducts.find(p=>p.id===id)
      // console.log(this.state.allProducts)
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        
      }
      
    })
  }
};

const mutations = {

  userTypeCust:function(state, {id}){
    console.log(id)
    state.userType = id
  },
  // addedProducts: (state, allProducts) => {state.allProducts = allProducts},
  addedItemToCart: function(state, {id}){
    // console.log(id)
    const item = state.inTheCart.find(p=>p.id===id)
    // console.log(item)
    if(!item){
      state.inTheCart.push({
        id,
        quantity: 1,
      });
      
    }
    else{
      item.quantity++
    }
    
   },


   addedItemToWish: function(state, {id}){
    const item = state.inTheWish.find(p=>p.id === id)
    // console.log(id)
    if (!item){
      state.inTheWish.push({
        id,
        quantity:1,
      });
      
    }
    else{
      alert('Already Added')
    }
   },

    deleteItemCart: function(state, {id}){
     state.inTheCart = state.inTheCart.filter(p=>p.id !=id)
  },
    deleteItemWish: function(state, {id}){
      state.inTheWish = state.inTheWish.filter(p=>p.id != id)
    },

    addCities: (state, allCities) => { state.allCities = allCities },
};

const actions = {
  // async addToProducts({ commit }) {
  //   const items = await axios.get('./db.json');
  //   // console.log(items.data.allProducts);
  //   commit('addedProducts', items.data.allProducts);

  // },
  // async addToCart({ commit }) {
  //   const items = await axios.get('./db.json');
  //   const i = items.data.allProducts.find(({ id }) => id == '58');
  //   // console.log(i);
  //   commit('addedItem', i);

  // },
  
  userChange({commit}, id){
    // console.log(id)
    commit('userTypeCust', {id})
  },
  addToCart({commit}, product){  
    // console.log(product)
    commit('addedItemToCart', {
      id: product.id
    })
      // console.log(this.addToCart)
  },

  addToWish({commit}, product){
    commit('addedItemToWish', {
      id: product.id
    })
    // console.log(product)
  },

  removeItemCart({commit}, product){
    commit('deleteItemCart',{
      id : product.id
    })
  },
  
  removeItemWish({commit}, product){
    commit('deleteItemWish',{id: product.id})
  },
  
  async addCities({ commit }) {
    const cities = await axios.get('./db.json');
    //  console.log(cities.data.allCities);
    commit('addCities', cities.data.allCities);
  },
  



};


export default {
  state,
  getters,
  mutations,
  actions
}
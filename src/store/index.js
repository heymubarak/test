import Vuex from 'vuex';
import Vue from 'vue';
import App from './modules/app'
import Product from './modules/product'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        App,
        Product
    }
})
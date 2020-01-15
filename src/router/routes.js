// import Login from '../pages/login';
// import Signup from '../pages/signupForm';
import Customers from '../pages/customerList';
import Products from '../pages/productList';
import Product from '../pages/productList/product';
import Dashboard from '../pages/dashboard';
import Customer from '../pages/customerList/customer.vue';
import Cart from '../pages/cart'
import Wishlist from '../pages/addToWish'
import NotFound from '../pages/error/notFound'
import Home from '../pages/home'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '*',
        redirect: '/notfound'
        // component: NotFound,
    },
    {
        name:'notfound',
        path: '/notfound',
        component: NotFound
    },
    {
        name: 'dashboard',
        path: '/india',
        component: Dashboard,
        children:
            [
                {
                    name: 'products',
                    path: 'products',
                    component: Products
                },
                {
                    name: 'customers',
                    path: 'customers',
                    component: Customers,
                },
                {
                    name: 'product',
                    path: 'product/:id',
                    component: Product,
                },
                {
                    name: 'customer',
                    path: 'customer/:id',
                    component: Customer,
                },
                {
                    name:'cart',
                    path: 'cart',
                    component: Cart,
                },
                {
                    name:'wishlist',
                    path: 'wishlist',
                    component: Wishlist
                }
            ],
        

        
    },
    
    
    

]

export default routes;
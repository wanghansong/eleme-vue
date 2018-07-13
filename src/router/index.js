import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/goods',
            name: 'Goods',
            meta: '商品',
            component: () =>
              import ( /* webpackChunkName:"goods/index" */ '@/pages/goods/index')
        },
        {
            path: '/ratings',
            name: 'Ratings',
            component: () =>
              import ( /* webpackChunkName:"ratings/index" */ '@/pages/ratings/index')
        },
        {
            path: '/seller',
            name: 'Seller',
            component: () =>
              import ( /* webpackChunkName:"seller/index" */ '@/pages/seller/index')
        },
        {
            path: '*',
            name: '404',
            redirect: '/'
        }
    ]
});

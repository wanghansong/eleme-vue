import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/goods',
            name: 'Goods',
            meta: {
                title: '商品'
            },
            component: () =>
              import ( /* webpackChunkName:"goods/index" */ '@/pages/goods/index')
        },
        {
            path: '/ratings',
            name: 'Ratings',
            meta: {
                title: '评价'
            },
            component: () =>
              import ( /* webpackChunkName:"ratings/index" */ '@/pages/ratings/index')
        },
        {
            path: '/seller',
            name: 'Seller',
            meta: {
                title: '商家'
            },
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
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});
router.afterEach( () => {
    window.scrollTo(0, 0);
});


export default router;
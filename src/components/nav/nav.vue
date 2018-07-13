<!-- nav导航tab -->
<template>
    <div class="nav-wrap">
        <div class="nav-item" v-for="menu in menus" :key="menu.routerName">
            <router-link :to="{ name: menu.routerName}">{{menu.title}}</router-link>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {
                    routerName: 'Goods',
                    title: '商品'
                },
                {
                    routerName: 'Ratings',
                    title: '评论'
                },
                {
                    routerName: 'Seller',
                    title: '商家'
                }
            ]
        };
    }
};

</script>
<style lang='less' scoped>

.nav-wrap{
    display: flex;
    width: 100%;
    height: 40px;

    border-bottom: 1px rgba(7, 17 , 27, 0.1) solid;


    .nav-item{
        flex: 1;
        & > a{
            text-decoration: none;
            font-size: 14px;
            line-height: 14px;
            color: rgb(77, 85, 93);
            &.router-link-exact-active{
                color: rgb(240, 20, 20);
            }
        }
    }
}
.router-link-exact-active{
    color: rgb(240, 20, 20);
}
</style>
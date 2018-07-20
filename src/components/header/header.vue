<!-- header -->
<template>
    <section class="header">
        <el-container>
            <el-aside class="avatar">
                <img src="../../assets/img/shop-logo.png" alt="">
            </el-aside>
            <el-main class="right">
                <div>{{seller.shopName}}</div>
                <div>{{seller.deliverName}}</div>
                <div>{{seller.deliverTime}}</div>
            </el-main>
        </el-container>
        <el-footer>xxx</el-footer>
    </section>
</template>

<script>
import {getSellerData} from './service';
export default {
    data() {
        return {
            test: '12'
        };
    },
    computed: {
        seller: function () {
            return getSellerData();
        }
    }
};

</script>
<style lang='less' scoped>
</style>
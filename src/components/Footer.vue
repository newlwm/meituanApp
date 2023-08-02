<template>
    <div class="footer">
        <div class="item">
            <router-link to="/" class="nav-item" active-class="item-color">首页
            <van-icon name="wap-home-o"  size="30" />
            </router-link>
        </div>
        <div class="item">
            <router-link to="/car" class="nav-item" active-class="item-color">购物车
            <van-icon name="cart-o" size="30" />
            </router-link>
        </div>
        <div class="item">
            <router-link to="/order" class="nav-item" active-class="item-color">订单
            <van-icon name="manager-o" size="30" />
            </router-link>
        </div>
        <div class="item">
            <router-link to="/mine" class="nav-item" active-class="item-color">我的
            <van-icon name="coupon-o" size="30" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Fotter'
}
</script>

<style lang="less" scoped>
    .footer {
        display: flex;
        background-color: #fff;
        border: 0.5px solid #eee;
        font-size: 12px;
        .item {
            flex: 1;
        }
        .item-color {
            color: #ffc400;
        }
        .nav-item {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
    }
</style>
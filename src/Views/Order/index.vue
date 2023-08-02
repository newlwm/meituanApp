<template>
    <div class="order">
        <Header title="订单" />
        <span @click="addressShow"> 展示地址</span>
        <div class="container">
            <van-tabs color="#ffc400">
                <van-tab :title="item" v-for="(item, index) in navData" :key="index"> </van-tab>
                <div v-for="(i, index) in store.state.cartList" :key="index">
                    <van-card
                        :num="i.num"
                        :price="i.price"
                        :title="i.title"
                        :thumb="i.pic"
                        />
                </div>
            </van-tabs>
        </div>
        <Footer ></Footer>
    </div>
    
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { reactive, toRefs} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    name:'Home',
    components:{
        Footer,
        Header
    },
    setup() {
        const store = useStore()
        const router = useRouter()
        const data = reactive({
            navData: ["全部", "交易完成", "待付款", "待发货", "已发货"]
        })
        const addressShow = () => {
            router.push('/address')
        }
        return {
            ...toRefs(data),
            store,
            addressShow
        }
    }
}
</script>
<style lang="less" scoped>
    .order {
        display: flex;
        flex-direction: column;
        height: 100%;
        .container {
            flex: 1;
            overflow-y:auto ;
        }
    }
</style>

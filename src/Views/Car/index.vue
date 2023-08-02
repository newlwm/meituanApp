<template>
    <div class="car">
        <div class="container">
        <Header title="购物车"/>
        <CarDetail v-if="isShow"/>
        <Empty v-else/>
        
        </div>
        <Footer ></Footer>
    </div>
    
</template>

<script>
import Footer from '@/components/Footer.vue'
import CarDetail from './components/CarDetail'
import Empty from '@/components/Empty.vue'
import Header from '@/components/Header.vue'
import { useStore } from 'vuex'
import { ref , onMounted} from 'vue'
export default {
    name:'Home',
    components:{
        Footer,
        Empty,
        Header,
        CarDetail
    },
    setup() {
        const isShow = ref(true)
        let store = useStore()
        const init = () => {
            if(store.state.length === 0) {
                isShow.value = false
            }
        } 
        onMounted(() => {
            init()
        }) 
        return {
            isShow
        }
    }
}
</script>
<style lang="less" scoped>
    .car {
        display: flex;
        flex-direction: column;
        height: 100%;
        .container {
            flex: 1;
            overflow-y:auto ;
        }
    }
</style>
<template>
    <div class="storeDetails">
        <Headers title="店铺"/>
        <div class="content">
            <div class="img"></div>
        
        <div class="foodSort">
            <div class="name">
                {{ title }}
                <img :src="img" alt="" class="store-img">
            </div>
        <van-tabs color="#ffc400">
            <van-tab v-for="(item, index) in storeData" 
            :title="item.name"
            :key="index">
                <FoodList :item="item" :index="index" :foodData="item.data" />
            </van-tab>
        </van-tabs>
        </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" dot />
      <van-action-bar-icon icon="cart-o" text="购物车" 
      :badge="store.state.cartList.length"
      @click="handleAddCart" />
      <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart"/>
      <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
    </van-action-bar>
</div>
</template>


<script>
import Headers from '../../components/Header.vue'
import FoodList from './components/FoodList.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { onMounted, reactive, toRefs} from 'vue'
import { getApiStoreData } from "../../api/api";
import { Toast } from 'vant/es'
export default {

    setup() {
      let store = useStore()
      let router = useRouter()
        let storeListData = reactive({
            title: '拿味酸菜鱼',
            img: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
            storeData: [],

        })
        const getStoreData = () => {
          getApiStoreData().then((res) => {
                storeListData.storeData = res
            })
          // axios.get('/home/getStoreData').then((res) => {
          //   console.log(res);
          //   const { code, storeData} = res.data
          //   if(code == 200) {
          //     data.storeData = storeData
          //   }
          // })
        }
        onMounted(() => {
          getStoreData()
        })
        const handleAddCart = () => {
          let newArr = store.state.cartList || []
          storeListData.storeData.forEach(item => {
            item.data.items?.forEach((item) => {
              item.children.forEach((item) => {
                if(item.num > 0) {
                  newArr.push(item.num)
                }
              })
            })
          })
          console.log(newArr);
          if(newArr.length === 0) {
            Toast('请选择商品')
            return
          }
          store.commit('addList', newArr)
          
        }
        const goBuy = () => {
          router.push('/car')
        }
        return {
            ...toRefs(storeListData),
            handleAddCart,
            store,
            router,
            goBuy
        }
    },
    components: {
        Headers,
        FoodList
    }
}
</script>

<style lang="less" scoped>
    .storeDetails {
    height: 100%;
    display: flex;
    flex-flow: column;
    .content {
      flex: 1;
      overflow-y: auto;
      .img {
        background: url("../../assets/yuna.jpg") no-repeat center/cover;
        width: 100%;
        height: 150px;
      }
      .foodSort {
        height: 500px;
        background-color: #fff;
        margin-top: -30px;
        border-radius: 20px 20px 0 0;

        .sort {
          margin-top: 10px;
        }
        .name {
          display: flex;
          padding: 20px;
          justify-content: space-between;
          .store-img {
            width: 80px;
            height: 80px;
            border-radius: 10px;
            margin-top: -30px;
          }
        }
      }
    }
  }
</style>
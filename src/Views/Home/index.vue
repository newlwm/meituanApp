<template>
  <div class="home">
    <div class="container">
      <!-- 头部 -->
      <div class="header">
        <div class="text">外卖</div>
        <div div class="location">
          <van-icon name="location-o" />
          <span>雷dada</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 主要内容 -->
      <div class="main">
        <div class="main-big">
          <div class="search">
            <input type="text" />
            <div class="search-text">搜索</div>
          </div>
          <div class="sort">
            <div class="big-sort">
              <div v-for="(item, index) in big_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
            <div class="small-sort">
              <div v-for="(item, index) in small_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <van-tabs v-model:active="active">
          <van-tab
            v-for="(item, index) in centent_nav_list"
            :title="item.tab"
            :key="index"
          >
            <ItemList :itemList="item.data" />
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import ItemList from "./homeList/ItemList";
import { reactive, toRefs, ref, onMounted } from "vue";
import { getApiHomeData } from "../../api/api";
export default {
  setup() {
    let active = ref(0);
    let data = reactive({
      big_sort: [],
      small_sort: [],
      centent_nav_list: [],
    });
    const getHomeData = () => {
      getApiHomeData().then((res) => {
        // console.log(res);
        data.big_sort = res.big_sort;
        data.small_sort = res.small_sort;
        data.centent_nav_list = res.centent_nav_list;
      });
      //   axios.get("/home/getHomeData").then((res) => {
      //     //   console.log(res);
      //     const {code, homeData} = res.data
      //     if(code == 200) {
      //         data.big_sort = homeData.big_sort
      //         data.small_sort = homeData.small_sort
      //         data.centent_nav_list = homeData.centent_nav_list
      //     }
      //     })
    };
    onMounted(() => {
      getHomeData();
    });
    return {
      ...toRefs(data),
      active,
    };
  },
  components: {
    Footer,
    ItemList,
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 12px;
  .container {
    flex: 1;
    overflow-y: auto;
    .header {
      background-image: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .locationspan {
        span {
          margin: 0 5px;
        }
        font-size: 14px;
      }
    }
    .main {
      margin-top: -30px;
      .main-big {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;
      }
      .search {
        position: relative;
        input {
          width: 100%;
          border-radius: 20px;
          height: 30px;
          border: 1px solid #ffc400;
        }
        .search-text {
          position: absolute;
          top: 1px;
          right: -6px;
          background-color: #ffc400;
          border-radius: 16px;
          width: 55px;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          text-align: center;
        }
      }
      .sort {
        padding: 20px 0;
        .big-sort {
          display: flex;
          div {
            display: flex;
            flex: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            .icon {
              width: 50px;
              height: 50px;
              margin-bottom: 5px 0;
            }
          }
        }
        .small-sort {
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 20%;
            .icon {
              width: 30px;
              height: 30px;
              margin: 10px;
            }
          }
        }
      }
    }
  }
}
</style>

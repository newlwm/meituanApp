<template>
  <div class="food-list" v-if="index === 0">
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="88vw"
      :items="items"
      @click-nav="navClick"
    >
      <template >
        <div v-for="(item, index) in subItems" :key="index" class="item-bg">
            <ListItem
            :item="item" 
            :handle="handle"
            :changeNum="changeNum"
             /> 
        </div>
     </template>
    </van-tree-select>
  </div>

  <div v-else>
    {{ foodData.content }}
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import ListItem from '../../../components/ListItem.vue';
export default {
  components: { 
    ListItem
    },
  props: ["index", "foodData"],
  setup(props) {
    let data = reactive({
      activeIndex: 0,
      items: [],
      subItems: []
    });
    const initDta = () => {
      const newArr = [];
      props.foodData?.items?.forEach((item, index) => {
        newArr.push({
          text: item.text,
        });
        if(data.activeIndex === index) {
            data.subItems = item.children
        }
      });
      data.items = newArr;
    };
    initDta();

    const navClick = (index) => {
      data.activeIndex = index;
      initDta();
    };
    const handle = (id) => {
        data.subItems.forEach((item, index) => {
            if(item.id === id) {
                item.add = false
            }
        })
        }
    const changeNum = (value, detail) => {
        data.subItems.forEach((item) => {
            if(item.id === detail.Nameid) {
                item.num = value
            }
            item.num+= 1
        })
        // console.log(data.subItems);
    }
    return {
      ...toRefs(data),
      navClick,
      handle,
      changeNum
    };
  },
};
</script>

<style lang="less" scoped>
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
}
/deep/ .van-tree-select__item--active {
  color: #ffc400;
}
/deep/ .van-sidebar-item--select::before {
  background-color: #ffc400;
}
</style>

<template>
  <Headers :title="address" />
  <van-address-edit
    :area-list="areaList"
    show-delete
    show-set-default
    show-search-result
    :address-info="addressInfo"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
  />
</template>

<script>
import Headers from "../../components/Header.vue";
import { computed, onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Toast } from 'vant/es';
export default {
  setup() {
    let store = useStore();
    let route = useRoute();
    let router = useRouter();
    const data = reactive({
      areaList: {
        province_list: {
          110000: "广东省",
          120000: "浙江省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "天河区",
          110102: "海珠区",
          120102: "上城区",
          130102: "下城区",
        },
      },
      addressInfo: {},
    });
    const onSave = (content) => {
       if(route.query.type === 'add') {
        store.commit('addaddress', content)
       }else {
        store.commit('editaddress', content)
       }
       Toast('保存成功')
       setTimeout( () => {
        router.back()
       },1000)
    };
    const address = computed(() => {
        return route.query.type === 'add'? '新增收货地址' : '编辑收货地址'
    })
    const onDelete = (content) => {
        store.commit('deleteaddress', content)
         Toast('删除成功')
        setTimeout( () => {
        router.back()
       },1000)
    };
    const init = () => {
      //初始化
      store.state.addressList.forEach(item => {
        // debugger
        // console.log(Number(route.query.id));
        if (item.id === Number(route.query.id)) {
          data.addressInfo = item;
        }
      });
    };
    onMounted(() => {
      init();
    });

    return {
      ...toRefs(data),
      onSave,
      onDelete,
      address
    };
  },
  components: {
    Headers,
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
</style>

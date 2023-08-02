<template>
    <Headers title="地址管理" />
    <van-address-list
        :list="list"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Headers from '../../components/Header.vue'
export default {
    setup() {
      let store = useStore()
      let router = useRouter()
      const onAdd = () => {
        router.push({
          path: '/addressedit',
          query: {
            type: 'add'
          }
        })
      }
      const onEdit = (item) => {
        router.push({
          path: '/addressedit',
          query: {
            id: item.id,
            type:'edit'
          }
        })
      }
      const data =  reactive({
        list: []
      })
      data.list = store.state.addressList.map(item => {
        return {
          name: item.name,
          tel: item.tel,
          id: item.id,
          address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
          isDefault: item.isDefault,
        }
      })
      return {
        onAdd,
        onEdit,
        ...toRefs(data),
      }
    },
    components: {
        Headers
    }
    }
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
/deep/ .van-radio__icon {
  display: none;
}
</style>
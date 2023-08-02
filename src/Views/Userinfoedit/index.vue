<template>
  <Header title="账号管理" />
  <div>
    <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
    <van-field v-model="sign" label="个性签名" placeholder="个性签名" />
    <van-field v-model="pass" label="密码" placeholder="请输入密码" />
  </div>
  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="save"
    >保存
  </van-button>
  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="logOut"
    >退出登录
  </van-button>
</template>

<script>
import Header from "../../components/Header.vue";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  setup() {
    const router = useRouter();
    const data = reactive({
      name: "",
      sign: "超越自我",
      pass: "",
    });
    const save = () => {
        if(data.name && data.pass) {
            let userInfo = JSON.parse(localStorage.getItem("userInfo"))
            let newUserInfo = {
             use: userInfo.name || data.name,
             pass: data.pass || userInfo.pass
            }
            localStorage.setItem("userInfo", JSON.stringify(newUserInfo))
            Toast("保存成功")
            router.push('/mine')
        }else {
            Toast('请输入完整信息')
        }
    }
    const logOut = () => {
        localStorage.removeItem('isLogin')
        Toast('退出成功')
        router.push('/login')
    }
    return {
        ...toRefs(data),
        save,
        logOut
    }
  },
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>

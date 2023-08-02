<template>
  <div class="register">
    <Header title="注册" />
    <div class="img">买团</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="use"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="pass"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button 
        roun 
        block 
        type="info" 
        native-type="submit" 
        color="#ffc400">
          提交
        </van-button>
      </div>
      <div style="margin: 16px">
        <van-button
          roun
          block
          type="info"
          native-type="submit"
          color="#ffc400"
          @click="toLogin"
        >
          去登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Header  from '../../components/Header.vue'
import { useRouter } from 'vue-router'
import {reactive, toRefs} from 'vue'
import { Toast } from 'vant';
export default {
    setup() {
        const router = useRouter()
        const data = reactive({
            username: '',
            password: ''
        })
        const onSubmit = (value) => {
            // console.log(value);
            if(localStorage.userInfo) {
                 let info = JSON.parent(localStorage.getItem('userInfo'))
                 if(info['use'] === value['use']) {
                    Toast('用户名已经存在')
                    return
                 }
        }else {
             Register(value)
        }
        }
        const Register = (value) => {
            localStorage.setItem('userInfo', JSON.stringify(value))
             router.push('/login')
        }
        const toLogin = () => {
            router.push('/login')
        }
        return {
            ...toRefs(data),
            onSubmit,
            toLogin,
            Register
        }
    },
    components: {
        Header
    }
    
};
</script>

<style lang="less" scope>
.register {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>

<template>
  <div class="login">
    <Header title="登录"/>
    <div class="img">买团</div>
    <van-form @submit="onSubmit">
    <van-field
      v-model="use"
      type="username"
      name="use"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="pass"
      type="password"
      name="pass"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  <div style="margin: 16px;">
    <van-button 
     roun
     block 
     type="info" 
     native-type="submit"
     color="#ffc400"
     >
      提交
    </van-button>
  </div>
  <div style="margin: 16px;">
    <van-button 
     roun
     block 
     type="info" 
     native-type="submit"
     color="#ffc400"
     @click="toRegister"
     >
      去注册
    </van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import Header  from '../../components/Header.vue'
import { useRouter } from 'vue-router'
import {reactive, toRefs} from 'vue'
import { Toast } from 'vant/es';
export default {
    setup() {
        const router = useRouter()
        const data = reactive({
            use: '',
            pass: ''
        })
        const onSubmit = (value) => {
            if(!localStorage.userInfo) {
                Toast('账号未注册')
                return 
            }else {
                let info = JSON.parse(localStorage.userInfo)
                if(info['use'] === value['use'] ) {
                 if(info['pass'] === value['pass'] ) {
                    Toast('登录成功')
                    localStorage.setItem('isLogin', 'login')
                    router.push('/')
                }else {
                   Toast('密码错误')
                }
            }else {
                Toast('请先注册')
                router.push('/register')
            }
        }
        }
        const toRegister = () => {
            router.push('/register')
        }
        return {
            ...toRefs(data),
            onSubmit,
            toRegister
        }
    },
    components: {
        Header
    }
};
</script>

<style lang="less" scoped>
.login {
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

import { createRouter, createWebHistory} from 'vue-router'
import  { Toast } from 'vant'
// const routes = 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../Views/Home')
        },
        {
            path: '/car',
            component: () => import('../Views/Car'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/order',
            component: () => import('../Views/Order'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/mine',
            component: () => import('../Views/Mine')
        },
        {
            path: '/store',
            component: () => import('../Views/Store')
        },
        {
            path: '/address',
            component: () => import('../Views/Address'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/addressedit',
            component: () => import('../Views/AddressEdit'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/userinfoedit',
            component: () => import('../Views/Userinfoedit'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/login',
            component: () => import('../Views/Login')
        },
        {
            path: '/register',
            component: () => import('../Views/Registry')
        }
    ]
})
router.beforeEach((to, from,  next) => {
    if(to.meta.isAuth) {
        if(localStorage.isLogin == 'login') {
            next()
        }else {
            next('/login')
            Toast('请先去登录')
        }
    }else {
        next()
    }
})

export default router
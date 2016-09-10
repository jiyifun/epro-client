// import { setDocTitle } from '../util'
// 业务模块
import Health from '../views/Health'
import Mine from '../views/Mine'
import Clinics from '../views/Clinics'
import Normal from '../views/article/Normal'
import Warning from '../views/article/Warning'
// import App from '../App'
// 注册模块
import RegisterByWx from '../views/register/WeiXin'
import RegisterByPhone from '../views/register/Phone'

export function configRouter (router) {
  router.map({
    '/': {
      component: Health
    },
    '/register/': {
      component: RegisterByPhone
    },
    '/register/weixin': {
      component: RegisterByWx
    },
    '/register/phone': {
      component: RegisterByPhone
    },
    '/health': {
      component: Health
    },
    '/mine': {
      component: Mine
    },
    '/clinics': {
      component: Clinics
    },
    '/article/normal/:project': {
      component: Normal,
      name: 'normal'
    },
    '/article/warning/:project': {
      component: Warning,
      name: 'warning'
    }
  })
  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  // router.beforeEach((transition) => {
  //   setDocTitle(transition.to.title)
  //   transition.next()
  // })
}

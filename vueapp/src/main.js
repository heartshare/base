import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 配置
import Env from './env'
document.title = Env.title;
// APP
createApp(App).use(store).use(router).mount('#app')

/* 用户点击播放问题 */
document.body.ontouchstart = ()=>{
  try{
    if(plus.os.name!='iOS') document.createElement('audio');
  }catch(e){
    document.createElement('audio');
  }
}

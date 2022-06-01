import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import TodoLogin from '../components/TodoLogin'
import TodoContents from '../components/TodoContents'
import TodoContentsForKakao from '../components/TodoContentsForKakao'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: TodoLogin },
        { path: '/todo', component: TodoContents },
        { path: '*', component: TodoLogin },
        { path: '/todoforkakao', component: TodoContentsForKakao}
    ]
})
//const kakaoHeader = {
 //   'Authorization': '4938eec69e39c38d73e8bab8bdf2b639',
  //  'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//};
//const getKakaoToken = async (code) => {
//    console.log('loginWithKakao');
//    try {
//        const data = {
//            grant_type: 'authorization_code',
//            client_id: '0fa14b804ad154e9c45cd8285655ba63',
//            redirect_uri: 'http://mobprac.web.app/todoforkakao',
 //           code: code,
 //       };
  //      const queryString = Object.keys(data)
    //        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
     //       .join('&');
      //  const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
     //   console.log('카카오 토큰', result);
     //   return result;
   // } catch (e) {
    //    return e;
   // }
//};
export default router
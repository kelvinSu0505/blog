import Vue from 'vue';
import Router from 'vue-router';

// Login 登陆
import LoginView from '../components/login/Login.vue'
// List
import ListView from '../components/list/List.vue'
// 首页设置
import setHome from '../components/home/setHome.vue'
// Publish 发布
import PublishView from '../components/publish/Publish.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },{
            path: '*',
            redirect: '/login'
        },{
            path: '/list',
            component: ListView
        },{
            path: '/sethome',
            component: setHome
        },{
            path: '/login',
            component: LoginView
        },{
            path: '/publish',
            component: PublishView
        }
    ]
});
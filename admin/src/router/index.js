import Vue from 'vue';
import Router from 'vue-router';

// Login 登陆
import LoginView from '../components/login/Login.vue'
// List 登陆
import ListView from '../components/list/List.vue'
// Publish 发布
import PublishView from '../components/publish/Publish.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: '/list'
        },{
            path: '*',
            redirect: '/list'
        },{
            path: '/list',
            component: ListView
        },{
            path: '/login',
            component: LoginView
        },{
            path: '/publish',
            component: PublishView
        }
    ]
});
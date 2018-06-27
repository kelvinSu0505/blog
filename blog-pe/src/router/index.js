import Vue from 'vue';
import Router from 'vue-router';
// 首页
import HomeView from '../components/home/Home.vue';
// 列表页
import ListView from '../components/list/List.vue';
// 详情页
import DetailView from '../components/detail/Detail.vue';
// 关于我
import AboutView from '../components/about/About.vue';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },{
            path: '*',
            redirect: '/index'
        },{
            path: '/index',
            component: HomeView
        },{
            path: '/list',
            component: ListView
        },{
            path: '/detail',
            component: DetailView
        },{
            path: '/about',
            component: AboutView
        }
    ]
});

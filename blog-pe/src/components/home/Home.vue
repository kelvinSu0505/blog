/*
 * @Author: YorkeD 
 * @Date: 2018-04-26 15:54:20 
 * @Last Modified by: Yorke
 * @Last Modified time: 2018-06-28 15:03:00
 * 首页
 */
<template>
    <div class="home-con">
        <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
            <div class="home-no1 animated" v-show="indexStatus">
                <div class="welcome-box">
                    <h3 class="welcome-title">欢迎来到我的博客~</h3>
                    <h1 class="welcome-name">Hello , I'm Yorke</h1>
                    <p class="welcome-intro">
                        <span class="intro-no1">前端开发人员</span>
                        <span class="intro-no2">斜杠青年保留处~</span>
                    </p>
                    <Button type="ghost" @click="goScroll" icon="ios-arrow-down">精彩文章</Button>
                </div>
                <PrintedView  v-bind:PrintedData="PrintedTextData"></PrintedView>
                <ul class="intro-social">
                    <li>
                        <a title="我的GitHub" target="_blank" href="https://github.com/yorke19900505">
                            <Icon type="social-github" size="36" color="#fff" />
                        </a>
                    </li>
                    <li>
                        <a title="我的QQ" target="_blank" href="tencent://message/?uin=85789611&site=在线咨询&menu=yes">
                            <i class="iconfont">&#xe6b4;</i>
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
        <transition enter-active-class="bounceQutRight" leave-active-class="bounceQutDown">
            <div class="home-no2 animated" v-show="!indexStatus">
                <ul class="home-list">
                    <div class="title-box">
                        <i class="iconfont l">&#xe67d;</i>
                        <h3 class="list-title l">最新文章</h3>
                        <span @click="goMore" title="查看更多" class="list-more r">更多</span>
                    </div>
                    <router-link tag="li" to="/detail?id=1">
                        <span title="【Java Script】前端基础知识讲解" class="list-text l">【Java Script】前端基础知识讲解</span>
                        <span title="发布时间：2018-4-26" class="list-time r">2018-4-26</span>
                    </router-link>
                    <router-link tag="li" to="/detail?id=1">
                        <span title="【Java Script】前端基础知识讲解" class="list-text l">【Java Script】前端基础知识讲解</span>
                        <span title="发布时间：2018-4-26" class="list-time r">2018-4-26</span>
                    </router-link>
                    <router-link tag="li" to="/detail?id=1">
                        <span title="【Java Script】前端基础知识讲解" class="list-text l">【Java ScriJava ScriJava Script】前端基础知识讲解</span>
                        <span title="发布时间：2018-4-26" class="list-time r">2018-4-26</span>
                    </router-link>
                    <router-link tag="li" to="/detail?id=1">
                        <span title="【Java Script】前端基础知识讲解" class="list-text l">【Java Script】前端基础知识讲解</span>
                        <span title="发布时间：2018-4-26" class="list-time r">2018-4-26</span>
                    </router-link>
                    <router-link tag="li" to="/detail?id=1">
                        <span title="【Java Script】前端基础知识讲解" class="list-text l">【Java Script】前端基础知识讲解</span>
                        <span title="发布时间：2018-4-26" class="list-time r">2018-4-26</span>
                    </router-link>
                    <router-link tag="li" to="/detail?id=1">
                        <span title="【Java Script】前端基础知识讲解" class="list-text l">【Java Script】前端基础知识讲解</span>
                        <span title="发布时间：2018-4-26" class="list-time r">2018-4-26</span>
                    </router-link>
                </ul>
                <div class="go-top" @click="goTop">
                    <i title="返回第一屏" class="iconfont">&#xe612;</i>
                </div>
            </div>
        </transition>
        <LoadingView v-if="loadingStatus"></LoadingView>
    </div>
</template>
<script>
import '../../assets/sass/home/home.sass'
import LoadingView from '../common/Loading.vue'
import PrintedView from '../common/PrintedText.vue'
export default {
    data(){
        return{
            loadingStatus:1,        // 控制Loading
            indexStatus:1,          // 控制分屏
            PrintedTextData:'If life is divided by two , the former is "no hesitation" and the later is "no regret". ',         // 打印效果的文字
        }
    },
    beforeCreate(){

    },
    beforeMount () {
        let vm = this;
        vm.loadingStatus = 0;
        // setTimeout(() => {
        //     this.loadingStatus = 0;
        // }, 3000);
        vm.$nextTick(function () {
            window.addEventListener('scroll', vm.onScroll)
        })
    },
    methods:{
        goScroll(){
            this.indexStatus = 0;
        },
        // 返回第一屏
        goTop(){
            this.indexStatus = 1;
        },
        // 查看更多
        goMore(){
            this.$router.push({path:'/list'})
        },
    },
    components:{
        LoadingView,
        PrintedView
    }
}
</script>

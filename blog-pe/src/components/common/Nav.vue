/*
 * @Author: YorkeD 
 * @Date: 2018-04-25 20:07:52 
 * @Last Modified by: YorkeD
 * @Last Modified time: 2018-04-26 16:38:23
 * 导航组件 -- 全站公用
 */
<template>
    <div class="nav-box">
        <div class="nav-menu" @click="navBtn" v-bind:class="{is_clicked:isClicked == 1}">
            <span>Menu</span>
        </div>
        <div class="nav-logo"></div>
        <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
            <nav class="nav-con animated" v-show="isClicked">
                <ul class="con-box">
                    <li @click="navTabBtn(index)" :class="{opt_nav:navIndex == index}" v-for="(navData,index) in navMenuData">{{navData}}</li>
                </ul>
            </nav>
        </transition>
    </div>
</template>
<script>
import '../../assets/sass/common/nav.sass'
export default {
    data(){
        return{
            navMenuData:['Home','List','About'],        // 导航title
            navIndex:0,                                 // navIndex
            isClicked:0,                                // 控释Muen动画
        }
    },
    beforeCreate(){

    },
    beforeMount () {
        
    },
    methods:{
        navTabBtn(index){
            let vm = this;
            vm.navIndex = index;
            vm.isClicked = 0;
            if(index == 0){
                vm.$router.push({path:'/index'});
            }else if(index == 1){
                vm.$router.push({path:'/list'});
            }else if(index == 2){
                vm.$router.push({path:'/about'});
            }
        },
        navBtn(){
            let vm = this;
            if(vm.isClicked == 0){
                vm.isClicked = 1;
            }else{
                vm.isClicked = 0;
            }
        }
    },
    components:{

    }
}
</script>

<template>
    <div id="app">
        <NavView></NavView>
        <transition enter-active-class="rollIn" leave-active-class="rollOut">
            <router-view class="animated"></router-view>
        </transition>
        <FooterView v-if="showFooter"></FooterView>
    </div>
</template>

<script>
import NavView from './components/common/Nav.vue'
import FooterView from './components/common/Footer.vue'
export default {
    name: 'App',
    components:{
        NavView,
        FooterView,
    },
    data(){
        return{
            showFooter: true
        }
    },
    beforeMount(){
        
    },
    mounted: function(){
        
    },
    methods: {
        
    },
    watch: {
        $route(to,from){
            console.log(to.path);
            if(to.path == '/about'){
                this.showFooter = false;
            }else{
                this.showFooter = true;
            }
        }
    }
   
}
</script>

<style>
#app{
    background: url(./assets/images/intro-bg.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    position: fixed;
}
</style>

<template>
    <div id="app">
        <HeaderIview v-if="commonStatus"></HeaderIview>
        <NavIview v-if="commonStatus"></NavIview>
        <router-view></router-view>
    </div>
</template>

<script>
import NavIview from './components/common/Nav.vue'
import HeaderIview from './components/common/Header.vue'
export default {
    name: 'app',
    components:{
        NavIview,
        HeaderIview
    },
    data () {
        return {
            commonStatus:0,
        }
    },
    beforeMount () {
        console.log(this.$route.path);
        if(this.$route.path == '/login'){
            this.commonStatus = 0;
        }else{
            this.commonStatus = 1;
        }
    }
}
</script>

<style>

</style>

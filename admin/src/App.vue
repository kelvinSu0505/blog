<template>
    <div id="app">
        <HeaderIview></HeaderIview>
        <NavIview></NavIview>
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
            
        }
    }
}
</script>

<style>

</style>

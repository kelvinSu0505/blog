/*
 * @Author: YorkeD
 * @Date: 2018-04-24 19:47:46
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-01 19:41:52
 * 加载层动画组件 -- 全站公用
 */
<template>
    <div class="loading-box">
        <div class="loader"></div>
    </div>
</template>
<script>
import '../../assets/sass/common/loading.sass'
export default {
    data(){
        return{
          status : 0,
        }
    },
    beforeCreate(){

    },
    beforeMount () {

    },
    methods:{

    },
    components:{

    }
}
</script>

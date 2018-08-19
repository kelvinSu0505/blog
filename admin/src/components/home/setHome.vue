<template>
    <div class="home-box l">
        <!-- 首页动态文字展示 -->
        <div class="home-text-box">
            <span class="home-text">首页文字：</span>
            <Input placeholder="首页动态文字" style="width:500px" v-model="indexText"/>
        </div>  
        <div class="home-text-box">
            <span class="home-text">GitHub：</span>
            <Input placeholder="GitHub地址" style="width:500px" v-model="indexGitHub"/>
        </div>  
        <div class="home-text-box">
            <span class="home-text">QQ：</span>
            <Input placeholder="qq" style="width:500px" v-model="indexQQ"/>
        </div>
        <Button type="primary" @click="saveBtn">保存更改</Button>
    </div>
</template>

<script>
import '../../assets/sass/home.sass'
export default {
    data() {
        return {
            indexText:'',
            indexGitHub:'',
            indexQQ:'',
        }
    },
    methods: {
        saveBtn(){
            
        }
    }
}
</script>

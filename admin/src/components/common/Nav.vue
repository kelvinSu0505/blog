/*
 * @Author: YorkeD 
 * @Date: 2018-05-06 18:09:32 
 * @Last Modified by: YorkeD
 * @Last Modified time: 2018-05-06 18:30:19
 * 导航栏--公共组建
 */
<template>
    <div class="nav-box l">
        <Menu :theme="theme" :open-names="navName" :active-name="nameData" accordion @on-select="menuBtn">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    内容管理
                </template>
                <MenuItem name="1-1">文章管理</MenuItem>
                <MenuItem name="1-2">评论管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <MenuItem name="3-1">访问分析</MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<script>
export default {
    data(){
        return{
            theme: 'dark',
            navName:['1'],
            nameData:'1-1',
        }
    },
    beforeCreate(){

    },
    beforeMount(){

    },
    methods:{
        menuBtn(name){
            let vm = this;
            vm.nameData = name;
            if(name == '1-1'){
                vm.$router.push({path:'/list'});
            }
        }
    },
    components: {
        
    }
}
</script>

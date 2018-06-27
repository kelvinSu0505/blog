<template>
    <div class="list-box l">
        <div class="list-top">
            <Button type="primary" @click="goPublish">发布文章</Button>
        </div>
        <Table :loading="listLoading" :columns="columns1" @on-row-click="goEdit" :data="data1"></Table>
        <Modal
            v-model="layerStatus"
            title="编辑询问"
            :loading="layerLoading"
            @on-ok="asyncOK">
            <p>确定要修改{{layerText}}的内容么？</p>
        </Modal>
    </div>
    
</template>

<script>
import '../../assets/sass/list.sass'
export default {
    data(){
        return{
            columns1: [
                {
                    title: '序号',
                    key: 'num_index'
                },
                {
                    title: '文章分类',
                    key: 'text_class'
                },
                {
                    title: '文章标题',
                    key: 'text_title'
                },
                {
                    title: 'Time',
                    key: 'date'
                }
            ],
            data1: [
                {
                    num_index:'1',
                    text_class:'Nodejs',
                    text_title:'基础环境搭建',
                    date: '2016-10-03'
                },
                {
                    num_index:'2',
                    text_class:'Nodejs',
                    text_title:'基础环境搭建',
                    date: '2016-10-01'
                },
                {
                    num_index:'3',
                    text_class:'Nodejs',
                    text_title:'基础环境搭建',
                    date: '2016-10-02'
                },
                {
                    num_index:'4',
                    text_class:'Nodejs',
                    text_title:'基础环境搭建',
                    date: '2016-10-04'
                }
            ],
            listLoading:false,              // 列表Loading效果控制
            layerStatus:false,              // 弹窗开关控制
            layerLoading:true,              // 弹窗Loading控制
            layerText:'',                   // 弹窗内容控制
        }
    },
    beforeCreate(){
        
    },
    beforeMount(){

    },
    methods: {
        // 编辑
        goEdit(data){
            let vm = this;
            console.log(data);
            vm.layerText = data.name;
            vm.layerStatus = true;
        },
        // 弹窗确认
        asyncOK(){
            let vm = this;
            vm.layerStatus = false;
        },
        // 发布文章
        goPublish(){
            this.$router.push({path:'/publish'})
        }
    }
}
</script>

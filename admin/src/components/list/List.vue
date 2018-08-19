<template>
    <div class="list-box l">
        <div class="list-top">
            <Button type="primary" @click="goPublish">发布文章</Button>
        </div>
        <Table :loading="listLoading" :columns="columns1" @on-row-click="goEdit" :data="data1"></Table>
        <Modal
            v-model="statusType"
            title="编辑询问"
            @on-ok="asyncOK">
            <div class="list-btn-all">
                <Button type="primary" @click="downBtn">读者不可见</Button>
                <Button type="primary" @click="upBtn">读者可见</Button>
                <Button type="primary" @click="editBtn">重新编辑</Button>
            </div>
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
                    title: '是否原创',
                    key: 'type_class'
                },
                {
                    title: '文章标题',
                    key: 'text_title'
                },
                {
                    title: 'Time',
                    key: 'date'
                },
                {
                    title: '文章状态',
                    key: 'status'
                }
            ],
            data1: [
                {
                    num_index:'1',
                    text_class:'Nodejs',
                    type_class:'是',
                    text_title:'基础环境搭建',
                    date: '2016-10-03',
                    status:'读者可见'
                },
                {
                    num_index:'2',
                    text_class:'Nodejs',
                    type_class:'否',
                    text_title:'基础环境搭建',
                    date: '2016-10-01',
                    status:'读者不可见'
                },
                {
                    num_index:'3',
                    text_class:'Nodejs',
                    type_class:'是',
                    text_title:'基础环境搭建',
                    date: '2016-10-02',
                    status:'读者可见'
                },
                {
                    num_index:'4',
                    text_class:'Nodejs',
                    type_class:'否',
                    text_title:'基础环境搭建',
                    date: '2016-10-04',
                    status:'读者不可见'
                }
            ],
            listLoading:false,              // 列表Loading效果控制
            statusType:false                // 控制询问弹层
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
            vm.statusType = true;
        },
        asyncOK(){

        },
        // 发布文章
        goPublish(){
            this.$router.push({path:'/publish'})
        },
        // 读者不可见
        downBtn(){

        },
        // 读者可见
        upBtn(){

        },
        // 编辑
        editBtn(){

        }
    }
}
</script>

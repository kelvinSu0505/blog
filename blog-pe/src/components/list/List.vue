/*
 * @Author: YorkeD 
 * @Date: 2018-04-27 22:34:02 
 * @Last Modified by: YorkeD
 * @Last Modified time: 2018-04-29 19:33:50
 * 列表页
 */
<template>
    <div class="list-box">
        <div class="list-cont-box">
            <div class="list-title-box">
                <h2 class="title-text">不忘初心，方得始终~！</h2>
            </div>
            <div class="list-main">
                <div class="main-box">
                    <ul class="main-top">
                        <li class="top-input-box l">
                            <span class="input-title">按文章名称：</span>
                            <Input v-model="seachValue" placeholder="请输入文章名称" style="width: 200px"></Input>
                        </li>
                        <li class="top-input-box l">
                            <span class="input-title">按文章类型：</span>
                            <Select v-model="seachSelect" style="width:200px" @on-change="selectBtn">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </li>
                        <li class="top-input-box l">
                            <Button type="primary" @click="submitBtn">确定</Button>
                        </li>
                    </ul>
                    <Table :loading="loading" :columns="columns3" :data="data1" @on-row-click="goDetail"></Table>
                    <Page :total="100" :page-size="10" @on-change="pageBtn"></Page>
                </div>
            </div>
        </div>
        <LoadingView v-if="loadingStatus"></LoadingView>
    </div>
</template>
<script>
import LoadingView from '../common/Loading.vue'
import '../../assets/sass/list/list.sass'
export default {
    data(){
        return{
            seachValue:'',
            seachSelect:'',
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            loadingStatus:1,        //控制Loading
            loading: false,
            columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '文章标题',
                        key: 'name'
                    },
                ],
            data1: [
                {
                    name: 'John Brown',
                },
                {
                    name: 'Jim Green',
                },
                {
                    name: 'Joe Black',
                },
                {
                    name: 'Jon Snow',
                },
                {
                    name: 'Jim Green',
                },
                {
                    name: 'Joe Black',
                },
                {
                    name: 'Jon Snow',
                },
                {
                    name: 'Jim Green',
                },
                {
                    name: 'Joe Black',
                },
                {
                    name: 'Jon Snow',
                },
            ]
        }
    },
    beforeCreate(){

    },
    beforeMount () {
        // setTimeout(() => {
            this.loadingStatus = 0;
        // }, 3000);
    },
    methods:{
        goDetail(data,index){
            console.log(data,'data');
            console.log(index)
            this.$router.push({path:'/detail',query:{id:index}})
        },
        submitBtn(){
            let vm = this;
            if(vm.seachValue == '' && vm.seachSelect == ''){
                this.$Message.error({
                    content:'请填写文章名称或文章类型',
                    duration:3
                })
            }
        },
        pageBtn(page){
            console.log(page);
        },
        selectBtn(value){
            console.log(value);
        }
    },
    components:{
        LoadingView
    }
}
</script>

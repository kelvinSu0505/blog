<template>
    <div class="publish-box l">
        <div class="publish-top-box">
            <Input placeholder="文章标题" v-model="articleTitle" icon="android-list"/>
        </div>
        <div class="publish-select-class">
            <Select v-model="selectClass" placeholder="请选择文章分类" style="width:200px" @on-change="selectBtn">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select v-model="essayType" placeholder="请选择是否是原创" style="width:200px" @on-change="selectTypeBtn">
                <Option v-for="item in essayTpyeData" :value="item.id" :key="item.id">{{ item.title }}</Option>
            </Select>
            <Input placeholder="请输入作者" v-model="authorName" style="width:200px"/>
            <Input placeholder="请输入原创地址" v-if="!essayType" v-model="essayLink" style="width:200px"/>
        </div>
        <div class="markdown_box">
            <markdownEditor v-model="markdownCont" ref="markdownEditor"></markdownEditor>
        </div>
        <div class="publish-btn-box">
            <Button type="primary" @click="submitBtn">确定提交</Button>
        </div>
    </div>
</template>

<script>
import '../../assets/sass/publish.sass'
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import axios from 'axios'
export default {
    data(){
        return{
            cityList: [
                {
                    value: 0,
                    label: 'JavaScript'
                },
                {
                    value: 1,
                    label: 'CSS'
                },
                {
                    value: 2,
                    label: 'Vue'
                },
                {
                    value: 3,
                    label: 'Npm'
                },
                {
                    value: 4,
                    label: 'Webpack'
                },
                {
                    value: 5,
                    label: '其他'
                }
            ],
            essayTpyeData:[
                {
                    id:1,
                    title:'是'
                }
                ,{
                    id:0,
                    title:'否'
                }
            ],
            selectClass: '',         // 分类
            articleTitle:'',        // 文章标题
            markdownCont:'',        // 文章内容
            authorName:'',          // 作者
            essayType:1,            // 是否是原创 1是，0否
            essayLink:'',           // 非原创连接
        }
    },
    beforeMount () {
        
    },
    mounted () {
     
    },
    methods:{
        selectBtn(value){
            console.log(value);
            console.log(this.selectClass)
        },
        selectTypeBtn(value){

        },  
        submitBtn(){
            axios({
                url:'http://localhost:3000/detail/save_detial',
                method: 'post',
                data:{
                    authorName: this.authorName,
                    essayType: this.essayType,
                    essayLink: this.essayLink,
                    typeId: this.selectClass,
                    essayCont: this.markdownCont,
                    essayTitle: this.articleTitle
                }
            }).then(res=>{
                console.log(res);
                if(res.data.code == 200 && res.data.msg){
                    this.$Message.success('发布成功');
                    this.$router.push('/list')
                }else{
                    this.$Message.error('发布失败');
                }
                
            }).catch((err)=>{
                console.log(err);
                this.$Message.error('发布失败');
            })
        }
    },
    components:{
        markdownEditor
    }
}
</script>

<style>
@import '~simplemde/dist/simplemde.min.css';
</style>

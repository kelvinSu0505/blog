<template>
    <div class="publish-box l">
        <div class="publish-top-box">
            <Input placeholder="文章标题" v-model="articleTitle" @on-blur="handleArticletitleBlur" icon="android-list"/>
        </div>
        <div class="publish-select-class">
            <Select v-model="selectClass" placeholder="请选择文章分类" style="width:200px" @on-change="selectBtn">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
        <div class="markdown_box">
            <textarea v-model="markdownCont" placeholder="请输入内容" id="markdown_editor" style="display:none;"></textarea>
        </div>
        <div class="publish-btn-box">
            <Button type="primary" @click="submitBtn">确定提交</Button>
        </div>
    </div>
</template>

<script>
import '../../assets/sass/publish.sass'
import SimpleMDE from 'simplemde'
import '../../assets/css/simplemde.min.css'
export default {
    data(){
        return{
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
            selectClass: '',             // 分类
            articleTitle:'',        // 文章标题
            markdownCont:'',        // 文章内容
        }
    },
    mounted () {
        new SimpleMDE({
            element: document.getElementById('markdown_editor'),
            toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'guide']
        });
    },
    beforeMount () {
        
    },
    methods:{
        handleArticletitleBlur(){
            let vm = this;
            if(vm.articleTitle != '' ){

            }else{
                this.$Message.error('文章标题不可为空哦');
            }
        },
        selectBtn(value){
            console.log(value);
            console.log(this.selectClass)
        },
        submitBtn(){
            console.log('提交')
        }
    },
    components:{

    }
}
</script>


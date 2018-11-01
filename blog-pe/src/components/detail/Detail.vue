/*
 * @Author: YorkeD
 * @Date: 2018-04-27 22:34:20
 * @Last Modified by: Yorke
 * @Last Modified time: 2018-06-28 17:10:57
 * 详情页
 */
<template>
    <div class="detail-box">
        <div class="detail-cont-box">
            <div class="detail-title-box">
                <h2 class="title-text">【转】前端学习曲线图</h2>
                <span class="back-btn" @click="backBtn">
                    返回列表
                </span>
            </div>
            <div class="detail-main">
                <div class="main-box">
                    <div class="text-box">
                        <ul class="essay-class w">
                            <li class="class-text l">
                                <i class="iconfont l">&#xe67d;</i>
                                <span class="l">文章类型：原创文章</span>
                            </li>
                            <li class="class-text l">
                                <i class="iconfont l">&#xe67d;</i>
                                <span class="l">文章类型：</span>
                                <a href="" title="本文出处">
                                    <span class="l">转载文章</span>
                                </a>
                            </li>
                            <li class="class-text l">
                                <i class="iconfont l">&#xe60e;</i>
                                <span class="l">发布时间：</span>
                            </li>
                            <li class="class-text r">
                                <i class="iconfont l">&#xe6a2;</i>
                                <span class="l">浏览：123</span>
                            </li>
                        </ul>
                        <p class="essay-hint">
                            尊重原创，"拿来"有道；<span class="hint-text">如需转载请注明出处。</span>
                        </p>
                        <p class="essay-export">
                            文章内容区
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '../../assets/sass/list/detail.sass'
export default {
    data(){
        return{

        }
    },
    beforeCreate(){

    },
    beforeMount () {

    },
    methods:{
        // 后退按钮
        backBtn(){
            this.$router.push({path:'/list'})
        }
    },
    components:{

    }
}
</script>

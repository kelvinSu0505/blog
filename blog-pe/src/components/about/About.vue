/*
 * @Author: YorkeD 
 * @Date: 2018-05-15 12:48:26 
 * @Last Modified by:   YorkeD 
 * @Last Modified time: 2018-05-15 12:48:26 
 * 关于
 */
<template>
    <div class="about-box">
        <div class="about-cont-box">
            <div class="about-cont-top"></div>
            <div class="cont-top-box">
                <dl class="cont-info-box l">
                    <dt class="info-img-box l">
                        <img class="img-box" src="../../assets/images/b1f0fee4c8a6f36779b15204003a648d.jpg" alt="图片" title="图片">
                        <p class="img-text">职业：前端开发</p>
                        <p class="img-text">博主：Yorke</p>
                        <p class="img-text">GPS：ShangHai</p>
                    </dt>
                    <dd class="info-text-box l">
                        <h3 class='text-title'>自我简介</h3>
                        <p class="text-box">
                            大家好，我是博主 Yorke，前端开发者也是爱好者，2014年4月入行至今。
                        </p>
                        <p class="text-box">
                            自己主要是技术栈是Vue全家桶，对前端工程化非常感兴趣，一直在学习前端工程化方面。
                            实际开发过企业官网、商城、行业平台，对微信公众号、小程序及M站都有相应的开发经验，
                            还有混合开发经验（这里的混合开发指前端开发App，如：Cordova、HBuilder、Weex等）。
                            后端的主要技术就是NodeJS。
                        </p>
                        <p class="text-box">
                            个人爱好：篮球、游泳、吉他、K歌、阅读、自驾游、撸代码~
                        </p>
                        <p class="text-box">
                            咳~，游泳是初学者级别，狗刨式~；吉他初学者级别只会一首歌，一换和旋就GG；自驾游是想一年出去玩一次，这么多年
                            就出去玩了一次~。
                        </p>
                        <p class="text-box-ending">
                            学无止境~
                        </p>
                    </dd>
                </dl>
                <div class="cont-echarts-box l">
                    <ve-histogram 
                    :data="chartData" 
                    :settings="chartSettings"
                    >
                    </ve-histogram>
                </div>
            </div>
            <div class="cont-footer-nox">
                <div class="footer-left-box l">
                    emmmmmm~~这个地方真不知道写点什么好，先保留~
                </div>
                <div class="footer-right-box r">
                    <h4 class="right-title">声明</h4>
                    <p class="right-text">
                        因本人第一次写博客，不知字体、图片或文本等会不会侵犯到您的合法权益，
                        如有侵犯到您的权益请您及时告知，我会先关掉服务器更改后在上线。在此对您深表歉意，望谅解！
                    </p>
                    <p class="contact-way-title">联系方式：</p>
                    <ul class="contact-way-box">
                        <li class="info-box">
                            <i class="iconfont email-icon l">&#xe68b;</i>
                            <span class="l">yorke19900505@gmail.com</span>
                        </li>
                        <li class="info-box">
                            <i class="iconfont qq-icon l">&#xe7a0;</i>
                            <span class="l">85789611</span>
                        </li>
                    </ul>
                    <p class="hint-text">请您在添加时备注好说明，谢谢~！</p>
                </div>
            </div>
        </div>
        <LoadingView v-if="loadingStatus"></LoadingView>
    </div>                                  
</template>
<script>
import LoadingView from '../common/Loading.vue'
import '../../assets/sass/about/about.sass'
export default {
    data(){
        return{
            loadingStatus:1,        // 控制Loading
            chartData:{
                columns: ['名称', '职业技能'],
                rows: [
                    { '职业技能': 100, '名称': 'JQ'},
                    { '职业技能': 100, '名称': 'Vue'},
                    { '职业技能': 100, '名称': 'Webpack'},
                    { '职业技能': 100, '名称': 'Git'},
                    { '职业技能': 100, '名称': 'ES6'},
                    { '职业技能': 100, '名称': 'SASS'},
                    { '职业技能': 100, '名称': 'LESS'},
                    { '职业技能': 80, '名称': 'PostCSS'},
                    { '职业技能': 60, '名称': 'Glup'},
                    { '职业技能': 50, '名称': 'NodeJS'},
                    { '职业技能': 50, '名称': 'MongDB'},
                    { '职业技能': 30, '名称': 'TypeScript'},
                    { '职业技能': 20, '名称': 'React'},
                    { '职业技能': 20, '名称': 'Angular'},
                    { '职业技能': 20, '名称': 'Electron'},
                    { '职业技能': 10, '名称': 'MySQL'},
                    { '职业技能': 10, '名称': 'Linux'}
                ]
            },
            chartSettings:{
                metrics: ['职业技能'],
                dimension: ['名称']
            }
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

    },
    components:{
        LoadingView
    }
}
</script>

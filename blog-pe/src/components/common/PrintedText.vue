/*
 * @Author: YorkeD
 * @Date: 2018-04-26 13:43:13
 * @Last Modified by: Yorke
 * @Last Modified time: 2018-08-12 13:21:35
 * 打印文字效果 -- 全站公用
 */
<template>
  <div class="printed-box">
    <p class="printed-text">
      <span v-bind:class="{printed_color:TextColorStatus == 1}">{{TextData}}</span>
      <span v-show="TextLineStatus" class="text-line">_</span>
    </p>
  </div>
</template>
<script>
export default {
  props:['PrintedData'],
  data () {
    return {
      TextData: '',          // 存放需要打印的文字
      TextFather: '',        // 父组件传参
      TextLineStatus: 0,     // 控制文字后面_的闪烁
      TextColorStatus: 0     // 控制文字颜色
    }
  },
  beforeMount(){
    let vm = this;
    vm.TextFather = vm.PrintedData;
    if(vm.TextFather != ''){
      vm.PrintedText()
    }
  },
  methods: {
    PrintedText(){
      let vm = this;
      let arr = [];
      let indexData = 0;
      let text_data = vm.TextFather;
      for(let i = 0; i< text_data.length; i++){
        arr[i] = text_data[i];
      }
      setInterval(function(){
        vm.TextLineStatus = 0;
        setTimeout(() => {
          vm.TextLineStatus = 1;
        }, 400);
      },700)
      let obj = setInterval(function(){
        if(indexData < arr.length){
          vm.TextData += arr[indexData];
          indexData++
        }else{
          vm.TextColorStatus = 1;
        }
      },200)
    }
  }
}
</script>

<style scoped>
.printed_color{
  color: #ff0077 !important
}
.printed-box{
  position: absolute;
  top: 63%;
  left: 50%;
  width: 400px;
  margin-left: -200px;
  overflow: hidden;
}
.printed-box .printed-text{
  text-indent: 2em;
  line-height: 28px;
  color: #fff;
  width: 400px;
  font-size: 14px;
  font-weight:bold;
  word-break:break-all;
}
.printed-box .printed-text .text-line{
  color: #ffffff
}
</style>

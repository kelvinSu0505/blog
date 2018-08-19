/*
 * @Author: YorkeD 
 * @Date: 2018-05-05 17:07:02 
 * @Last Modified by: Yorke
 * @Last Modified time: 2018-08-19 19:28:08
 */
<template>
    <div class="login-box">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm">
                        <FormItem prop="userName">
                            <Input v-model="userName"  placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input v-model="password" type="password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="loginBtn" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">请输入管理员帐号及密码</p>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
import '../../assets/sass/login.sass'
import axios from 'axios'
export default {
    data(){
        return{
            userName: '',
            password: '',
        }
    },
    beforeCreate(){
        if(localStorage.userInfo){
            this.$Message.success('您已经登陆');
            this.$router.push('/list')
        }else{
            this.$router.push('/login')
        }
    },
    beforeMount () {
        
    },
    methods:{
        loginBtn(){
            console.log('denglu')
            axios({
                url:'http://localhost:3000/user/login',
                method: 'post',
                data: {
                    userName: this.userName,
                    password: this.password
                }
            }).then(res=>{
                console.log(res);
                if(res.data.code == 200 && res.data.msg){
                    // 本地存储
                    new Promise((resolve,reject)=>{
                        localStorage.userInfo = {
                            userName:this.userName
                        }
                        setTimeout(()=>{resolve()},500)
                    }).then(()=>{
                        this.$Message.success('登陆成功');
                        this.$router.push('/list')
                    }).catch(err=>{
                        this.$Message.error('登陆状态保存失败');
                        console.log(err)
                    })
                }else{
                    this.$Message.error('登陆失败');
                }
                
            }).catch((err)=>{
                console.log(err);
                this.$Message.error('登陆失败');
            })
        }
    },
    components:{

    }
}
</script>
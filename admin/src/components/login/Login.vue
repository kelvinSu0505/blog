/*
 * @Author: YorkeD 
 * @Date: 2018-05-05 17:07:02 
 * @Last Modified by: YorkeD
 * @Last Modified time: 2018-05-05 17:13:39
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
                            <Input  placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" placeholder="请输入密码">
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
        loginBtn(){
            console.log('denglu')
        }
    },
    components:{

    }
}
</script>
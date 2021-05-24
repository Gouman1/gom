<template>
  <!--<el-dropdown>-->
    <!--<span><i class="icon iconfont icon-my"></i>王小虎</span>-->
    <!--<el-dropdown-menu slot="dropdown">-->
      <!--<el-dropdown-item><i class="icon iconfont icon-yanzhengma"></i>修改密码</el-dropdown-item>-->
      <!--<el-dropdown-item><i class="icon iconfont icon-tuichu"></i>退出登陆</el-dropdown-item>-->
    <!--</el-dropdown-menu>-->
  <!--</el-dropdown>-->
  <div  >
<div style="float: left">{{user}}</div>
    <el-button plain class="buttonStyle" @click="exitLogin"><img src="../../../assets/images/exitImg.png"></el-button></div>
</template>

<script>
  export default {
    name: 'comp-bread',
    data() {
      return {
        user: this.$store.getters.role
      }
    },
    props: {},
    methods: {
      exitLogin:function () {
        this.$store.dispatch('accountLogoutSubmit').then((res) => {
          this.$router.push({path: '/home'})
        }).catch(() => {
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .buttonStyle{
   border:none
  }
</style>

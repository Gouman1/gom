<template>
  <el-breadcrumb separator="/" id="breadcrumb">
    <el-breadcrumb-item><span style="font-family: 微软雅黑">您当前的位置是：</span></el-breadcrumb-item>
    <!--<el-breadcrumb-item>{{firstMenuLabel}}</el-breadcrumb-item>-->
    <el-breadcrumb-item><span style="font-family: 微软雅黑;font-weight: bold">{{menuLabel}}</span></el-breadcrumb-item>

  </el-breadcrumb>

</template>

<script>
  import mock from '@/mock/menu.json'

  export default {
    name: 'comp-bread',
    data() {
      return {
        levelList: null,
        menuList: mock.menu,
        menuLabel: '',
        firstMenuLabel: '',
        path:'',
        matched:''
      }
    },
    methods: {
      renderZhCN(path) {
        let val = [];
        for (let k = 0; k < this.menuList.length; k++) {
          const v = this.menuList[k].menuGroup.find(v => {
            return (v.to).trim() === (path === '/' ? '/' : '/' + path)
          });
          v && val.push(v)
        }
        return val.length ? val[0].label : '首页'
      },
      getBreadcrumb() {
        let matched = '';
        if(this.$route.matched.length > 1){
         matched = this.$route.matched[1].path;
        }
        console.log(matched);
        // const first = matched[0]
        // if (first && first.name !== '／') {
        //   matched = [{path: '/', name: '／'}].concat(matched)
        // }
        // this.levelList = matched
        for (let i = 0; i < this.menuList.length; i++){
           let o = this.menuList[i];
           o.menuGroup.forEach(v => {
             if (v.to === matched) {
               this.menuLabel = v.label;
               this.firstMenuLabel = o.submenu;
             }
           })
        }
      },
    },
    created() {
      this.getBreadcrumb()
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
  }
</script>

<style>
  /deep/ .el-head{
    height: 60px;
    background-color: #4a9cd8;
  }
</style>

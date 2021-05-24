<template>
  <div style="background-color: white">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="0-0"
      @select='handSelect'
      unique-opened
      :collapse="isCollapse"
    >
      <el-menu-item-group style="background-color:#4a9cd8; ">
        <el-menu-item style="height: 60px;solid #4a9cd8">
          <span slot="title" style="color: white;font-size: 20px">个性化推荐系统</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group style="background-color: #4a9cd8; ">

        <el-menu-item style="height: 200px;width: 200px;">
          <div class="demo-fit" v-show="!isCollapse">
            <div class="block" :key="fits">
              <el-avatar shape="square" :size="130" :fit="fits" :src="url"></el-avatar>
              <p class="titleStyle">供应商：万达信息股份集团</p>
              <p class ="addressStyle">地址：辽宁省大连市普兰店区</p>
            </div>
          </div>
        </el-menu-item>
      </el-menu-item-group>


        <el-menu-item-group v-for="(menu, v) in menuList" :key="'-' + v" style="background-color: #eaecf5; ">
          <router-link class="head-link" :to="menu.to">
            <el-menu-item  style="solid #d7dbec">
              <i class="el-icon-menu"></i>
              <span slot="title">{{menu.label}}</span>
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
<!--      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
<!--        <el-radio-button :label="false">展开</el-radio-button>-->
<!--        <el-radio-button :label="true">收起</el-radio-button>-->
<!--      </el-radio-group>-->
    </el-menu>
  </div>
</template>
<script>
  import {sliderApi} from './sliderApi'

  export default {
    name: 'slider',
    data() {
      return {
        isCollapse: false,
        menuList: {},
        imgStr: require('../../../assets/images/test.png'),
        errorStr: '',
        fits: 'fill',
        url: 'https://pic.pedata.cn/disknew/newlogo/202012/6693a37062a247c8b363b0eef475dfea.jpg'
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      onchangeImgFun (e) {
        var file = e.target.files[0]
        console.log(file)
        // 获取图片的大小，做大小限制有用
        let imgSize = file.size
        console.log(imgSize)
        var _this = this // this指向问题，所以在外面先定义
        // 比如上传头像限制5M大小，这里获取的大小单位是b
        if (imgSize <= 50 * 1024) {
          // 合格
          _this.errorStr = ''
          console.log('大小合适')
          // 开始渲染选择的图片
          // 本地路径方法 1
          // this.imgStr = window.URL.createObjectURL(e.target.files[0])
          // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

          // base64方法 2
          var reader = new FileReader()
          reader.readAsDataURL(file) // 读出 base64
          reader.onloadend = function () {
            // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
            var dataURL = reader.result
            console.log(dataURL)
            _this.imgStr = dataURL
            // 下面逻辑处理
          }
        } else {
          console.log('大小不合适')
          _this.errorStr = '图片大小超出范围'
        }
      },
      getData() {
        var list = [
          {
            "to":'/admin',
            "label":'为你推荐'
          },
        // {
        //   "to":'/admin/ShowIndex',
        //   "label":'模型展示'
        // },
          {
            "to":'/admin/classify',
            "label":'品目展区'
          },
          {
            "to":'/admin/hotspot',
            "label":'热点分析'
          },
          {
            "to":'/admin/history',
            "label":'历史足迹'
          },
          {
            "to":'/admin/MyStore',
            "label":'我的收藏'
          },
          {
            "to":'/admin/personal',
            "label":'关于个人'
          },
        ];
        this.menuList = list;
      },
      handSelect: function (key, path) {
      },
      iconClass(icon) {
        return `el-icon-${icon}`
      },
      collapse() {
        this.isCollapse = !this.isCollapse
      }
    },
    computed: {
      menuToger: function () {
        return !this.isCollapse ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'
      },
      menuTogerTitle: function () {
        return this.isCollapse ? '展开' : '收起'
      }
    }
  }
</script>

<style lang="scss" scoped>
  //上传图片
  .user-header{
    position: relative;
    display: inline-block;
  }
  .user-header-com{
    width: 144px;
    height: 144px;
    display: inline-block;
  }
  .header-upload-btn{
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
  }
  .tip{
    font-size: 14px;
    color: #666;
  }
  /* error是用于错误提示 */
  .error{
    font-size: 12px;
    color: tomato;
    margin-left: 10px;
  }

  //菜单折叠显示
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-submenu__title {
    /* height: 56px; */
    /*line-height: 36px;*/
    font-size: 15px;
    color: #303133;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    -webkit-transition: border-color .3s, background-color .3s, color .3s;
    transition: border-color .3s, background-color .3s, color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .el-menu-vertical-demo /deep/ .el-submenu__title:hover {
    background-color: #4a9cd8;
    color: #ffffff;
  }

  .el-menu-vertical-demo /deep/ .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
    padding: 0 45px;
    min-width: 200px;
  }

  .side_trgger {
    position: fixed;
    text-align: center;
    bottom: 0;
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    color: #fff;
    background: #002140;
    z-index: 1;
    -webkit-transition: all .3s ease-in-out;
    transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out;
    width: 200px;
  }

  .topDivStyle {
    /*width: 245px;*/
    height: 10%;
    background-color: #0c609e;
  }

  .el-menu-item {
    a {
      color: rgb(191, 203, 217);
    }
    font-size: 14px;
  }

  .el-menu {
    height: 90%;
  }

  .el-menu-item.is-active > a {
    color: #4a9cd8;
  }

  .el-menu-item-group a {
    text-decoration: none;
  }

  .el-menu-item a {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }

  .head-link {
    &:active {
      text-decoration: none;
    }
  }

  .el-menu-vertical-demo /deep/ .el-menu-item:hover, .el-menu-item:focus {
    outline: none;
    background-color: #4a9cd8;
    color: #ffffff;
  }

  .el-menu-vertical-demo /deep/ .el-menu-item-group__title {
    padding: 0px;
    font-size: 15px;
  }

  .el-submenu__title {
    padding-left: 30px;
  }

  //这个是用于调整头像的位置
  .block{
    /*position: absolute;*/
    margin-left: 15px;
    width: 200px;
    height: 200px;
  }
  .titleStyle{
    margin-top: -10px;
    color: white;
    margin-left: -30px;
    font-family: 宋体;
    font-size: 5px;
  }
  .addressStyle{
    /*position: absolute;*/
    margin-top: -30px;
    color: white;
    /*font-size: xx-small;*/
    margin-left: -30px;
    font-family: 宋体;
    font-size: 5px;
  }
</style>

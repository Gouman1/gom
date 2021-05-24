<template>
  <div>
    <div style="height: 10px"></div>
  <el-card class="box-card">
    <el-button  icon="el-icon-star-off" type="warning" plain>点个收藏</el-button>
    <el-button  icon="el-icon-top" type="success" plain>顶一顶</el-button>
    <el-button  icon="el-icon-bottom" type="danger" plain>踩一踩</el-button>

    <table  cellpadding="0" cellspacing="0" style="margin-top: 20px">
      <tr>
        <td class="first" ><span class="title">项目名称：</span><span>深圳市新冠核酸采样检测信息管理系统</span></td>
        <td class="second"><span class="title">项目编号：</span>456OTC2030512</td>
      </tr>
      <tr>
        <td class="first" ><span class="title">采购单位：</span>深圳市医学信息中心</td>
        <td class="second"><span class="title">品目：</span>服务/其他服务</td>
      </tr>
      <tr>
        <td class="first" height="60"><span class="title">开标时间：</span>2020-12-21 16:07:00</td>
      </tr>
      <tr>
<!--        <td class="first" height="60">更多信息：凡对本次公告内容提出询问，请按以下方式联系大连市普兰店经济开发区管理委员会大连众信工程项目管理有限公司大连市普兰店区景源小区1号1层6号</td>-->
      </tr>
      <tr>
<!--        <td width="200" height="60" >源网站地址:<span style="color: #33a2f7">http://www.ccgp.gov.cn/cggg/dfgg/cjgg/202012/t20201222_15672890.htm</span></td>-->
      </tr>
    </table>

  </el-card>


    <div class="right-card">
      <el-card class="inside-card">
        <h1>看过该项目的用户还看过</h1>
        <div style="margin-top: 20px;margin-left:-17px;width: 400px;">
          <el-collapse-transition>
            <div v-show="show3">
              <div class="transition-box">项目公告1</div>
              <div class="transition-box">项目公告2</div>
              <div class="transition-box">项目公告3</div>
              <div class="transition-box">项目公告4</div>
            </div>
          </el-collapse-transition>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RecommendDetail",
      data: () => ({
        show3:false
      }),
      mounted() {
        setTimeout(this.show3 = true,500);
      }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
    padding: 18px 0;
  }
  .box-card {
    width: 70%;
    height: 600px;
  }
  .right-card{
    margin-top: -602px;
    margin-left: 930px;
  }
  .transition-box {
    margin-bottom: 28px;
    width: 300px;
    border-radius: 4px;
    background-color: gainsboro;
    text-align: center;
    padding: 40px 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-left: 10px;
  }
  .inside-card{
    padding: 20px;
    height: 560px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .first{
    width: 500px;
    height: 60px;
    font-family: 宋体;
  }
  .second{
    width: 300px;
    height: 60px;
    font-family: 宋体;
  }
  .title{
    font-weight: bold;
  }
</style>

<template>
  <div >
    <el-row :gutter="20">
        <el-col :span="8" v-for="(d, index) in data" :key="d" >
          <transition name="el-zoom-in-center">
          <el-card :body-style="{ padding: '0px' }" v-show="show2">
            <div style="padding: 8px;height: 170px">
              <el-row >
                <el-col :span="2">
                  <p class="el-icon-setting"></p>
                </el-col>
                <el-col :span="7">
                  <p class="name">项目名称：</p>
                </el-col>
                <el-col :span="14">
                  <p class="list">{{d.projName}}</p>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="1">
                  <p class="el-icon-s-data"></p>
                </el-col>
                <el-col :span="8">
                  <p class="name">项目编号：</p>
                </el-col>
                <el-col :span="15">
                  <p class="list">{{d.projCode}}</p>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="2">
                  <p class="el-icon-suitcase"></p>
                </el-col>
                <el-col :span="7">
                  <p class="name">采购单位：</p>
                </el-col>
                <el-col :span="14">
                  <p class="list">{{d.callUnit}}</p>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="1">
                  <p class="el-icon-menu"></p>
                </el-col>
                <el-col :span="8">
                  <p class="name">品目：</p>
                </el-col>
                <el-col :span="15">
                  <p class="list">{{d.projItem}}</p>
                </el-col>
              </el-row>
              <el-row >
                <el-col :span="2">
                  <p class="el-icon-date"></p>
                </el-col>
                <el-col :span="7">
                  <p class="name">开标时间：</p>
                </el-col>
                <el-col :span="14">
                  <time class="time">{{ d.ancmTime }}</time>
                  <el-button type="text" class="button" @click="jump">查看详情</el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
          </transition>
          <div style="height: 16px" ></div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    data: () => ({
      show2: false,
      currentDate: new Date(),
      input:'',
      data:[
        {
        projName:'深圳市新冠核酸采样检测信息管理系统',
        projCode:'456OTC2030512',
        callUnit:'深圳市医学信息中心',
        projItem:'服务/其他服务',
        ancmTime:'2020-12-21 16:07:00'

      },
        {
          projName:'上海市少儿住院互助基金医疗费用结算与监督管理平台升级改造项目',
          projCode:'招案2020-3774',
          callUnit:'上海市中小学生、婴幼儿住院医疗互助基金管理办公室',
          projItem:'货物/通用设备/计算机设备及软件',
          ancmTime:'2020-12-21 16:07:00'

        },
        {
          projName:'宁波市社会保障卡管理服务及主机维保运维项目',
          projCode:'NBZFCG2020B035G-D',
          callUnit:'宁波市社会保障卡管理服务和职业技能鉴定指导中心',
          projItem:'服务/信息技术服务/运行维护服务',
          ancmTime:'2020-12-21 16:07:00'

        },
        {
          projName:'宁波市社会保障卡管理服务及主机维保运维项目',
          projCode:'NBZFCG2020B035G-D',
          callUnit:'宁波市社会保障卡管理服务和职业技能鉴定指导中心',
          projItem:'服务/信息技术服务/运行维护服务',
          ancmTime:'2020-12-21 16:07:00'

        },
        {
          projName:'宁波市社会保障卡管理服务及主机维保运维项目',
          projCode:'NBZFCG2020B035G-D',
          callUnit:'宁波市社会保障卡管理服务和职业技能鉴定指导中心',
          projItem:'服务/信息技术服务/运行维护服务',
          ancmTime:'2020-12-21 16:07:00'

        },
        {
          projName:'宁波市社会保障卡管理服务及主机维保运维项目',
          projCode:'NBZFCG2020B035G-D',
          callUnit:'宁波市社会保障卡管理服务和职业技能鉴定指导中心',
          projItem:'服务/信息技术服务/运行维护服务',
          ancmTime:'2020-12-21 16:07:00'

        },        {
          projName:'宁波市社会保障卡管理服务及主机维保运维项目',
          projCode:'NBZFCG2020B035G-D',
          callUnit:'宁波市社会保障卡管理服务和职业技能鉴定指导中心',
          projItem:'服务/信息技术服务/运行维护服务',
          ancmTime:'2020-12-21 16:07:00'

        },
        {
          projName:'宁波市社会保障卡管理服务及主机维保运维项目',
          projCode:'NBZFCG2020B035G-D',
          callUnit:'宁波市社会保障卡管理服务和职业技能鉴定指导中心',
          projItem:'服务/信息技术服务/运行维护服务',
          ancmTime:'2020-12-21 16:07:00'

        },
        {
          projName:'宁波市社会保障卡管理服务及主机维保运维项目',
          projCode:'NBZFCG2020B035G-D',
          callUnit:'宁波市社会保障卡管理服务和职业技能鉴定指导中心',
          projItem:'服务/信息技术服务/运行维护服务',
          ancmTime:'2020-12-21 16:07:00'

        },

      ]
    }),
    methods:{

      jump(){
        this.$router.push({name: '主页详情'})
      }
    },
    mounted() {
      setTimeout(this.show2 = true,500);
    }
  }
</script>

<style>
  .time {
    color: rgba(56, 157, 89, 0.84);
    margin-left: -30px;
  }
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .name{
    font-weight: bold;
    font-family: 宋体;
    text-align: right;
    margin-right: 25px;
  }
  .list{
    font-family: 宋体;
    margin-left: -30px;
  }
  .el-row {
    margin-bottom: 8px;
  &:last-child {
     margin-bottom: 0px;
   }
  }
</style>

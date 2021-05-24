<template>
  <div class="mh-register">
    <div class="register-center">
      <div class="register-box">
        <div class="register-box-top">
          <img src="../../assets/images/register_tit.png">
        </div>
          <a class="register-go-login" href="/">登录</a>
        <el-row :gutter="20">
          <el-col :span="9">
            <div class="form">
              <el-form :model="formData" :rules="rules" ref="formData" label-width="auto">
                <el-form-item>
                  <div class="hello">
                    <div class="user-header">
                      <input type="file" name="image" accept="image/*" @change='onchangeImgFun'
                             class="header-upload-btn user-header-com">
                      <img  alt="" :src='imgStr' class="user-header-img user-header-com">
<!--                      <p style="font-family: 宋体;font-weight: bold">上传头像</p>-->
                      <p class="tip">上传头像大小限制50kb <span class="error">{{errorStr}}</span></p>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item prop="userName">
                  <el-input
                    v-model="formData.userName"
                    placeholder="请设置账号">
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    type="password"
                    v-model="formData.password"
                    placeholder="请输入密码">
                  </el-input>
                </el-form-item>
                <el-form-item prop="rePassWord">
                  <el-input
                    type="password"
                    v-model="formData.rePassWord"
                    auto-complete="off"
                    placeholder="请再次输入密码">
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
          <el-col :span="15">
            <div class="rightForm">
              <el-form :model="formData" :rules="rules" ref="formData" label-width="auto">
                <el-form-item prop="aomount">
                  <el-select v-model="value" placeholder="请选择目标金额范围">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="region">
                  <el-select v-model="value" placeholder="请选择偏好地域">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="rePassWord">
                  <el-select v-model="value" placeholder="请选择偏好项目类别">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button
                    class="primary_button"
                    type="primary"
                    @click="registerAccount"
                    :loading="loading">注册
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>

      </div>
    </div>
  </div>
</template>

<script>
import {RegisterApi} from './registerApi'
import {Msg} from '../../tools/message'

export default {
  components: {},
  data () {
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.password) {
        return callback(new Error('两次密码不一致'))
      } else {
        return callback()
      }
    }
    var checkAccount = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入账号'))
      } else if ((value.trim().length < 5) || (value.trim().length > 12)) {
        return callback(new Error('长度在 5 到 12 个字符'))
      } else if (value !== '') {
        this.formData.account = value
        RegisterApi.checkAccount(this.formData).then(res => {
          if (res.data.data) {
            return callback(new Error('账号已存在'))
          } else {
            return callback()
          }
        })
      } else {
        return callback()
      }
    }
    return {
      loading: false,
      formData: {
        userName: '',
        password: '',
        account: '',
        rePassWord: '',
        amount: '',
        region: '',
        projectCategory: ''
      },
      value:'',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      rules: {
        userName: [{validator: checkAccount, trigger: 'blur', required: true}
        ],
        password: [
          {required: true, message: '请输入登录密码', trigger: 'focus'},
          {min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'focus'}
        ],
        rePassWord: [{validator: checkPass, trigger: 'blur', required: true}]
      },

      imgStr: require('../../assets/images/test.png'),
      errorStr: ''
    }
  },
  created () {
  },
  /** 计算属性 */
  computed: {},
  /** 完成挂载 */
  mounted () {
  },
  destroyed () {
  },
  /** 方法事件 */
  methods: {
    onchangeImgFun (e) {
      var file = e.target.files[0];
      console.log(file);
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size;
      console.log(imgSize);
      var _this = this; // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 50 * 1024) {
        // 合格
        _this.errorStr = '';
        console.log('大小合适');
        // 开始渲染选择的图片
        // 本地路径方法 1
        // this.imgStr = window.URL.createObjectURL(e.target.files[0])
        // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

        // base64方法 2
        var reader = new FileReader();
        reader.readAsDataURL(file) ;// 读出 base64
        reader.onloadend = function () {
          // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
          var dataURL = reader.result;
          console.log(dataURL);
          _this.imgStr = dataURL
          // 下面逻辑处理
        }
      } else {
        console.log('大小不合适');
        _this.errorStr = '图片大小超出范围'
      }
    },
    registerAccount: function () {
      this.$refs['formData'].validate((valid) => {
        if (valid) {
          this.formData.account = this.formData.userName
          this.loading = true
          RegisterApi.register(this.formData).then((res) => {
            this.loading = false
            if (res.data.data) {
              Msg.success('注册成功');
              this.$router.push({path: '/home'})
              // this.returnLogin();
            } else {
              Msg.error('注册失败')
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  },
  /** 监听函数 */
  watch: {}
}
</script>

<style lang="scss">
  .mh-register {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/loginBackground.png");
    background-size: cover;
    margin-top: -20px;
  }
  .register-center {
    height: 700px;
    margin: 20px auto;
  }
  .register-box {
    border-radius: 10px;
    width: 900px;
    height: 600px;
    margin-top: 60px;
    margin-left: 310px;
    background: #fff;
    border: 1px solid #fff;
    -webkit-box-shadow: 0 15px 40px rgba(51, 162, 247, 0.2);
    box-shadow: 0 15px 40px rgba(51, 162, 247, 0.2);
    position: absolute;
    }
      .title {
        text-align: center;
        color: #505458;
      }
    .el-input {
      /*position: relative;*/
      font-size: 14px;
      /*width: 64%;*/
      width: 400px;
      height: 50px;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  .el-input__inner {
    width: 50%;
  }
      .el-input__inner{
        font-size: 14px;
          width: 300px;
          height: 50px;
          margin-top: 15px;
          margin-bottom: 10px;
      }

    .el-form-item {
      .el-form-item__label {
        color: #3D3D3D;
      }
    }


  .register-go-login {
    background: url("../../assets/images/go-login.png");
    color: white;
    width: 92px;
    height: 49px;
    display: block;
    position: absolute;
    top: 24px;
    left: 822px;
    line-height: 54px;
    letter-spacing: 2px;
    text-decoration: none;
    text-indent: 33px;
  }

  input.el-input__inner {
    border: 1px solid #DCDCDC;
    border-radius: 3px !important;
    padding: 1px 0;
    text-indent: 10px;
  }

  .el-form-item__content {
    margin-bottom: 5px;
  }

  .register-box-top {
    text-align: center;
    padding: 10px;
  }
  .form{
    /*text-align: left;*/
    margin-left: 100px;

    /*margin-top: 180px;*/
    /*.el-form-item__error{*/
    /*  !*margin-left: 140px;*!*/
    /*}*/
  }
  .tip{
    color: green;
    font-weight: bold;
    font-family: 宋体;
  }
  .rightForm{
    text-align: right;
    margin-right: 100px;
    margin-top: 117px;
  }
  .primary_button{
    background-color: #33a2f7;
    width: 200px ;
    height:48px;
    border-radius: 25px;
    border: none;
    font-size: 16px;
    margin-top: 20px;
    margin-right: 100px;
  }


  //上传头像
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
  /*.tip{*/
  /*  font-size: 10px;*/
  /*  color: #666;*/
  /*}*/
  /* error是用于错误提示 */
  .error{
    font-size: 12px;
    color: tomato;
    margin-left: 10px;
  }

</style>

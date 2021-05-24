<template>
  <div class="back">
    <div id="WordCloud">
    </div>
    <div id="age">
      <table border="none" cellpadding="0" cellspacing="0">
        <tr >
          <td width="200" height="80" >年龄</td>
        </tr>
        <tr >
          <td width="200" height="118"style="font-size:30px;">{{ModelData.age}}</td>
        </tr>
      </table>
    </div>
    <div id="gender">
      <table border="none" cellpadding="0" cellspacing="0">
        <tr >
          <td width="200" height="80">性别</td>
        </tr>
        <tr >
          <td width="200" height="118" style="font-size:30px;">{{ModelData.gender}}</td>
        </tr>
      </table>
    </div>
    <div id="education">
      <table border="none" cellpadding="0" cellspacing="0">
        <tr >
          <td width="200" height="80">学历</td>
        </tr>
        <tr >
          <td width="200" height="118" style="font-size:30px;">{{ModelData.education}}</td>
        </tr>
      </table>
    </div>
    <div id="region">
      <table border="none" cellpadding="0" cellspacing="0">
        <tr >
          <td width="200" height="80">所在地区</td>
        </tr>
        <tr >
          <td width="200" height="118" style="font-size:30px;">{{region}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Js2WordCloud from "js2wordcloud";
  let canvas;
  let ctx;
  let num = 0;
  let timer;
  let flag = true;
  let age;
  let gender;
  let education;
  let length = 0;
  let wide = 0;
  let gwide = 200;
  let glength = 10;
  let ewide = 100;
  let elength = 500;
  export default {
    name: "MainPage",
    data() {
      return {
        left:0,
        timer: null,
        show2: true,
        ModelData: {
          age: '',
          education: '',
          gender: '',
          probs: '',
          topic: ''
        },
        region:'',
        regionList:['北京新源里','上海浦东','重庆渝北','天津','深圳','福建厦门','贵州','四川成都']
      }
    },

    methods: {
      renderCloud(words) {
        this.region = this.regionList[Math.floor(Math.random()*(this.regionList.length))];    //可均衡获取0到9的随机整数。
        // for (let i = 0; i < words.length; i++) {
        //   let str = words[i][0];
        //   // str = str.substring(1,str.length - 1);
        //   let length = str.length;
        //   var position = str.indexOf(',');
        //   var newWord = str.substring(2, position-1);
        //   var number = str.substring(position + 1, length);
        //   number = (number == 0 ? 1 : parseFloat(number).toFixed(1) * 10 + 5);
        //   words[i][0] = newWord;
        //   words[i][1] = number;
        // }
        // var copyArray = words.concat(words).concat(words).concat(words);
        var wc = new Js2WordCloud(document.getElementById('WordCloud'));
        // let list = copyArray;
        let list = [['谈笑风生', 500], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 1000], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1], ['谈笑风生', 500000], ['谈笑风生', 50], ['谈笑风生', 40], ['谈笑风生', 40], ['谈笑风生', 30], ['谈笑风生', 30], ['谈笑风生', 20], ['谈笑风生', 20], ['谈笑风生', 1], ['谈笑风生', 1]];
        let option = {
          imageShape: require(this.ModelData.gender == '女性' ? '@/assets/images/Woman.jpg' : '@/assets/images/female.png'),
          fontSizeFactor: 0.1,  // 当词云值相差太大，可设置此值进字体行大小微调，默认0.1
          maxFontSize: 20,      // 最大fontSize，用来控制weightFactor，默认60
          minFontSize: 14,      // 最大fontSize，用来控制weightFactor，默认60
          gridSize: 6,          // 密集程度 数字越小越密集
          weightFactor: 0.5,      // 字体大小=原始大小*weightFactor
          fontWeight: 'normal', //字体粗细
          // fontFamily: '微软雅黑', // 字体
          tooltip: {
            show: false,
            formatter: function (item) {
              console.log(item)
            }
          },
          color: 'white',
          backgroundColor: '#0d376599', // 背景颜色
          list: list,
          shape: 'pentagon',
          ellipticity: 1.5,
          noDataLoadingOption: {                                  // 无数据提示。
            backgroundColor: '#fff',
            text: '暂无数据',
          },
        };
        // console.log(list);
        wc.setOption(option);
        window.onresize = function () {
          wc.setOption(option)
        }

      },
      /** 清除定时器 */
      stop(){
        clearInterval(timer)
      },

    },

    mounted() {
      this.ModelData = this.$route.params;
      console.log(this.ModelData);
      this.renderCloud(this.ModelData.probs);
      // age = this.ModelData.age;
      // education = this.ModelData.education;
      // gender = this.ModelData.gender;
      // this.initCanvas();
      // 当调整窗口大小时重绘canvas
      // window.onresize = () => {
      //   this.initCanvas()
      // };
    },

  }
</script>

<style scoped>
  #age{
    height: 200px;
    width: 200px;
    background-color:#16eff17a;
    position: absolute;
    margin-top: -510px;
    margin-left: 115px;
    text-align: center;
    font-family: 微软雅黑;
    color:white;
    font-size: 20px;
  }
  #gender{
    height: 200px;
    width: 200px;
    background-color:#16eff17a;
    position: absolute;
    margin-top: -210px;
    margin-left: 115px;
    text-align: center;
    font-family: 微软雅黑;
    color:white;
    font-size: 20px;
  }
  #education{
    height: 200px;
    width: 200px;
    background-color:#16eff17a;
    position: absolute;
    margin-top: -210px;
    margin-left: 935px;
    text-align: center;
    font-family: 微软雅黑;
    color:white;
    font-size: 20px;
  }
  #region{
    height: 200px;
    width: 200px;
    background-color:#16eff17a;
    position: absolute;
    margin-top: -510px;
    margin-left: 935px;
    text-align: center;
    font-family: 微软雅黑;
    color:white;
    font-size: 20px;
  }

  canvas {
    width: 400px;
    height: 500px;
  }
  .back {
    width: 100%;
    height: 100%;
    background: url("../../../assets/images/logo6.jpg");
    background-size: cover;
  }
  #WordCloud{

    height:500px;
    width:400px;
    margin-left: 365px;
    padding: 30px;
    /*margin-left: 400px;*/
    /*float: left;*/
    /*border:1px solid #BFBFBF;*/
    /*box-shadow:0px 0px  10px 5px #aaa;*/
  }


</style>

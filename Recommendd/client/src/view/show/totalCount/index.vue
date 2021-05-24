<template>
  <div class="OutDiv">
<!--    <div style="height: 300px"></div>-->
    <div class="age" >
      <age></age>
    </div>
    <div class="gender">
      <Gender ></Gender>
    </div>
    <div class="education">
    <Education></Education>
    </div>
  </div>
</template>

<script>
  import Gender from './Gender'
  import Age from './Age'
  import Education from './Education'
export default {
  name: 'index',
  methods:{},
  components: {
    Gender,
    Age,
    Education
  }
}
</script>

<style scoped>
.OutDiv{
  /*width: 100%;*/
  height: 500px;
  /*background-image: url("../../../assets/images/totalCountIndexBackground.jpg");*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
  /*background-size: 100% 100%;*/
}
  .age{
    width:25%;
    height: 51%;
    float: left;
    display: inline;
    position: relative;
    margin-top: 2%;
    /*margin-left: 9%*/
  }
  .education{
    width: 25%;
    height:51%;
    float: left;
    display: inline;
    margin-left: 12%;
    margin-top: 2%
  }
  .gender{
    width: 25%;
    height: 51%;
    float: left;
    display: inline;
    position: relative;
    margin-top: 2%;
    margin-left: 13%
  }
</style>

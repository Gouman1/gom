<template>
  <div>
    <el-button @click="test">click</el-button>
  </div>
</template>

<script>
    import {NewApi} from "../Api";

    export default {
        name: "MainPage",
      methods:{
          test(){
            NewApi.test().then(res => {
            }).catch((err) => {
              this.$message.error('出现错误!');
            })
          }
      }
    }
</script>

<style scoped>

</style>

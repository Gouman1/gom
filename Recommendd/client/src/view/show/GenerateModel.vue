<template>
  <div style="width: 100%; height: 100%; background-color: white">
    <p style="padding-top: 3%;font-size: 20px;padding-left: 2%;">请在以下框中输入10个近期的搜索内容</p>
    <el-row style="padding-top: 2%;padding-left: 3%">
      <el-col :span="10" style="padding-left: 4%">
        <el-row>
          <el-input minlength="8"  v-model="words[0]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
        <el-row style="padding-top: 3%">
          <el-input v-model="words[1]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
        <el-row style="padding-top: 3%">
          <el-input v-model="words[2]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
        <el-row style="padding-top: 3%">
          <el-input v-model="words[3]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
        <el-row style="padding-top: 3%">
          <el-input v-model="words[4]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
      </el-col>
      <el-col :span="12" style="padding-left: 10%">
        <el-row>
          <el-input v-model="words[5]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
        <el-row style="padding-top: 3%">
          <el-input v-model="words[6]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
        <el-row style="padding-top: 3%">
          <el-input v-model="words[7]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
        <el-row style="padding-top: 3%">
          <el-input v-model="words[8]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
        <el-row style="padding-top: 3%">
          <el-input v-model="words[9]" placeholder="请输入一段搜索内容"></el-input>
        </el-row>
      </el-col>
    </el-row>
    <div style="height: 10%; width: 40%;padding-top: 5%;padding-left: 30%;position: relative">
      <el-button type="primary" round size="big" @click="submit()"
                 style="margin-left: 31%;margin-top: 3%;padding-left: 13%;padding-right: 13%">生成模型
      </el-button>
    </div>

  </div>
</template>

<script>

  import {NewApi as Api} from './Api'
  import {Auth} from '../../store/user/auth'
  import {Msg} from '../../tools/message'

  export default {
    name: 'GenerateModel',
    data() {
      return {
        words: [],
        userId: ''
      }
    },
    methods: {
      submit() {
        let userName = Auth.getUserInfo();
        Api.getUserId({userName: userName}).then(res => {
          this.userId = res.data.data;

          let data = "";
          for (var i = 0; i < 10; i++) {
            if (this.words[i] == null || this.words[i] === '') {
              return Msg.info('请填完所有输入框')
            }
            data = data + this.words[i] + (i === 9 ? "\n" : "\t")
          }

          Api.submit({id: this.userId, words: data}).then(res => {
            console.log(res.data.data);
            this.$router.push({name: '模型展示', params: res.data.data})
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>

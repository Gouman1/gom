<template>
  <div>
    <index></index>
      <el-row >
        <el-col :span="13">
<!--          <el-input v-model="input" placeholder="请输入内容" >-->
<!--            <template slot="append">-->
<!--              <el-button type="primary" icon="el-icon-search" >搜索</el-button>-->
<!--            </template>-->
<!--          </el-input>-->
        </el-col>
      </el-row>
    <div>
<!--      <el-card>-->
      <el-row>
        <div class="classify">
          <transition name="el-zoom-in-center">
            <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
          </transition>

          <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
          </transition>
          <transition name="el-zoom-in-center">
            <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
          </transition>

          <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
          </transition>
        </div>
      </el-row>
      <el-row>
        <div class="classify">
          <transition name="el-zoom-in-center">
            <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
          </transition>

          <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
          </transition>
          <transition name="el-zoom-in-center">
            <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
          </transition>

          <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
          </transition>
        </div>
      </el-row>
<!--      </el-card>-->
    </div>

  </div>
</template>

<script>
  import index from '../totalCount/index'
  export default {
    components: {
      index
    },
    data: () => ({
      show2: false,
      input: ''
    }),
    mounted() {
      setTimeout(this.show2 = true,500);
    }
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .classify{
    display: flex;
    margin-top: 20px;
    height: 100px;
  }
</style>

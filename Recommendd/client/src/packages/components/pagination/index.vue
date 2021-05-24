<template>
  <table style="height: 38px;width: 100%;padding-top: 20px;">
    <tr>
      <th style="width: 25%;">
        <span style="color: #bababb;font-size: 13px;font-family: '微软雅黑 Light';float: left;">每{{pageSize}}条/页&nbsp;&nbsp;&nbsp;&nbsp;共{{totalCount}}条</span>
      </th>
      <th style="width: 55%" >
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="totalCount">
        </el-pagination>
      </th>
      <th style="width: 15%;">
        <span> 跳转至：</span><el-input style="width: 50px;" v-model="pageInput"></el-input>
      </th>
      <th style="width: 5%;">
        <button style="width: 40px;height:36px;background-color: #2164bd;font-size: 12px;color: white;border:none" @click="pageSubmit">跳转</button>
      </th>
    </tr>
  </table>
</template>

<script>
export default {
  data () {
    return {
      pageInput: ''
    }
  },
  mounted () {
    // todo
  },
  computed: {
    pageCount () {
      this.pageInput = this.$route.query.page * 1 || 1
      return Math.ceil(this.totalCount / 5)
    }
  },
  props: {
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 5
    },
    totalCount: {
      type: Number,
      default: 10
    }
  },
  methods: {
    /** 改变页码 */
    handleCurrentChange (val) {
      this.$emit('handleCurrentChange', val)
    },
    /** 点击跳转按钮 **/
    pageSubmit () {
      if (this.pageInput > this.totalCount / 5 + 1) {
        this.$message({
          message: '输入页数过大,请重新输入',
          type: 'failed'
        })
        this.pageInput = parseInt(this.totalCount / 5, 10) + 1
      } else if (this.pageInput < 1) {
        this.$message({
          message: '输入页数过小,请重新输入',
          type: 'failed'
        })
        this.pageInput = 1
      } else if (this.pageInput % 1 !== 0) {
        this.$message({
          message: '输入页数格式有误,请重新输入',
          type: 'failed'
        })
        this.pageInput = 1
      } else {
        this.handleCurrentChange(parseInt(this.pageInput, 10))
        this.page = parseInt(this.pageInput, 10)
      }
    }
  }
}
</script>

<style lang="scss">
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #2164bd;
  }

  .el-pagination {
    width: 300px;
  }

  .el-pagination__jump{
    width: 0;
  }

  .el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next, .el-pagination.is-background .el-pager li{
    background-color: #e7ebef;
  }
</style>
<!--
<template>
  <el-pagination
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="page"
    :page-size="pageSize"
    layout="total, prev, pager, next,jumper"
    :total="totalCount">
  </el-pagination>
</template>

<script>
  /**
   * 分页选择器
   */
  export default {
    name: 'sc-pagination',
    data () {
      return {
        currentPage: this.page
      }
    },
    mounted () {
      // todo
    },
    props: {
      page: {
        type: Number,
        default () {
          return 1
        }
      },
      pageSize: {
        type: Number,
        default () {
          return 10
        },
      },
      totalCount: {
        type: Number,
        default () {
          return 100
        }
      }
    },
    methods: {
      /** 改变每页显示数量 */
      handleSizeChange (val) {
        this.$emit('handleSizeChange', val)
      },
      /** 改变页码 */
      handleCurrentChange (val) {
        this.$emit('handleCurrentChange', val)
      }
    }
  }
</script>

<style lang="scss">
  .content-body {
    margin-top: 30px;
  }

  .el-pagination {
    text-align: center;
    margin-top: 30px;
  }

  .el-pagination__total {
    float: left;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    /*background-color: #eb4339;*/
    width: 34px;
    height: 34px;
    line-height: 34px;
  }

  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    /*background-color: #eb4339;*/
    color: white;
  }

  .el-pagination__jump {
    float: right;
  }

  .el-pager li{
    line-height: 34px;
    height: 34px;
  }

  .el-pagination.is-background .el-pager li{
    background-color: white;
  }

  .el-pagination.is-background .btn-prev {
    width: 34px;
    height: 34px;
    background-color: #fdf4f2;
    /*color: #eb4339;*/
    margin-right: 24px;
  }

  .el-pagination.is-background .btn-next {
    width: 34px;
    height: 34px;
    background-color: #fdf4f2;
    /*color: #eb4339;*/
    margin-left: 24px;
  }

</style>
-->

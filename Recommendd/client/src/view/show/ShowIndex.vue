<template>
  <div>
    <el-card>
      <div class="left">
        <el-form :inline="true" >

            <el-form-item>
              <el-input v-model="userID" placeholder="请输入用户ID" @keyup.enter="getTableData"clearable>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="words" placeholder="请输入历史搜索关键词" @keyup.enter="getTableData" clearable>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button--medium" type="primary" icon="el-icon-search" @click="getTableData()">搜索</el-button>
            </el-form-item>
        </el-form>
      </div>
    <comp-table
      v-loading="loading"
      :tableData="tableData"
      :tableHeader="tableHeader"
      :tableAttr="tableAttr"
      className="tableClassName"
      @tableOtherClick="tableOtherClick"
    >
    </comp-table>
    <comp-pagination
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      :page="page"
      :pageSize="pageSize"
      :totalCount="totalCount"
    >
    </comp-pagination>
    </el-card>
  </div>
</template>

<script>
  import Js2WordCloud from 'js2wordcloud'
  import {NewApi} from './Api'
  import CompTable from './table'
  import compPagination from '../../packages/components/pagination/index'
  import {Msg} from '../../tools/message'
  // import  '/src/assets/images/Woman.jpg'
    export default {
        name: "index",
      components: {
          CompTable,
          compPagination
      },
      data() {
        return {
          /** 分页信息 */
          page: 1,
          /** 每页数量  默认5 */
          pageSize: 5,
          /** 总数  需要动态获取 */
          totalCount: 20,
          userID:'',
          words:'',
          loading: false,
          tableHeader: [
            {prop: 'id', label: '用户ID'},
            {prop: 'words', label: '用户历史搜索关键词'}
          ],
          tableData: [],
          tableAttr: {
            noIndex: false,
            other: [
              {name: '查看模型', type: 'generateModel', color: '#2164bd'},
            ],
            show: false,
            shape: ''
          }
        }
      },
      methods:{
          run(){
            this.$router.push({path: '/VueCanvas'})
          },
          /** 获取模型的测试数据 */
          getTableData () {
            this.loading = true;
            this.data = {
              page: this.page,
              pageSize: this.pageSize,
              id:this.userID,
              words: this.words
            };
            NewApi.GetTrainData(this.data).then(res => {
              this.tableData = res.data.data;
              this.loading = false;
              this.totalCount = res.data.totalCount;
            }).catch((err) => {
              this.$message.error('加载表格数据出现错误!');
              this.loading = false;
            })
          },
        /** 改变每页显示数量 */
        handleSizeChange: function (val) {
          this.pageSize = val;
          this.getTableData()
        },
        /** 改变页码 */
        handleCurrentChange: function (val) {
          this.page = val;
          this.getTableData()
        },
        tableOtherClick (row, type, index) {
          if (type === 'generateModel') {
            NewApi.generateModel({id: row.id}).then(res => {
              this.$router.push({name: '模型展示', params: res.data.data})
            })
          }
        },
      },
      mounted() {
          this.getTableData();
      }
    }
</script>

<style scoped>
  .el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 29px;
  }
</style>

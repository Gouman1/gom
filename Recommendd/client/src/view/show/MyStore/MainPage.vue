<template>
  <div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="项目名称">
            <span>{{ props.row.projName }}</span>
          </el-form-item>
          <el-form-item label="项目编号">
            <span>{{ props.row.projCode }}</span>
          </el-form-item>
          <el-form-item label="品目">
            <span>{{ props.row.projItem }}</span>
          </el-form-item>
          <el-form-item label="采购地址">
            <span>{{ props.row.callUnitAddress }}</span>
          </el-form-item>

          <el-form-item label="项目联系人">
            <span>{{ props.row.projRelP }}</span>
          </el-form-item>
          <el-form-item label="中标金额">
            <span>1167000.00</span>
          </el-form-item>
          <el-form-item label="收费金额">
            <span>5020.00</span>
          </el-form-item>
          <el-form-item label="评审时间">
            <span>2020-12-21 09:55:00</span>
          </el-form-item>
          <el-form-item label="官网URL">
            <a style="color: #33a2f7">{{ props.row.sourseUrl }}</a>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="项目编号"
      prop="projCode">
    </el-table-column>
    <el-table-column
      label="采购项目名称"
      prop="projName">
    </el-table-column>
    <el-table-column
      label="品目"
      prop="projItem">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
    import {NewApi} from "../Api";

    export default {
        name: "MainPage",
      data() {
        return {
          tableData: []
        }
      },
      methods:{
        getTableData () {
          NewApi.GetData().then(res => {
            console.log(res.data.data);
            this.tableData = res.data.data;
          }).catch((err) => {
            this.$message.error('加载表格数据出现错误!');
            this.loading = false;
          })
        },
      },
      mounted() {
          this.getTableData();
      }
    }
</script>

<style>
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
</style>

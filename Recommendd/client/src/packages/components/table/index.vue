<template>
  <div class="compTable" :class="className">
    <el-table
      highlight="true"
      :data="tableData"
      :border="tableAttr.border"
      :default-sort="{prop: 'date', order: 'descending'}"
      :style="{width: defaWidth}"
      :row-style="rowStyle"
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
      v-loading="loading">
      <el-table-column
        v-if="tableAttr.rank"
        label="名次"
        type="index"
        align="center"
        width="200">
      </el-table-column>
      <el-table-column
        v-if="tableAttr.index"
        label="序号"
        type="index"
        width="80"
        align="center"
      ></el-table-column>
      <el-table-column
        v-for="item in tableHeader"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :sortable="item.sort || false"
      >
      </el-table-column>


      <el-table-column
        v-if="tableAttr.other"
        :fixed="tableAttr.fixed || false"
        label="操作"
        align="center"
        :width="tableAttr.operateColumnWidth || 140">
        <template slot-scope="scope">
          <el-button
            v-for="(list, index) in tableAttr.other"
            :icon="list.icon"
            @click="handleClick(scope.row, list.type, scope.$index)"
            :key="index"
            :style="{color: list.color|| ''}"
            type="text" size="small">{{list.name}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-if="tableAttr.forbideOrOpen"
        :fixed="tableAttr.fixed || false"
        label="操作"
        align="center"
        :width="tableAttr.operateColumnWidth || 140">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row, tableAttr.forbideOrOpen[0].type, scope.$index)" type="text">查看</el-button>
          <el-button @click="handleClick(scope.row, tableAttr.forbideOrOpen[1].type, scope.$index)" type="text">编辑</el-button>
          <el-button @click="handleClick(scope.row, tableAttr.forbideOrOpen[2].type, scope.$index)" type="text">删除</el-button>
        </template>
      </el-table-column>
      <!--<el-table-column
        v-if="tableAttr.other"
        width="150px"
        label="操作">
        <template slot-scope="scope">
          <el-button
            style="background-color: #DE7A35;color: #ffffff"
            size="mini"
            @click="editOrDelete(scope.$index,three)"
          >查看
          </el-button>
          <el-button
            style="background-color: #DE7A35;color: #ffffff"
            size="mini"
            @click="editOrDelete(scope.$index,one)"
          >编辑
          </el-button>
          <el-button
            style="background-color: #aaaaaa;color: #ffffff"
            size="mini"
            @click="editOrDelete(scope.$index,two)"
          >删除
          </el-button>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
  import Vue from 'vue'
  /**
   * 表格组件
   */
  export default {
    name: 'table-component',
    data() {
      return {
        isDisplay: [],
        isTrue: true,
        index: [],
        onlyTrue: true,
        one: 'edit',
        two: 'delete',
        three:'look'
      }
    },
    props: {
      /**  class名称 */
      className: String,
      /** loading */
      loading: {
        type: Boolean,
        default: false,
      },
      /** 表格配置属性 */
      tableAttr: {
        /** 表格宽度 */
        width: {
          type: [Number, String],
          default: '100%'
        },
        /** 是否带 */
        border: {
          type: Boolean,
          default: true
        },
        /** 热点类型分时统计数量调整 */
        hotspotIncrement: {
          type: Number,
          default:null
        },
        /** 热点类型分时统计数量调整 */
        hotspotRate: {
          type: Number,
          default:null
        },
        /** 政务中心 */
        transaction: {
          type: Number,
          default:null
        },
        /** 公共资源分类 */
        municipalTransaction: {
          type: Number,
          default:null
        },
        /** 领导进大厅 */
        condition: {
          type: Number,
          default:null
        },
        /** 政务服务 */
        service: {
          type: Number,
          default:null
        },
        display: {
          type: Number,
          default:null
        },
        /** 办件排名 */
        rank: {
          type: Number,
          default:null
        },
        /** 序号 */
        index: {
          type: Number,
          default: null
        },
        anotherDisplay: {
          type: Number,
          default:null
        },
      },
      /** 表格数据 */
      tableData: {
        type: Array,
        default: function () {
          return [{
            orderId: '20160502',
            startDistribution: '重庆两江新区',
            endDistribution: '上海市普陀区金沙江路 1518 弄',
            currentStation: '重庆中转站',
            productName:'可口可乐',
            kg:'6.9'
          }]
        }
      },
      /** 表头 */
      tableHeader: {
        type: Array,
        default: function () {
          return [
            /** prop:字段名 label：名称    width： 列跨度 sort： 是否排序 */
            {
              prop: 'orderId',
              label: '订单号',
            }, {
              prop: 'startDistribution',
              label: '起点',
            }, {
              prop: 'endDistribution',
              label: '终点',
            }, {
              prop: 'currentStation',
              label: '当前站点',
            }, {
              prop: 'productName',
              label: '物品名称',
            }, {
              prop: 'kg',
              label: '大致重量',
            }
          ]
        }
      },
    },
    computed: {
      defaWidth: function () {
        const {width} = this.tableAttr;
        return isNaN(width) ? width : width + 'px'
      }
    },
    methods: {
      handleClick(row, type, index) {
        this.$emit('tableOtherClick', row, type, index);
      },
      /** 斑马线 */
      rowStyle({row, column, rowIndex, columnIndex}){
        if(rowIndex % 2 === 0 ){ //指定坐标
          return 'background:#f8f9fb'
        }else{
          return 'background:#ffffff'
        }
      },
      cellStyle({row, column, rowIndex, columnIndex}){
        return 'text-align:center'
      },
      headerCellStyle({row, column, rowIndex, columnIndex}){
        return 'text-align:center;color:#333333'
      },
      change(index, data) {
        if(data !== 0) {
          Vue.set(this.isDisplay, index, true);
          Vue.set(this.index, index, 1);
        }
        this.isTrue = true;
        this.$emit('switchChange', index)
      },
      anotherChange(index, data, label) {
        if(data !== 0) {
          Vue.set(this.isDisplay, index, true);
          Vue.set(this.index, index, 1);
        }
        this.isTrue = true;
        this.$emit('switchChange', index, label)
      },
      edit(index, data) {
        this.$emit('editDetail', index, data)
      },
      anotherEdit(index, data, label) {
        this.$emit('editDetail', index, data, label)
      },
      editOrDelete(index, label) {
        this.$emit('editDelete', index, label)
      }
    }
  }
</script>

<style scoped>
  .editButton {
    background: url("../../../assets/images/edit.png");
  }
</style>

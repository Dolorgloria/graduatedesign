<template>
  <el-row>
    <el-col :span="12">
      <el-button type="danger" plain size="small" class="row" @click="getCoreCell">核心单元格</el-button>
    </el-col>
    <el-col :span="12">
      <el-tag class="ml-2 row" type="danger" effect="plain">{{coreCell}}</el-tag>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <el-button type="warning" plain size="small" class="row" @click="getRefCell">参考单元格</el-button>
    </el-col>
    <el-col :span="12">
      <el-tag class="ml-2 row" type="warning" effect="plain">{{ refCell }}</el-tag>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-button @click="beginAnalysis" type="primary" size="small" class="row">
        开启分析
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
import global from "@/global/global.js";
import {transformToStr} from '@/utils/params.js'
import {ElMessage} from "element-plus";
export default {
  name: "DrawerComponent1",
  data(){
    return{
      isBegin:false,
      coreCell:"",
      refCell:"",
      coreColor:global.coreColor,
      refColor: global.refColor
    }
  },
  methods:{
    showWarningMessage(message){
      ElMessage({
        message: message,
        type: 'warning',
      })
    },
    getRefCell(){
      let tmpCoordinate=window.luckysheet.getRangeWithFlatten()[0]
      if (isNaN(window.luckysheet.getRangeArray("oneDimensional",tmpCoordinate)[0])===false){
        window.luckysheet.setCellFormat(tmpCoordinate.r, tmpCoordinate.c, "bd", {borderType: "border-all",style: "1", color: "#ff0000"})
        this.refCell=transformToStr(tmpCoordinate.c+1)+(tmpCoordinate.r+1)
      }else {
        this.showWarningMessage('单元格内容不为纯数字')
      }
    },
    getCoreCell(){
      let tmpCoordinate=window.luckysheet.getRangeWithFlatten()[0]
      console.log(tmpCoordinate)
      if (isNaN(window.luckysheet.getRangeArray("oneDimensional",tmpCoordinate)[0])===false){
        window.luckysheet.setCellFormat(tmpCoordinate.r, tmpCoordinate.c, "bd", {borderType: "border-all",style: "1", color: "#ff0000"})
        this.coreCell=transformToStr(tmpCoordinate.c+1)+(tmpCoordinate.r+1)
      }else {
        this.showWarningMessage('单元格内容不为纯数字')
      }
    },
    beginAnalysis(){
      if (this.coreCell!==""&&this.refCell!==""){
        this.isBegin=true
        this.$emit("begin",this.isBegin)
      }else {
        this.showWarningMessage('请选择核心单元格与参考单元格')
      }
    }
  }
}
</script>

<style scoped>
.row{
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>
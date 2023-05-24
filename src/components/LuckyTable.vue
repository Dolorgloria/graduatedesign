<template>
  <div id="luckysheet"></div>
</template>

<script>
export default {
  name: "Table",
  data(){
    return{
      options: {
        container: 'luckysheet', // DOM容器的ID
        title: '电子表格', // 工作簿名称
        lang: 'zh', // 设定表格的语言
        showtoolbarConfig: {
          print: false,  // 工具栏隐藏打印按钮
        },
        showsheetbarConfig: {
          add: false, // 底部sheet页隐藏新增sheet按钮
          menu: false, // 底部sheet页隐藏管理按钮
        },
        sheetRightClickConfig: {
          hide: false, // 隐藏，取消隐藏
          move: false, // 向左移，向右移
        }
      }
    }
  },
  mounted() {
    this
  },
  methods:{
    createSheet(){
      luckysheet.create(this.options)
      this.sheetfile
    }
  }
}
</script>

<style scoped>
#luckysheet{
  margin: 0px;
  padding: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}
</style>
<template>
  <div class="app-container">

    <div class="filter-container">
      <el-checkbox-group v-model="checkboxVal">
        <el-checkbox label="apple">apple</el-checkbox>
        <el-checkbox label="banana">banana</el-checkbox>
        <el-checkbox label="orange">orange</el-checkbox>
        <el-checkbox label="berries">berries</el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table :data="tableData" :key='key' border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="fruitName" width="180"></el-table-column>
      <el-table-column :key='fruit' v-for='fruit in formThead' :label="fruit">
        <template slot-scope="scope">
          {{scope.row[fruit]}}
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
const defaultFormThead = ['apple', 'banana']

export default {
  data() {
    return {
      tableData: [
        {
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10',
          berries: 'berries-10'
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
          berries: 'berries-20'
        }
      ],
      key: 1, // table key
      formTheadOptions: ['apple', 'banana', 'orange', 'berries'],
      checkboxVal: defaultFormThead, // checkboxVal
      formThead: defaultFormThead // 默认表头 Default header
    }
  },
  watch: {
    checkboxVal(valArr) {
      this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
      this.key = this.key + 1// 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
    }
  }
}
</script>


<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">open a Table nested Dialog</el-button>
    <el-dialog title="History" @open="$nextTick(() => opened())" :visible.sync="dialogVisible">
      hello, world!
      <el-table :data="tableData" :default-sort = "{prop: 'date', order: 'descending'}" style="width: 100%" height="250" ref="table">
        <el-table-column v-for="(column, key, index) in columns" :key="index" :type="column.type" :prop="column.prop" :label="column.label" :width="column.pxWidth"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Dialog, Table, TableColumn } from "element-ui";

Vue.component(Button.name, Button);
Vue.component(Dialog.name, Dialog);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);

export default {
  data() {
    return {
      dialogVisible: false,
      columns: [
        {
          type: "index",
          prop: "",
          label: "",
          width: 0.1,
          pxWidth: 0
        },
        {
          type: "",
          prop: "sourceLang",
          label: "Source",
          width: 0.35,
          pxWidth: 0
        },
        {
          type: "",
          prop: "targetLang",
          label: "Target",
          width: 0.55,
          pxWidth: 0
        }
      ],
      tableData: [
        {
          sourceLang: "Hallo",
          targetLang: "Hello"
        },
        {
          sourceLang: "wie geht es dir",
          targetLang: "how are you"
        },
        {
          sourceLang: "mein name ist Stefan",
          targetLang: "my name is steven"
        }
      ]
    };
  },

  methods: {
    opened() {
      const tableWidth = this.$refs.table.$el.clientWidth;
      for (let i of Object.keys(this.$data.columns)) {
        this.columns[i].pxWidth = this.$data.columns[i].width * tableWidth;
      }
    }
  }
};
</script>

<style>
@import "../node_modules/element-ui/lib/theme-chalk/button.css";
@import "../node_modules/element-ui/lib/theme-chalk/dialog.css";
@import "../node_modules/element-ui/lib/theme-chalk/table.css";
</style>

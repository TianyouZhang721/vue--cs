<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="180">
        <template slot-scope="scope">
          <!-- scope.$index 就是每一项的下标  scope.row 就是之前的item -->
          <p>{{scope.$index + 1}}</p>
        </template>
      </el-table-column>
      <el-table-column label="用户名" width="180">
        <template slot-scope="scope">
          <p>{{ scope.row.username }}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="用户详情" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-input v-model="username" placeholder="请输入内容" :disabled="true"></el-input>
      <el-input v-model="password" placeholder="请输入内容" :disabled="true"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get("/api/memberlist").then(res => {
      console.log(res);
      this.tableData = res.data.data;
    });
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      username: "",
      password: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(row);
      this.dialogVisible = true
      this.username = row.username
      this.password = row.password
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
};
</script>

<style lang="stylus" scoped></style>
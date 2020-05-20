<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="180">
        <template slot-scope="scope">
          <!-- scope.$index 就是每一项的下标  scope.row 就是之前的item -->
          <p>{{scope.$index + 1}}</p>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="180">
        <template slot-scope="scope">
          <p>{{ scope.row.title }}</p>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          <p>{{ scope.row.status | status }}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-popconfirm title="你确定删除此分类吗" @onConfirm="del(scope.row._id)">
            <el-button type="danger" size="mini" slot="reference"  >删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-input placeholder="请输入标题" v-model="classifyTitle"></el-input>
      <el-switch v-model="status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      title: "",
      status: false,
      classifyTitle: "",
      id: ""
    };
  },
  methods: {
      del(id) {
          this.$http.post("/api/catedel", {
              id: id
          }).then(res => {
              console.log(res)
              if (res.data.status == 1) {
                  this.getData()
              }
          })
      },
    getData() {
      this.$http.get("/api/catelist").then(res => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
    sure() {
      if (this.title == "分类添加") {
        this.$http
          .post("/api/cateadd", {
            title: this.classifyTitle,
            status: this.status
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 1) {
              this.dialogVisible = false;
              this.getData();
            }
          });
      } else if (this.title == "分类编辑") {
        this.$http
          .post("/api/cateedit", {
            id: this.id,
            title: this.classifyTitle,
            status: this.status
          })
          .then(res => {
            if (res.data.status == 1) {
              this.dialogVisible = false;
              this.getData();
            }
          });
      }
    },
    add() {
      this.dialogVisible = true;
      this.title = "分类添加";
    },
    handleEdit(index, row) {
      console.log(row);
      this.dialogVisible = true;
      this.title = "分类编辑";
      this.classifyTitle = row.title;
      this.status = row.status;
      this.id = row._id;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.classifyTitle = "";
      this.status = false;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="stylus" scoped></style>
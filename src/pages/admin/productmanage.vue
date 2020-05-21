<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="180">
        <template slot-scope="scope">
          <p>{{ scope.row.title }}</p>
        </template>
      </el-table-column>
      <el-table-column label="商品分类" width="180">
        <template slot-scope="scope">
          <p>{{ scope.row.cate }}</p>
        </template>
      </el-table-column>
      <el-table-column label="商品价格" width="180">
        <template slot-scope="scope">
          <p>{{ scope.row.price }}</p>
        </template>
      </el-table-column>
      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.imgurl ? 'http://localhost:3000' + scope.row.imgurl : 'http://localhost:3000' + scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column label="状态" width="180">
        <template slot-scope="scope">
          <p>{{scope.row.status | status}}</p>
          <!-- <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-popconfirm title="你确定删除此商品吗" @onConfirm="del(scope.row._id)">
            <el-button type="danger" size="mini" slot="reference"  >删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称">
            <!-- this.$http.post("/abc", {}) -->
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <!-- <select name="" id="">
            <option value="a">a</option>
          </select> -->
          <el-select v-model="form.cate" placeholder="请选择活动区域">
            <el-option 
            :label="item.title" 
            :value="item.title" 
            v-for="(item, index) in cateArr"
            :key="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格">
            <!-- this.$http.post("/abc", {}) -->
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="是否上架">
          <el-switch v-model="form.status"></el-switch>
        </el-form-item>
        <el-form-item label="上传图片">
          <div class="box">
              <input type="file" id="file" ref="file" @change="fileChange">
              <div class="add-box">+</div>
          </div>
          <img :src="imgurl" alt="">
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"  @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: "",
      tableData: [],
      title: "", // 弹框的标题
      dialogVisible: false, // 弹框的显示
       form: {
        //    this.$http.post("/add", {
        //        cate: ,
        //        title: ,
        //        price: 
        //        img: 
        //    })
          cate: '',
          title: '',
          price: '',
          status: false
        },
        cateArr: [],
        id: ""
    };
  },
  methods: {
      del(id) {
          this.$http.post("/api/goodsdel", {
              id
          }).then(res => {
              console.log(res)
              if(res.data.status == 1) {
                this.getData()
              }
          })
      },
    fileChange() {
      console.log("改变了")
      var file = this.$refs.file.files[0]
      var read = new FileReader()
      // 开始读取文件
      read.readAsDataURL(file)
      var that = this
      read.onload = function() {
        // 文件读取完毕 this.result 读取图片返回base64字符串
        console.log(this.result)
        that.imgurl = this.result
      }
    },
    add() {
      this.dialogVisible = true;
      this.title = "商品添加"
    },
    handleEdit(index, row) {
      console.log(index, row);
      // 编辑
      this.dialogVisible = true
      this.title = "商品编辑"
      this.form.title = row.title
      this.form.cate = row.cate
      this.form.price = row.price
      this.form.status = row.status
      this.imgurl = 'http://localhost:3000' + (row.imgurl || row.img)
      this.id = row._id
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit() {
      let form = new FormData()
      // 需要将this.form对象内的所有值，添加到formData对象中  form.append()
      for(var key in this.form) {
        form.append(key, this.form[key])
      }
      // var file = document.getElementById("file")
      var file = this.$refs.file.files[0]
      form.append("img", file)
      // dom元素.files[0] 可以获取上传的文件对象
      // console.log(file.files[0])

      // console.log(form.get("title"))
      // 输出fomrdata对象什么都看不到
      // console.log(form)
      if (this.title == '商品添加') {
          this.$http.post("/api/goodsadd", form).then(res => {
            console.log(res)
            if(res.data.status == 1) {
                this.dialogVisible = false;
                this.getData()
            }
        })
      } else if(this.title == '商品编辑') {
          form.append("id", this.id)
          this.$http.post("/api/goodsedit", form).then(res => {
              console.log(res)
              if(res.data.status == 1) {
                this.dialogVisible = false;
                this.getData()
              }
          })
      }
    },
    sure() {},
    getData() {
      this.$http.get("/api/goodslist").then(res => {
      console.log(res);
      this.tableData = res.data.data;
    });
    }
  },
  mounted() {
    this.getData()
    this.$http.get("/api/catelist").then(res => {
      console.log(res)
      this.cateArr = res.data.data
    })
  }
};
</script>

<style lang="stylus" scoped>
td 
    img 
        width: 100px;
        height: 100px;
  
.el-form-item__content 
    display flex
    img 
        width 100px
        height 100px
        float left
    .box    
        width 100px
        height 100px
        position relative
        float left
        input 
            width 100%
            height 100%
            position absolute
            top 0
            left 0
            opacity 0
            z-index 99
        .add-box 
            width 100%
            height 100%
            position absolute
            top 0
            left 0
            border 1px dashed #333
            font-size 50px
            line-height 100px
            text-align center
</style>
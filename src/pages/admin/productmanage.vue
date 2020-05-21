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
          <img :src="'http://localhost:3000' + scope.row.imgurl" alt />
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
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
          <el-select v-model="form.cate" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
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
              <input type="file">
              <div class="add-box">+</div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
    <!-- <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          img: '',
          status: false
        }
    };
  },
  methods: {
    add() {
      this.dialogVisible = true;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  mounted() {
    this.$http.get("/api/goodslist").then(res => {
      console.log(res);
      this.tableData = res.data.data;
    });
  }
};
</script>

<style lang="stylus" scoped>
td 
    img 
        width: 100px;
        height: 100px;
  

.box    
    width 100px
    height 100px
    position relative
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
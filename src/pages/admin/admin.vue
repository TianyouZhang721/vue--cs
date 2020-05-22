<template>
  <div class="admin-container">
    <el-container>
      <el-header>后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-col>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router
            >
                <el-menu-item index="/admin/home">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
              <el-submenu index="2">
                
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <!-- <el-menu-item-group> -->
                  
                  <el-menu-item index="/admin/member">会员管理</el-menu-item>
                  <el-menu-item index="/admin/adminuser">管理员管理</el-menu-item>
                <!-- </el-menu-item-group> -->
              </el-submenu>
              <el-submenu index="3">
                
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品管理</span>
                </template>
                <!-- <el-menu-item-group> -->
                  
                  <el-menu-item index="/admin/classifymanage">分类管理</el-menu-item>
                  <el-menu-item index="/admin/productmanage">商品管理</el-menu-item>
                  <el-menu-item index="/admin/echarts">echarts</el-menu-item>
                <!-- </el-menu-item-group> -->
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="stylus" scoped>
.admin-container {
  width: 100%;
  height: 100%;

  .el-container {
    width: 100%;
    height: 100%;

    .el-col {
      height: 100%;

      ul {
        height: 100%;
      }
    }
  }
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  height: 100%;
}
</style>
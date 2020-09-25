<template>
    <div id="nav" class="navbar">
        <nav class="container-fluid navbar-default">
<!--          头像-->
            <ul class="nav navbar-nav">
                <li class="nav dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <img style="margin-top: -0.6vh;" id="touxiang" class="img-circle" src="../../assets/touxiang.jpg" alt="">
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="">hello1</a></li>
                    <li><a href="">hello1</a></li>
                    <li><a href="">hello1</a></li>
                  </ul>
                </li>
            </ul>
          <div class="collapse navbar-collapse">
            <div class="navbar-header">
              <a href="" class="navbar-brand">首页</a>
            </div>
            <ul class="nav navbar-nav">
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
            </ul>
            <!--          右边登录注册-->
            <div style="margin-top: 1vh;" class='navbar-right'>
              <button type="button" class="btn btn-primary">登录</button>
              <button type="button" style="margin-left: 1vh;" class="btn btn-default">注册</button>
            </div>
<!--            搜索框-->
            <form action="" class="navbar-form hidden-md hidden-sm hidden-xs" role="search">
              <div class="form-group col-sm-offset-6">
                <input type="text" class="form-control">
              </div>
              <button type="submit" class="btn btn-default">搜索</button>
            </form>

          </div>
        </nav>
    </div>
</template>

<script>


export default {
  name: "nav"
}
</script>

<style scoped>
  #touxiang{
    width: 4vh;
    height: 4vh;
  }
</style>
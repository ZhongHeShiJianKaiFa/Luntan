<template>
    <div id="Navpart" class="navbar">
        <nav class="container-fluid navbar-default">
<!--          头像-->
            <ul class="nav navbar-nav">
                <li class="nav dropdown">
                  <a href="#" id="head">
                    <img style="margin-top: -0.6rem;" id="touxiang" class="img-circle" src="../../assets/touxiang.jpg" alt="">
                    <ul id="dropdown_head" class="dropdown-menu">
                      <li><a href="">hello1</a></li>
                      <li><a href="">hello1</a></li>
                      <li><a href="">hello1</a></li>
                    </ul>
                  </a>
                </li>
            </ul>
          <div class="collapse navbar-collapse">
            <div class="navbar-header">
              <a href="" class="navbar-brand">首页</a>
            </div>
            <ul class="nav navbar-nav" id="tabs">
              <li class="active"><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
            <!--          右边登录注册-->
            <div style="margin-top: 1vh;" class='navbar-right'>
              <a href="http://localhost:8080/#/login"> <button type="button" class="btn btn-primary">登录</button></a>
              <a href="http://localhost:8080/#/login"> <button type="button" style="margin-left: 1vh;" class="btn btn-default">注册</button></a>
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
        <div class="jumbotron" style="background-color: rgb(239, 228, 204);">
          <div class="container">
            <h1 style="font-family: '.SF NS Mono';  color: #3e1707; ">LNB 游戏论坛</h1>
          </div>
        </div>
    </div>
</template>


<script>

export default {
  name: "Navpart",
  created() {
  },
  data(){
    return{
      show:false
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  #touxiang{
    width: 4rem;
    height: 4rem;
  }
  #dropdown_head{
    display: none;
  }
  #head:hover #dropdown_head{
    display:block;
    list-style: none;
  }
  #dropdown_head li{
    border-bottom: #0f0f0f;
  }

/*  按钮*/
  .btn-primary {
    color: #fff;
    background-color: rgb(171, 128, 76);
    border-color: rgb(234, 167, 66);
  }
  .btn-primary:focus,
  .btn-primary.focus {
    color: #fff;
    background-color: rgb(234, 167, 66);
    border-color: rgb(234, 206, 66);
  }
  .btn-primary:hover {
    color: #fff;
    background-color: rgb(234, 167, 66);
    border-color: rgb(234, 206, 66);
  }
  .btn-primary:active,
  .btn-primary.active,
  .open > .dropdown-toggle.btn-primary {
    color: #fff;
    background-color: rgb(234, 167, 66);
    border-color: rgb(234, 206, 66);
  }
  .btn-primary:active:hover,
  .btn-primary.active:hover,
  .open > .dropdown-toggle.btn-primary:hover,
  .btn-primary:active:focus,
  .btn-primary.active:focus,
  .open > .dropdown-toggle.btn-primary:focus,
  .btn-primary:active.focus,
  .btn-primary.active.focus,
  .open > .dropdown-toggle.btn-primary.focus {
    color: #fff;
    background-color: rgb(234, 206, 66);
    border-color: rgb(234, 206, 66);
  }

  fieldset[disabled] .btn-primary.focus {
    background-color: rgb(171, 128, 76);
    border-color: rgb(234, 167, 66);
  }
</style>
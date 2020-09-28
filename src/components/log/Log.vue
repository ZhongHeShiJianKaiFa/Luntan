<template>
<div id="Log" class="container">
  <div class="jumbotron">
    <div class="container">
      <h1 style="font-family: 'American Typewriter'">Login</h1>
    </div>
  </div>
  <form action="" class="submit form-horizontal container " role="form">
    <div class="form-group">
      <label for="number" class="control-label col-xs-2">Phone:</label>
      <div class="col-xs-9">
        <input type="text" id="number" class="form-control col-xs-8" placeholder="Please Enter your Phone Number">
      </div>
    </div>

    <div class="form-group">
      <label for="pwd" class="control-label col-xs-2">PassWord:</label>
      <div class="col-xs-9">
        <input type="password" id="pwd" class="form-control col-xs-8" placeholder="Please Enter your PassWord">
      </div>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary col-xs-2 col-xs-offset-3">Login</button>
      <button type="submit" class="btn btn-primary col-xs-2 col-xs-offset-1">Sign</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "Log"
}
</script>

<style scoped>
.jumbotron{
  margin-top: 10rem;
  background-color: #caa072;
}
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
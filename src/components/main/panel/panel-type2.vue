<template>
<div id="panelTwo" class="col-xs-6">
  <div class="panel panel-default">
    <div class="media">
      <div class="media-body">
        <img class="col-xs-4 img-rounded" src="../../../assets/2.jpg" alt="">
        <img class="col-xs-4 img-rounded" src="../../../assets/2.jpg" alt="">
        <img class="col-xs-4 img-rounded" src="../../../assets/2.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="panel panel-info">
    <div class="panel-heading">
      拳头游戏
    </div>
  </div>
  <div class="thumbnail col-xs-6">
    <a href="#"><img src="../../../assets/1.jpg" alt=""></a>
    <div class="caption">
      <h3>网事杂谈</h3>
      <p>是滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答的</p>
    </div>
  </div>
  <div class="thumbnail col-xs-6">
    <a href="#"><img src="../../../assets/2.jpg" alt=""></a>
    <div class="caption" style="overflow: scroll">
      <h3>寂寞的车</h3>
      <p>滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答的的</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
name: "panel-type2"
}
</script>

<style scoped>
img{
  height: 16rem !important;
}
.media-body img{
  width: 21rem;
}
.panel-info {
  border-color: rgba(106, 110, 101, 0.3);
}
.panel-info > .panel-heading {
  color: #8f3916;
  background-color: rgb(239, 228, 204);;
  border-color: rgba(63, 64, 62, 0.3);
}

.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: rgba(106, 110, 101, 0.3);
}

.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f
}

.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: rgba(106, 110, 101, 0.3);
}
</style>
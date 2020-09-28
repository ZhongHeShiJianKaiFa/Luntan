<template>
<div id="main">
  <Navpart/>
  <Panel/>
  <PanelTwo/>
</div>
</template>

<script>
import Navpart from "./../nav/Navpart";
import Panel from "./panel/panel";
import PanelTwo from './panel/panel-type2'

export default {
  name: "main",
  components: {Navpart,Panel,PanelTwo},
}
</script>

<style scoped>

</style>
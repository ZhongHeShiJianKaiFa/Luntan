<template>
  <div id="app">
      <Navpart/>
  </div>
</template>

<script>
import Navpart from './components/nav/Navpart'

export default {
  name: 'App',
  components: {
      Navpart
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>

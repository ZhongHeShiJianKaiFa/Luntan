<template>
  <div id="app">
      <Nav/>
  </div>
</template>

<script>
import Nav from './components/nav/nav'

export default {
  name: 'App',
  components: {
      Nav
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>

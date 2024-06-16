<template>
  <div id="app">
    <PianoUIComponent />
  </div>
</template>

<script>
import PianoUIComponent from './components/PianoUIComponent.vue';


export default {
  name: 'App',
  components: {
    PianoUIComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

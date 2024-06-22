<template>
  <div id="app">
    <PianoUIComponent />
    <InputComponent />
  </div>
</template>

<script>
import InputComponent from './components/InputComponent.vue'
import PianoUIComponent from './components/PianoUIComponent.vue'

export default {
  name: 'App',
  components: {
    PianoUIComponent,
    InputComponent,
  },
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

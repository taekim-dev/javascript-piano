<template>
    <div class="piano-ui">
      <div v-for="(key, index) in keys" :key="index" @click="playKey(key)">
        {{ key.name }} ( {{ key.key }} )
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        keys: [
          { name: 'Do', key: 'A', sound: require('@/assets/sounds/do.wav') },
          { name: 'Re', key: 'S', sound: require('@/assets/sounds/re.wav') },
          { name: 'Mi', key: 'D', sound: require('@/assets/sounds/mi.wav') },
          { name: 'Fa', key: 'F', sound: require('@/assets/sounds/fa.wav') },
          { name: 'So', key: 'G', sound: require('@/assets/sounds/so.wav') },
          { name: 'La', key: 'H', sound: require('@/assets/sounds/la.wav') },
        ]
      };
    },
    methods: {
      playKey(key) {
        const audio = new Audio(key.sound);
        audio.play();
      },
      handleKeyPress(event) {
        const key = this.keys.find(k => k.key.toLowerCase() === event.key.toLowerCase());
        if (key) {
          this.playKey(key);
        }
      }
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeyPress);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeyPress);
    }
  };
</script>
  
<style>
  .piano-ui div {
    display: inline-block;
    margin: 5px;
    padding: 10px;
    border: 1px solid black;
    cursor: pointer;
  }
</style>
  
<template>
    <div class="piano-ui">
      <div v-for="(key, index) in keys" :key="index" @click="playKey(key)">
        {{ key.name }}
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        keys: [
          { name: 'Do', sound: require('@/assets/sounds/do.wav') },
          { name: 'Re', sound: require('@/assets/sounds/re.wav') },
          { name: 'Mi', sound: require('@/assets/sounds/mi.wav') },
          { name: 'Fa', sound: require('@/assets/sounds/fa.wav') },
          { name: 'So', sound: require('@/assets/sounds/so.wav') },
          { name: 'La', sound: require('@/assets/sounds/la.wav') },
        ]
      };
    },
    methods: {
      playKey(key) {
        const audio = new Audio(key.sound);
        audio.play();
      }
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
  
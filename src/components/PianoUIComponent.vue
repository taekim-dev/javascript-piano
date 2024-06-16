<template>
    <div class="piano-ui">
      <div v-for="(key, index) in keys" :key="index" @click="playKey(key)">
        {{ key.name }} ( {{ key.key }} )
      </div>
    </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'PianoUIComponent',
  setup() {
    const keys = ref([
      { name: 'Do', key: 'A', sound: require('@/assets/sounds/do.wav') },
      { name: 'Re', key: 'S', sound: require('@/assets/sounds/re.wav') },
      { name: 'Mi', key: 'D', sound: require('@/assets/sounds/mi.wav') },
      { name: 'Fa', key: 'F', sound: require('@/assets/sounds/fa.wav') },
      { name: 'So', key: 'G', sound: require('@/assets/sounds/so.wav') },
      { name: 'La', key: 'H', sound: require('@/assets/sounds/la.wav') },
    ]);

    const playKey = (key) => {
      const audio = new Audio(key.sound);
      audio.play();
    }

    const handleKeyPress = (event) => {
      const key = keys.value.find(k => k.key.toLowerCase() === event.key.toLowerCase())
      if (key) {
        playKey(key);
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeyPress);
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeyPress);
    })

    return  {
      keys,
      playKey,
      handleKeyPress
    }
  }
}
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
  
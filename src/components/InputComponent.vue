<template>
  <div class="input-component">
    <input type="text" class="input-component__input" v-model="userInput" @input="convertToUpperCase" placeholder="Enter keys (e.g., ASD)" />
    <div class="input-component__controls">
      <button class="input-component__button input-component__button--play" @click="playInput">Play</button>
      <button class="input-component__button input-component__button--save" @click="saveSounds">Save</button>
    </div>
  </div>
  <div class="save-component">
    <div v-for="(item, index) in savedAudios" :key="index">
      {{ item.title }} : {{ item.audio }}
      <button class="save-component__button save-component__button--play" @click="playSavedSound(index)">▶️</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'InputComponent',
  setup() {
    const userInput = ref('');
    const savedInput = ref('');
    const playingAudios = ref([]);
    const savedAudios = ref([]);

    const keyMap = {
      'A': { name: 'Do', sound: require('@/assets/sounds/do.wav') },
      'S': { name: 'Re', sound: require('@/assets/sounds/re.wav') },
      'D': { name: 'Mi', sound: require('@/assets/sounds/mi.wav') },
      'F': { name: 'Fa', sound: require('@/assets/sounds/fa.wav') },
      'G': { name: 'So', sound: require('@/assets/sounds/so.wav') },
      'H': { name: 'La', sound: require('@/assets/sounds/la.wav') },
    };

    const convertToUpperCase = (event) => {
      const input = event.target.value.toUpperCase();
      const validKeys = Object.keys(keyMap);
      let filteredInput = '';

      for (let char of input) {
        if (validKeys.includes(char) || char === ' ') {
          filteredInput += char;
        }
      }
      userInput.value = filteredInput;
    };

    const playInput = () => {
      const notes = userInput.value.split('');
      let currentDelay = 0;

      notes.forEach((char) => {
        if (char === ' ') {
          currentDelay += 300;
        }
        if (keyMap[char]) {
          const timeout = setTimeout(() => {
            const audio = new Audio(keyMap[char].sound);
            audio.play();
            playingAudios.value.push({ audio, timeout });
          }, currentDelay);

          currentDelay += 500;
        }
      });
    };

    const playSavedSound = (index) => {
      const savedAudioInput = savedAudios.value[index];
      savedInput.value = savedAudioInput.audio;
      console.log(savedInput.value);
    }
    const saveSounds = () => {
      const title = prompt('Name the Song');
      if (title) {
        savedAudios.value.push({title, audio: userInput.value});
        userInput.value = ''
      }
    }

    return {
      userInput,
      convertToUpperCase,
      playInput,
      savedInput,
      playSavedSound,
      saveSounds,
      savedAudios
    };
  }
};
</script>
<style lang="scss" scoped>
  .input-component {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__input {
      margin-bottom: 10px;
      padding: 5px;
      width: 300px;
      font-size: 18px;
      border: 2px solid #2c3e50;
      border-radius: 5px;
      text-transform: uppercase;
    }

    &__controls {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    &__button {
      padding: 10px 20px;
      font-size: 18px;
      color: white;
      background-color: #2c3e50;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 5px;
    }
  }
  .save-component {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__button {
      padding: 10px 20px;
      font-size: 20px;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 15px;
    }
  }
</style>
  
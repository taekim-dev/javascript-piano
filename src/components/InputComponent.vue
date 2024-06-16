<template>
    <div class="input-component">
      <input type="text" v-model="userInput" @input="convertToUpperCase" placeholder="Enter keys (e.g., ASD)" />
      <div class="play">
        <button @click="playInput">Play</button>
        <button @click="stopSounds">Stop</button>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'InputComponent',
  setup() {
    const userInput = ref('');
    const playingAudios = ref([]);

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
          setTimeout(() => {
            const audio = new Audio(keyMap[char].sound);
            playingAudios.value.push(audio);
            audio.play();
          }, currentDelay); // 500 ms delay between sounds

          currentDelay += 500;
        }
      });
    };

    const stopSounds = () => {
      playingAudios.value.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      playingAudios.value = [];
    };

    return {
      userInput,
      convertToUpperCase,
      playInput,
      stopSounds
    };
  }
};
</script>
<style>
    .input-component {
      margin: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .play {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .input-component input {
      margin-bottom: 10px;
      padding: 5px;
      width: 300px;
      font-size: 18px;
      border: 2px solid #2c3e50;
      border-radius: 5px;
      text-transform: uppercase;
    }

    .input-component button {
      padding: 10px 20px;
      font-size: 18px;
      color: white;
      background-color: #2c3e50;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 5px;
    }
    .input-component button:hover {
      background: #1a252f;
    }
</style>
  
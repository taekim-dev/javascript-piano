<template>
    <div class="input-component">
      <input type="text" v-model="userInput" placeholder="Enter keys (e.g., ASD)" />
      <button @click="playInput">Play</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
        userInput: '',
        keyMap: {
          'A': { name: 'Do', sound: require('@/assets/sounds/do.wav') },
          'S': { name: 'Re', sound: require('@/assets/sounds/re.wav') },
          'D': { name: 'Mi', sound: require('@/assets/sounds/mi.wav') },
          'F': { name: 'Fa', sound: require('@/assets/sounds/fa.wav') },
          'G': { name: 'So', sound: require('@/assets/sounds/so.wav') },
          'H': { name: 'La', sound: require('@/assets/sounds/la.wav') },
        }
      };
    },
    methods: {
      playInput() {
        for (let char of this.userInput.toUpperCase()) {
          if (this.keyMap[char]) {
            const audio = new Audio(this.keyMap[char].sound);
            audio.play();
          }
        }
      }
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

    .input-component input {
      margin-bottom: 10px;
      padding: 5px;
      width: 300px;
      font-size: 18px;
      border: 2px solid #2c3e50;
      border-radius: 5px;
    }

    .input-component button {
      padding: 10px 20px;
      font-size: 18px;
      color: white;
      background-color: #2c3e50;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .input-component button:hover {
      background: #1a252f;
    }
</style>
  
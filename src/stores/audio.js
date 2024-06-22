import { defineStore } from 'pinia';

export const useAudioStore = defineStore('audio', {
    state: () => ({
      savedAudios: [],
      playingAudios: [],
      SAVE_LIMIT: 10,
    }),

    actions: {
        saveAudio(title, input, keys) {
          if (this.savedAudios.length >= this.SAVE_LIMIT) {
            this.savedAudios.shift();
          }
          this.savedAudios.push({ title, input, keys });
          localStorage.setItem('savedAudios', JSON.stringify(this.savedAudios));
        },
        clearAudios() {
          this.savedAudios = []; // This doesn't do anything
          localStorage.removeItem('savedAudios');
          console.log('clearAudios called, savedAudios:', this.savedAudios);
        },
        loadSavedAudios() {
          const savedAudiosFromStorage = localStorage.getItem('savedAudios');
          if (savedAudiosFromStorage) {
            this.savedAudios = JSON.parse(savedAudiosFromStorage);
          }
        },
    }
});
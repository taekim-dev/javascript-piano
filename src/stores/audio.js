import { defineStore } from 'pinia';

export const useAudioStore = defineStore('audio', {
    state: () => ({
      savedAudios: [],
      playingAudios: [],
      SAVE_LIMIT: 10,
    }),

    actions: {
        saveAudio() {
            localStorage.setItem('savedAudios', JSON.stringify(this.savedAudios));
        },

        clearAudios() {
            this.savedAudios = [];
            localStorage.removeItem('savedAudios');
        },

        loadSavedAudios() {
            const savedAudiosFromStorage = localStorage.getItem('savedAudios');
            if (savedAudiosFromStorage) {
                this.savedAudios = JSON.parse(savedAudiosFromStorage);
            }
        },

        playNotes (){

        }

    }


});
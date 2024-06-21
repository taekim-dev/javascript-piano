import { defineStore } from 'pinia';

export const useAudioStore = defineStore('audio', {
    state: () => ({
      savedAudios: [],
      playingAudios: [],
      SAVE_LIMIT: 10,
    }),

    actions: {
        saveAudio() {

        },

        clearAudios() {

        },

        loadSavedAudios() {

        },

        playNotes (){

        }

    }


});
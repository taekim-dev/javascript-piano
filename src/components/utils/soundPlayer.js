export const playNotes = (notes, keyMap, playingAudios) => {
    let currentDelay = 0;
    notes.forEach((char) => {
      if (char === ' ') {
        currentDelay += 300;
      }
      if (keyMap[char]) {
        const timeout = setTimeout(() => {
          const audio = new Audio(keyMap[char].sound);
          audio.play();
          if (playingAudios) {
            playingAudios.push({ audio, timeout });
          }
        }, currentDelay);
        currentDelay += 500;
      }
    });
};
  
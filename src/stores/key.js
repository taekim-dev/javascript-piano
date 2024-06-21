import { defineStore } from 'pinia'

export const useKeyStore = defineStore('key', {
    state : () => ({
        keyMap: {
            'A': { name: 'Do', sound: require('@/assets/sounds/do.wav') },
            'S': { name: 'Re', sound: require('@/assets/sounds/re.wav') },
            'D': { name: 'Mi', sound: require('@/assets/sounds/mi.wav') },
            'F': { name: 'Fa', sound: require('@/assets/sounds/fa.wav') },
            'G': { name: 'So', sound: require('@/assets/sounds/so.wav') },
            'H': { name: 'La', sound: require('@/assets/sounds/la.wav') },
        },
        keys: [
            { name: 'Do', key: 'A', sound: require('@/assets/sounds/do.wav') },
            { name: 'Re', key: 'S', sound: require('@/assets/sounds/re.wav') },
            { name: 'Mi', key: 'D', sound: require('@/assets/sounds/mi.wav') },
            { name: 'Fa', key: 'F', sound: require('@/assets/sounds/fa.wav') },
            { name: 'So', key: 'G', sound: require('@/assets/sounds/so.wav') },
            { name: 'La', key: 'H', sound: require('@/assets/sounds/la.wav') },
        ]
    }),
})
<template>
  <button>Sound</button>
</template>

<script>
import SoundManager from '../classes/SoundManager';

export default {
  data: function() {
    return {};
  },

  created() {
    let soundManager = new SoundManager();
    let sound = soundManager.get('https://dl.dropboxusercontent.com/s/x72vhvg6rnpzn9b/1-Best-Elevator-Music-Royalty-Free.mp3');
    //sound.play();
  },

  methods: {
    
  }
}

</script>

<template>
  <div>
    <h2>Hello from {{text}}</h2>
    <SoundButton></SoundButton>
    <Speech></Speech>
    <Translation></Translation>
  </div>
</template>

<script>
import Speech from './subtitle/Speech.vue';
import Translation from './subtitle/Translation.vue';
import SoundButton from './Sound.vue';

export default {
  components: {
    Speech,
    Translation,
    SoundButton
  },

  data: {

  },

  methods: {

  }
}
</script>
<style>

</style>

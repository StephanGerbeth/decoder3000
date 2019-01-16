<template>
  <div>
    <h2>Hello from {{text}}</h2>
    <SoundButton></SoundButton>
    <Speech></Speech>
    <Translation></Translation>
    <Modal></Modal>
  </div>
</template>

<script>
import Speech from "./subtitle/Speech.vue";
import Translation from "./subtitle/Translation.vue";
import SoundButton from "./Sound.vue";
import Modal from "../molecules/Modal.vue";

export default {
  components: {
    Speech,
    Translation,
    SoundButton,
    Modal
  },

  data: {},

  methods: {}
};
</script>
<style>
</style>

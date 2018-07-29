<template>
  <ul class="source">
    <li v-for="entry in lastEntryInTextHistory" v-text="entry" v-bind:key="entry"></li> 
    <li v-text="textPartial"></li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      textPartial: "",
      textHistory: []
    };
  },

  computed: {
    lastEntryInTextHistory: function() {
      console.log(this.textHistory[this.textHistory.length - 1]);
      return [this.textHistory[this.textHistory.length - 1] || ""];
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:600");

li {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 216, 0);
  text-shadow: 1px 1px 2px black, 1px -1px 2px black, -1px 1px 2px black,
    -1px -1px 2px black;
}
</style>

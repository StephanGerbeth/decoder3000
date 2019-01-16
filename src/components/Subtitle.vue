<template>
  <ul class="source">
    <li v-text="textFinal"></li>
    <li v-text="textPartial"></li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      textPartial: "",
      textFinal: ""
    };
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

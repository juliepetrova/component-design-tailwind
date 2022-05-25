<template>
  <div id="app">
    <ui-header />
    <Showcase />
  </div>
</template>

<script>
import UiHeader from "./components/UI-Header.vue";
import Showcase from "./views/Showcase.vue";

export default {
  name: "App",
  components: {
    Showcase,
    UiHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>

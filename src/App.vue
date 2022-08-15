<template>
  <div id="app">
    <home> </home>
    <about></about>
    <!-- <router-view> </router-view> -->
  </div>
</template>
<script>
import About from "./views/About.vue";

import Home from "./views/Home.vue";

export default {
  components: { Home, About },
  name: "App",
  // methods: {
  //   change() {
  //     alert(this.jj);
  //     this.$store.dispatch("savepay", this.jj);
  //     console.log(this.jj);
  //   },
  // },
};
</script>
<style>
body {
  background-color: #363945;
}
</style>

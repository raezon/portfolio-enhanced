<template class="bg-slate-50">
  <div id="app">
    <div class="container mx-auto md:mt-4">
      <NavBar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style src="./assets/tailwind.css"></style>
<style src="./assets/style/index.css"></style>
<style src="./assets/style/mobile.css"></style>

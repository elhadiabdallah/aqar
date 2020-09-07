<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/global/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

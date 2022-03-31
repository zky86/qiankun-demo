<template>
  <div class="home">
    <helloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import helloWorld from "@/components/helloWorld.vue";

export default {
  name: "Home",
  components: {
    helloWorld,
  },
};
</script>

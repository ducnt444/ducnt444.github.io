<template>
  <div class="homework-area">
    {{content}}
  </div>
</template>

<style scoped>

</style>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data: function () {
    return {
      content: "VUE121212!"
    };
  },
});
</script>

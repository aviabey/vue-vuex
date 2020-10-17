<template>
  <BasePlatoon :bullets="bullets">
    <h1 slot="title-top">Command Center</h1>
  </BasePlatoon>
</template>

<script>
import BasePlatoon from "@/components/BasePlatoon.vue";

export default {
  components: {
    BasePlatoon,
  },
  data() {
    return {
      bullets: 200000,
    };
  },
};
</script>

<style lang="sass" scoped></style>

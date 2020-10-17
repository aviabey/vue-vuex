<template>
  <BasePlatoon :bullets="bulletCount">
    <h1 slot="title-top">Command Center</h1>
  </BasePlatoon>
</template>

<script>
import BasePlatoon from "@/components/BasePlatoon.vue";

export default {
  components: {
    BasePlatoon,
  },
  computed: {
    bulletCount() {
      return this.$store.state.bulletsCommandCenter;
    },
  },
};
</script>

<style lang="sass" scoped></style>

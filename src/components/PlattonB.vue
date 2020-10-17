<template>
  <BasePlatoon :bullets="bulletCount">
    <h2 slot="title-bottom">Platoon B</h2>
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
      return this.$store.state.bulletsPlatoonB;
    },
  },
};
</script>

<style lang="sass" scoped></style>

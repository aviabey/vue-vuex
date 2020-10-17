<template>
  <BasePlatoon
    :bullets="bulletCount"
    @bulletCountChanged="updateBulletCount($event)"
  >
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
  methods: {
    updateBulletCount(event) {
      this.$store.dispatch("UpdateCommandCenterBulletCount", event);
    },
  },
};
</script>

<style lang="sass" scoped></style>

<template>
  <BasePlatoon :bullets="bulletCount">
    <h2 slot="title-bottom">Platoon A</h2>
    <p slot="other-platoon">
      Command center got {{ commandCenterBulletCount }} bullets
    </p>
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
      return this.$store.state.bulletsPlatoonA;
    },
    commandCenterBulletCount() {
      return this.$store.state.bulletsCommandCenter;
    },
  },
};
</script>

<style lang="sass" scoped></style>

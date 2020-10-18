<template>
  <BasePlatoon
    :bullets="bulletCount"
    @bulletCountChanged="updateBulletCount($event)"
  >
    <h2 slot="title-bottom">Platoon B</h2>
    <div slot="other-platoon">
      <p>Command Center got {{ commandCenterBulletCount }} bullets</p>
      <p>Platoon A got {{ platoonABulletCount }} bullets</p>
    </div>
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
    commandCenterBulletCount() {
      return this.$store.state.bulletsCommandCenter;
    },
    platoonABulletCount() {
      return this.$store.state.bulletsPlatoonA;
    },
  },
  destroyed() {
    this.$off("bulletCountChanged");
  },
  methods: {
    updateBulletCount(event) {
      this.$store.dispatch("UpdatePlatoonBBulletCount", event);
    },
  },
};
</script>

<style lang="sass" scoped></style>

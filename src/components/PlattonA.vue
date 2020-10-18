<template>
  <BasePlatoon
    :bullets="bulletCount"
    @bulletCountChanged="updateBulletCount($event)"
  >
    <h2 slot="title-bottom">Platoon A</h2>
    <div slot="other-platoon">
      <p>Command Center got {{ commandCenterBulletCount }} bullets</p>
      <p>Platoon B got {{ platoonBBulletCount }} bullets</p>
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
      return this.$store.state.bulletsPlatoonA;
    },
    commandCenterBulletCount() {
      return this.$store.state.bulletsCommandCenter;
    },
    platoonBBulletCount() {
      return this.$store.state.bulletsPlatoonB;
    },
  },
  methods: {
    updateBulletCount(event) {
      this.$store.dispatch("UpdatePlatoonABulletCount", event);
    },
  },
};
</script>

<style lang="sass" scoped></style>

<template>
  <BasePlatoon
    :bullets="bulletCount"
    @bulletCountChanged="updateBulletCount($event)"
  >
    <h1 slot="title-top">Command Center</h1>
    <div slot="other-platoon">
      <p>
        Platoon A got {{ platoonABulletCount }} bullets
      </p>
      <p>
        Platoon B got {{ platoonBBulletCount }} bullets
      </p>
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
      return this.$store.state.bulletsCommandCenter;
    },
    platoonABulletCount() {
      return this.$store.state.bulletsPlatoonA;
    },
    platoonBBulletCount() {
      return this.$store.state.bulletsPlatoonB;
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

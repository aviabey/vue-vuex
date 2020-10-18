<template>
  <BasePlatoon
    :bullets="$_BulletCountMixin_bulletCountCommandCenter"
    @bulletCountChanged="updateBulletCount($event)"
  >
    <h1 slot="title-top">Command Center</h1>
    <div slot="other-platoon">
      <p>Platoon A got {{ $_BulletCountMixin_bulletCountPlatoonA }} bullets</p>
      <p>Platoon B got {{ $_BulletCountMixin_bulletCountPlatoonB }} bullets</p>
    </div>
  </BasePlatoon>
</template>

<script>
import BasePlatoon from "@/components/BasePlatoon.vue";
import BulletCountMixin from "@/mixins/BulletCountMixin.js";

export default {
  components: {
    BasePlatoon,
  },
  mixins: [BulletCountMixin],
  destroyed() {
    this.$off("bulletCountChanged");
  },
  methods: {
    updateBulletCount(event) {
      this.$store.dispatch("UpdateCommandCenterBulletCount", event);
    },
  },
};
</script>

<style lang="sass" scoped></style>

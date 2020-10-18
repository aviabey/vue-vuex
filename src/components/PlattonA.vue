<template>
  <BasePlatoon
    :bullets="$_BulletCountMixin_bulletCountPlatoonA"
    @bulletCountChanged="updateBulletCount($event)"
  >
    <h2 slot="title-bottom">Platoon A</h2>
    <div slot="other-platoon">
      <p>
        Command Center got
        {{ $_BulletCountMixin_bulletCountCommandCenter }} bullets
      </p>
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
      this.$store.dispatch("UpdatePlatoonABulletCount", event);
    },
  },
};
</script>

<style lang="sass" scoped></style>

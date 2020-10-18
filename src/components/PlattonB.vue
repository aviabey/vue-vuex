<template>
  <BasePlatoon
    :bullets="$_BulletCountMixin_bulletCountPlatoonB"
    @bulletCountChanged="updateBulletCount($event)"
  >
    <h2 slot="title-bottom">Platoon B</h2>
    <div slot="other-platoon">
      <p>
        Command Center got
        {{ $_BulletCountMixin_bulletCountCommandCenter }} bullets
      </p>
      <p>Platoon A got {{ $_BulletCountMixin_bulletCountPlatoonA }} bullets</p>
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
      this.$store.dispatch("UpdatePlatoonBBulletCount", event);
    },
  },
};
</script>

<style lang="sass" scoped></style>

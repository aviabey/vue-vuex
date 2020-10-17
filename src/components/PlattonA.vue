<template>
  <div>
    <BasePlatoon
      :bullets="bullets"
      @bulletCountChanged="notifyBulletCountChange($event)"
    >
      <h2 slot="title-bottom">Platoon A</h2>
    </BasePlatoon>
  </div>
</template>

<script>
import BasePlatoon from "@/components/BasePlatoon.vue";

export default {
  components: {
    BasePlatoon,
  },
  props: {
    bullets: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    notifyBulletCountChange(event) {
      this.$emit("bulletCountChanged", event);
    },
  },
};
</script>

<style lang="sass" scoped></style>

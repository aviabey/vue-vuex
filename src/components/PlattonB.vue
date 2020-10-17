<template>
  <div>
    <BasePlatoon :bullets="bullets">
      <h2 slot="title-bottom">Platoon B</h2>
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
};
</script>

<style lang="sass" scoped></style>

<template>
  <div>
    <BasePlatoon :bullets="bullets">
      <h2>Platoon A</h2>
    </BasePlatoon>
  </div>
</template>

<script>
import BasePlatoon from '@/components/BasePlatoon.vue';

export default {
  components: {
    BasePlatoon,
  },
  data() {
    return {
      bullets: 30000,
    };
  },
  computed: {
    timeNeedForReSupply() {
      return Math.round(this.bullets / 2 / 60 / 60);
    },
  },
  methods: {
    sendSupply() {},
  },
};
</script>

<style lang="sass" scoped></style>

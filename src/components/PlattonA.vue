<template>
  <div>
    <h2>Platoon A</h2>
    <h3>Bullets: {{ bullets }}</h3>
    <h4>Enough For: {{ timeNeedForReSupply }} hours</h4>
  </div>
</template>

<script>
export default {
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

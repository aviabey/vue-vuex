<template>
  <div>
    <BasePlatoon :bullets="bullets">
      <h2>Platoon A</h2>
    </BasePlatoon>
  </div>
</template>

<script>
import BasePlatoon from "@/components/BasePlatoon.vue";

export default {
  components: {
    BasePlatoon,
  },
  data() {
    return {
      bullets: 30000,
    };
  },
};
</script>

<style lang="sass" scoped></style>

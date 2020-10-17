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
  data() {
    return {
      bullets: 20000,
    };
  },
};
</script>

<style lang="sass" scoped></style>

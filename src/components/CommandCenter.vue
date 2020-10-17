<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <BasePlatoon :bullets="bullets">
          <h1 slot="title-top">Command Center</h1>
        </BasePlatoon>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <PlattonA></PlattonA>
      </div>
      <div class="col-sm">
        <PlattonB></PlattonB>
      </div>
    </div>
  </div>
</template>

<script>
import PlattonA from "@/components/PlattonA.vue";
import PlattonB from "@/components/PlattonB.vue";
import BasePlatoon from "@/components/BasePlatoon.vue";

export default {
  components: {
    PlattonA,
    PlattonB,
    BasePlatoon,
  },
  data() {
    return {
      bullets: 200000,
    };
  },
};
</script>

<style lang="sass" scoped></style>

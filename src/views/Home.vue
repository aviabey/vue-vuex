<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <CommandCenter></CommandCenter>
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
import CommandCenter from "@/components/CommandCenter.vue";
import PlattonA from "@/components/PlattonA.vue";
import PlattonB from "@/components/PlattonB.vue";

export default {
  components: {
    CommandCenter,
    PlattonA,
    PlattonB,
  },
};
</script>

<style lang="sass" scoped></style>

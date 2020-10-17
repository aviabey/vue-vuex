<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div>
          <BasePlatoon :bullets="bullets">
            <h1 slot="title-top">Command Center</h1>
            <dir slot="other-platoon">
              <p>Platoon A got {{ bulletsPlatoonA }} bullets</p>
              <p>Platoon B got {{ bulletsPlatoonB }} bullets</p>
            </dir>
          </BasePlatoon>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <PlattonA :bullets="bulletsPlatoonA"></PlattonA>
      </div>
      <div class="col-sm">
        <PlattonB :bullets="bulletsPlatoonB"></PlattonB>
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
      bulletsPlatoonA: 30000,
      bulletsPlatoonB: 20000,
    };
  },
};
</script>

<style lang="sass" scoped></style>

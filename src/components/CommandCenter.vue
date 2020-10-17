<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h2>Command Center</h2>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"
              >Bullets</span
            >
          </div>
          <input
            type="Number"
            v-model="bullets"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <h4 class="mt-1 mb-4">Enough For: {{ timeNeedForReSupply }} hours</h4>
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

export default {
  components: {
    PlattonA,
    PlattonB
  },
  data() {
    return {
      bullets: 200000,
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

<template>
  <div class="border border-primary px-4 mb-3">
    <slot name="title-top" />
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Bullets</span
        >
      </div>
      <input
        type="Number"
        v-model="bulletCount"
        @change="bulletCountChanged($event)"
        class="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <h4 class="mt-1 mb-4">
      Enough For: {{ $_IntelligentMixin_timeNeedForReSupply }} hours
    </h4>
    <slot name="title-bottom" />
    <slot name="other-platoon" />
  </div>
</template>

<script>
import IntelligentMixin from "@/mixins/IntelligentMixin.js";
export default {
  mixins: [IntelligentMixin],
  props: {
    bullets: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      bulletCount: this.bullets
    }
  },
  methods: {
    bulletCountChanged(event) {
      this.$emit("bulletCountChanged", Number(event.target.value));
    }
  },
};
</script>

<style lang="sass" scoped></style>

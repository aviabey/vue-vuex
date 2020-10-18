<template>
  <BasePlatoon
    :bullets="$_BulletCountMixin_bulletCountCommandCenter"
    @bulletCountChanged="updateBulletCount($event)"
  >
    <h1 slot="title-top">Command Center</h1>
    <div slot="other-platoon">
      <p>Platoon A got {{ $_BulletCountMixin_bulletCountPlatoonA }} bullets</p>
      <p>Platoon B got {{ $_BulletCountMixin_bulletCountPlatoonB }} bullets</p>
    </div>
    <template slot="title-bottom" v-for="number in oddNumbers">
      <p>{{ number }}</p>
      <p>----------</p>
    </template>
  </BasePlatoon>
</template>

<script>
import BasePlatoon from "@/components/BasePlatoon.vue";
import BulletCountMixin from "@/mixins/BulletCountMixin.js";

export default {
  components: {
    BasePlatoon,
  },
  mixins: [BulletCountMixin],
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    oddNumbers() {
      return this.numbers.filter((number) => this.isOdd(number));
    },
  },
  destroyed() {
    this.$off("bulletCountChanged");
  },
  methods: {
    async updateBulletCount(event) {
      await this.$store.dispatch("UpdateCommandCenterBulletCount", event);
      console.log(
        "I'm exiting the updateBulletCount method of CommandCenter component"
      );
    },
    isOdd(number) {
      return number % 2 === 1;
    },
  },
};
</script>

<style lang="sass" scoped></style>

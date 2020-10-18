export default {
    computed: {
        $_BulletCountMixin_bulletCountCommandCenter() {
            return this.$store.state.bulletsCommandCenter;
        },
        $_BulletCountMixin_bulletCountPlatoonA() {
            return this.$store.state.bulletsPlatoonA;
        },
        $_BulletCountMixin_bulletCountPlatoonB() {
            return this.$store.state.bulletsPlatoonB;
        },
    },
};
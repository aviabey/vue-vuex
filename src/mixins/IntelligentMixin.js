export default {
    computed: {
        $_IntelligentMixin_timeNeedForReSupply() {
            return Math.round(this.bullets / 2 / 60 / 60);
        },
    }
};
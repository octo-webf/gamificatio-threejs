<template>
    <main ref='stats' class='frame-stats-container'>
    </main>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Stats from 'stats-js';

@Component({
    components: {},
})
export default class FrameStats extends Vue {

    public stats: any;

    public initStats() {
        this.stats = new Stats();
        this.stats.showPanel(0);
        const statsContainer = this.$refs.stats as Element;
        statsContainer.appendChild(this.stats.dom);
    }

    public animate() {
        this.stats.begin();
        this.stats.end();
        requestAnimationFrame(this.animate);
    }

    public mounted() {
        this.initStats();
        requestAnimationFrame(this.animate );
    }
}
</script>

<style lang="scss">

</style>

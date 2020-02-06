<template>
  <div id="app">
    <TestRender/>
  </div>
</template>

<script lang="ts">
import TestRender from '@/components/TestRender.vue'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    TestRender
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>

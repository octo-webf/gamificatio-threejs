<template>
  <div class="testRender">
    <canvas ref="canvas" />
    <Three v-if="canvas">
      <Renderer :canvas="canvas" camera="main" scene="scenetoto" :clearColor="0xCCCCCC" antialias shadows/>

      <CubeScene  />

      <Scene name="scenetoto" assets="cube">
        <Camera name="main" :factory="perspectiveCameraFactory">
          <Position :value="{ x: -3.5, y: 1.75, z: 2.25 }"/>
          <Rotation :value="{ x: -41, y: -52, z: -35 }"/>
        </Camera>

        <Light :factory="pointLightFactory">
          <Position :value="{ x: 0, y: 10, z: 5 }"/>
          <Shadows cast/>
        </Light>

        <Mesh material="cube_Mat" geometry="cube_Geom" >
          <Position :value="{ x: 0, y: 0, z: 0 }"/>
          <Shadows cast receive/>
        </Mesh>

      </Scene>
    </Three>
  </div>
</template>

<script lang="ts">
  import CubeScene from '@/components/CubeScene.vue';
  import * as THREE from 'three';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { components } from 'vue-threejs-composer';

  @Component({
    components: {
      CubeScene,
      ...components
    }
  })

  export default class TestRender extends Vue {
    @Prop() private msg!: string;

    canvas: any = null;

    mounted(): void {
      this.canvas = this.$refs.canvas;
      console.log(this.$refs);
    }

     perspectiveCameraFactory() {
      const viewAngle = 60;
      const nearClipping = 0.1;
      const farClipping = 1000;
      return new THREE.PerspectiveCamera(
        viewAngle,
        window.innerWidth / window.innerHeight,
        nearClipping,
        farClipping
      );
    }

     pointLightFactory() {
      return new THREE.PointLight(0xffffff, 1, 100);
    }
  }
</script>

<style scoped lang="scss">
  canvas{
    width: 100vw;
  }
</style>

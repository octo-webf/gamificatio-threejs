<template>
    <div ref="app" id="app">
        <FrameStats/>
    </div>
</template>

<script lang="ts">
  import * as THREE from 'three';
  import {Component, Vue} from 'vue-property-decorator';
  import FrameStats from '@/components/FrameStats.vue';
  import {
    cameraConfiguration,
    cubeConfiguration,
    floorConfiguration,
    lightConfiguration, playerConfiguration,
    rendererFactory,
    sceneFactory,
  } from '@/ThreeConfiguration';

  @Component({
    components: {
      FrameStats,
    },
  })
  export default class App extends Vue {

    public scene!: THREE.Scene;
    public controls!: any;
    public renderer!: THREE.WebGLRenderer;
    public camera!: THREE.PerspectiveCamera;

    public mounted() {
      this.init();
      this.animate();
      window.addEventListener('resize', this.onWindowResize);
      window.addEventListener("keydown", this.keydown);
      window.addEventListener("keyup", this.keyup);
    }

    keydown(e: any){
      playerConfiguration.pressed[e.key.toUpperCase()] = true;
    }

    keyup(e: any){
      playerConfiguration.pressed[e.key.toUpperCase()] = false;
    }

    public destroyed() {
      window.removeEventListener('resize', this.onWindowResize);
      window.removeEventListener("keydown", this.keydown);
      window.removeEventListener("keyup", this.keyup);
    }

    public onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    public animate() {
      requestAnimationFrame(this.animate);
      //this.controls.update();
      this.renderer.render(this.scene, this.camera);
      playerConfiguration.movePlayer()
      cameraConfiguration.followObject(playerConfiguration.sphereGroup)
    }

    private init() {
      this.createRenderer();

      this.camera = cameraConfiguration.createCamera();
      this.scene = sceneFactory.createScene();

      floorConfiguration.addFloorInScene(this.scene)
      cubeConfiguration.configCubeInScene(this.scene)
      lightConfiguration.addLightInScene(this.scene)
      playerConfiguration.configPlayerInScene(this.scene)

      this.scene.add(this.camera);

      //this.controls = cameraConfiguration.getControls(this.renderer)
      //this.controls.update();
    }

    private createRenderer() {
      this.renderer = rendererFactory.createRenderer();
      const app = this.$refs.app as Element;
      app.appendChild(this.renderer.domElement);
    }
  }
</script>

<style lang="scss">

</style>

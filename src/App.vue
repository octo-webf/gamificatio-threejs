<template>
    <div ref="app" id="app">
        <FrameStats/>
    </div>
</template>

<script lang="ts">
  import * as THREE from 'three';
  import OrbitControls from 'three-orbitcontrols';
  import {Component, Vue} from 'vue-property-decorator';
  import FrameStats from '@/components/FrameStats.vue';
  import {
    cameraFactory,
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
    }

    public destroyed() {
      window.removeEventListener('resize', this.onWindowResize);
    }

    public onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    public animate() {
      requestAnimationFrame(this.animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    }

    private init() {
      this.createRenderer();

      this.camera = cameraFactory.createCamera();
      this.scene = sceneFactory.createScene();

      floorConfiguration.addFloorInScene(this.scene)
      cubeConfiguration.configCubeInScene(this.scene)
      lightConfiguration.addLightInScene(this.scene)
      playerConfiguration.configPlayerInScene(this.scene)

      this.scene.add(this.camera);


      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.update();
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

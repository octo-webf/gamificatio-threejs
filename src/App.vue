<template>
    <div ref="app" id="app">
        <FrameStats/>
    </div>
</template>

<script lang="ts">
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import {Component, Vue} from 'vue-property-decorator';
import Renderer from '@/ThreeObjects/Renderer';
import CameraFactory from '@/ThreeObjects/CameraFactory';
import Cube from '@/ThreeObjects/Cube';
import LightBulb from '@/ThreeObjects/LightBulb';
import Ground from '@/ThreeObjects/Ground';
import Scene from '@/ThreeObjects/Scene';
import SunLight from '@/ThreeObjects/SunLight';
import FrameStats from '@/components/FrameStats.vue';

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

    public animate() {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

   public onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

    private init() {
        this.createRenderer();

        const cameraFactory = new CameraFactory();
        this.camera = cameraFactory.init();

        const cubeFactory = new Cube();
        const cube = cubeFactory.init();

        const lightBulbFactory = new LightBulb();
        const lightBulbHolder = lightBulbFactory.initLightHolder();
        const lightBulbSphere = lightBulbFactory.initLightSphere();

        const groundFactory = new Ground();
        const ground = groundFactory.init();

        const route = groundFactory.initRoute();

        const sceneFactory = new Scene();
        this.scene = sceneFactory.init();

        const sunLightFactory = new SunLight(this.scene);
        const sunLight = sunLightFactory.init();

        this.scene.add(this.camera);
        this.scene.add(cube);
        this.scene.add(lightBulbHolder);
        this.scene.add(lightBulbSphere);

        // this.scene.add(ground);
        this.scene.add(sunLight);
        this.scene.add(route);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.update();
    }

    private createRenderer() {
        const rendererFactory = new Renderer();
        this.renderer = rendererFactory.init();
        const app = this.$refs.app as Element;
        app.appendChild(this.renderer.domElement);
    }
}
</script>

<style lang="scss">

</style>

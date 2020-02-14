<template>
    <div ref="app" id="app">
        <FrameStats/>
    </div>
</template>

<script lang="ts">
    import * as THREE from 'three';
    import OrbitControls from 'three-orbitcontrols'
    import {Component, Vue} from 'vue-property-decorator';
    import Renderer from "@/ThreeObjects/Renderer";
    import Camera from "@/ThreeObjects/Camera";
    import Cube from "@/ThreeObjects/Cube";
    import LightBulb from "@/ThreeObjects/LightBulb";
    import Ground from "@/ThreeObjects/Ground";
    import Scene from "@/ThreeObjects/Scene";
    import SunLight from "@/ThreeObjects/SunLight";
    import FrameStats from "@/components/FrameStats.vue";

    @Component({
        components: {
            FrameStats
        },
    })
    export default class App extends Vue {

        scene!: THREE.Scene;
        controls!: any;
        renderer!: THREE.WebGLRenderer;
        camera!: THREE.PerspectiveCamera;


        mounted() {
            this.init();
            this.animate();
            window.addEventListener("resize", this.onWindowResize)
        }

      destroyed() {
        window.removeEventListener("resize", this.onWindowResize);
      }

        private init() {
            let rendererFactory = new Renderer();
            this.renderer = rendererFactory.init();

            let app = this.$refs.app as Element;
            app.appendChild(this.renderer.domElement);

            let cameraFactory = new Camera();
            this.camera = cameraFactory.init();

            let cubeFactory = new Cube();
            let cube = cubeFactory.init();

            let lightBulbFactory = new LightBulb();
            let lightBulbHolder = lightBulbFactory.initLightHolder();
            let lightBulbSphere = lightBulbFactory.initLightSphere();

            let groundFactory = new Ground();
            let ground = groundFactory.init();

            let sceneFactory = new Scene();
            this.scene = sceneFactory.init();

            let sunLightFactory = new SunLight(this.scene);
            let sunLight = sunLightFactory.init();

            this.scene.add(this.camera);
            this.scene.add(cube);
            this.scene.add(lightBulbHolder);
            this.scene.add(lightBulbSphere);
            this.scene.add(ground);
            this.scene.add(sunLight);

            this.controls = new OrbitControls(this.camera, this.renderer.domElement)
            this.controls.update();
        }

        animate() {
            requestAnimationFrame(this.animate)
            this.controls.update()
            this.renderer.render(this.scene, this.camera);
        }

       onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
      }


    }
</script>

<style lang="scss">

</style>

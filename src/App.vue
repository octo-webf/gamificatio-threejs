<template>
  <div ref="app" id="app">
    <FrameStats/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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

  mounted() {
    let rendererFactory = new Renderer();
    let renderer = rendererFactory.init();

    let app = this.$refs.app as Element;
    app.appendChild(renderer.domElement);

    let cameraFactory = new Camera();
    let camera = cameraFactory.init();

    let cubeFactory = new Cube();
    let cube = cubeFactory.init();

    let lightBulbFactory = new LightBulb();
    let lightBulbHolder = lightBulbFactory.initLightHolder();
    let lightBulbSphere = lightBulbFactory.initLightSphere();

    let groundFactory = new Ground();
    let ground = groundFactory.init();

    let sceneFactory = new Scene();
    let scene = sceneFactory.init();

    let sunLightFactory = new SunLight(scene);
    let sunLight = sunLightFactory.init();

    scene.add(camera);
    scene.add(cube);
    scene.add(lightBulbHolder);
    scene.add(lightBulbSphere);
    scene.add(ground);
    scene.add(sunLight);

    renderer.render(scene, camera);
  }

}
</script>

<style lang="scss">

</style>

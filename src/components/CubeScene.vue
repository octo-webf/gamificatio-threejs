<template>
  <div class="cube">
    <AssetBundle name="cube" preload @click="onClick()">
      <Material  name="cube_Mat" :factory="cubeMaterialFactory"/>
      <Geometry name="cube_Geom" :factory="cubeGeometryFactory"/>
    </AssetBundle>
  </div>
</template>

<script lang="ts">
  import * as THREE from 'three';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { components } from 'vue-threejs-composer';

  @Component({
    components: {
      ...components
    }
  })
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    cubeMaterialFactory() {
      return new THREE.MeshStandardMaterial({
        color: '#DDDDDD',
        metalness: 0.01
      });
    }

    cubeGeometryFactory() {
      return new THREE.BoxBufferGeometry(1, 1, 1);
    }

    onClick(){
      alert("yolo")
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

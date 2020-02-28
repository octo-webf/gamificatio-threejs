import * as THREE from 'three';

class BackgroundConfiguration {

  public textureLoader!: THREE.TextureLoader;

  constructor() {
    this.textureLoader = new THREE.TextureLoader();
  }

  public addBackground(scene: THREE.Scene) {
    const floor = this.createFloor();
   // scene.add(floor);
  }

  private createFloor() {

  }



}

export default BackgroundConfiguration;

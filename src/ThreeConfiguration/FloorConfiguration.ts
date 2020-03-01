import * as THREE from 'three';

class FloorConfiguration {

  public textureLoader!: THREE.TextureLoader;

  constructor() {
    this.textureLoader = new THREE.TextureLoader();
  }

  public addFloorInScene(scene: THREE.Scene) {
    const floor = this.createFloor();
    scene.add(floor);
  }

  private createFloor(): THREE.Mesh {
    const floorMat = new THREE.MeshStandardMaterial( {
      roughness: 0.8,
      color: 0xffffff,
      metalness: 0.2,
      bumpScale: 0.0005,
    } );

    const floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    this.loadTextures(floorMat);

    const floorMesh = new THREE.Mesh( floorGeometry, floorMat );
    floorMesh.position.y = -0.5;
    floorMesh.rotation.x = Math.PI / 2;
    floorMesh.receiveShadow = true;
    floorMesh.rotation.x = - Math.PI / 2.0;

    return floorMesh;
  }

  private loadTextures(floorMat: THREE.MeshStandardMaterial) {
    this.textureLoader.load('./img/hardwood2_diffuse.jpg', (map) => {
      this.repeatTexture(map)
      map.encoding = THREE.sRGBEncoding;
      floorMat.map = map;
      floorMat.needsUpdate = true;

    });
    this.textureLoader.load('./img/hardwood2_bump.jpg', (map) => {
      this.repeatTexture(map)
      floorMat.bumpMap = map;
      floorMat.needsUpdate = true;

    });
    this.textureLoader.load('./img/hardwood2_roughness.jpg', (map) => {
      this.repeatTexture(map)
      floorMat.roughnessMap = map;
      floorMat.needsUpdate = true;

    });
  }

  private repeatTexture(map: THREE.Texture) {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(50, 120);
  }
}

export default FloorConfiguration;

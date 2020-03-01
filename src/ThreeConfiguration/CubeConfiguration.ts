import * as THREE from 'three';

class CubeConfiguration {

  public textureLoader!: THREE.TextureLoader;

  constructor() {
    this.textureLoader = new THREE.TextureLoader();
  }

  private createCubeMat() {
    const cubeMat = new THREE.MeshStandardMaterial({
      roughness: 0.7,
      color: 0xffffff,
      bumpScale: 0.002,
      metalness: 0.2,
    });
    this.loadTextures(cubeMat)
    return cubeMat
  }

  public configCubeInScene(scene: THREE.Scene){
    const cubeMat = this.createCubeMat()
    const boxGeometry = this.createBoxGeometry()

    const boxMesh = new THREE.Mesh( boxGeometry, cubeMat );
    boxMesh.position.set( - 60, 2, - 1 );
    boxMesh.castShadow = true;
    scene.add( boxMesh );

    const boxMesh2 = new THREE.Mesh( boxGeometry, cubeMat );
    boxMesh2.position.set( 0, 2, - 50 );
    boxMesh2.castShadow = true;
    scene.add( boxMesh2 );

    const boxMesh3 = new THREE.Mesh( boxGeometry, cubeMat );
    boxMesh3.position.set( 60, 2, 0 );
    boxMesh3.castShadow = true;
    scene.add( boxMesh3 );
  }

  private createBoxGeometry() {
    const boxGeometry = new THREE.BoxBufferGeometry(30, 60, 30);
    return boxGeometry
  }

  private loadTextures(cubeMat: THREE.MeshStandardMaterial) {
    this.textureLoader.load('./textures/brick_diffuse.jpg', function (map) {

      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      map.encoding = THREE.sRGBEncoding;
      cubeMat.map = map;
      cubeMat.needsUpdate = true;

    });
    this.textureLoader.load('./textures/brick_bump.jpg', function (map) {

      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      cubeMat.bumpMap = map;
      cubeMat.needsUpdate = true;
    });
  }
}

export default CubeConfiguration;

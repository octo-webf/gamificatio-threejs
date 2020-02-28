import * as THREE from 'three';

class PlayerConfiguration {

  public textureLoader!: THREE.TextureLoader;

  constructor() {
    this.textureLoader = new THREE.TextureLoader();
  }

  private createPlayerMat() {
    const cubeMat = new THREE.MeshStandardMaterial({
      roughness: 0.7,
      color: 0xffffff,
      bumpScale: 0.002,
      metalness: 0.2,
    });
    this.loadTextures(cubeMat)
    return cubeMat
  }

  public configPlayerInScene(scene: THREE.Scene){
    const playerMat = this.createPlayerMat()
    const boxGeometry = this.createBoxGeometry()

    const player = new THREE.Mesh( boxGeometry, playerMat );
    player.position.set( 0, 0.25, 8 );
    player.castShadow = true;
    scene.add( player );
  }

  private createBoxGeometry() {
    const boxGeometry = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5);
    return boxGeometry
  }

  private loadTextures(player: THREE.MeshStandardMaterial) {
    this.textureLoader.load('./textures/brick_diffuse.jpg', function (map) {

      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      map.encoding = THREE.sRGBEncoding;
      player.map = map;
      player.needsUpdate = true;

    });
    this.textureLoader.load('./textures/brick_bump.jpg', function (map) {

      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      player.bumpMap = map;
      player.needsUpdate = true;
    });
  }
}

export default PlayerConfiguration;

import * as THREE from 'three';

class PlayerConfiguration {

  public textureLoader!: THREE.TextureLoader;

  constructor() {
    this.textureLoader = new THREE.TextureLoader();
  }

  public configPlayerInScene(scene: THREE.Scene) {
    const playerMat = this.createPlayerMat();
    const boxGeometry = this.createBoxGeometry();

    const player = new THREE.Mesh( boxGeometry, playerMat );
    player.position.set( 0, 0.25, 8 );
    player.rotation.y = Math.PI;
    player.castShadow = true;
    scene.add( player );
  }

  private createPlayerMat() {
    const ballMat = new THREE.MeshStandardMaterial( {
      color: 0xffffff,
      roughness: 0.5,
      metalness: 1.0,
    } );
    this.loadTextures(ballMat);
    return ballMat;
  }

  private createBoxGeometry() {
    const boxGeometry = new THREE.SphereBufferGeometry( 0.25, 32, 32 );
    return boxGeometry;
  }

  private loadTextures(player: THREE.MeshStandardMaterial) {
    this.textureLoader.load( 'textures/octo.png', function( map ) {

      map.anisotropy = 4;
      map.encoding = THREE.sRGBEncoding;
      player.map = map;
      player.needsUpdate = true;

    } );
    this.textureLoader.load( 'textures/octo.png', function( map ) {
      map.anisotropy = 4;
      map.encoding = THREE.sRGBEncoding;
      player.metalnessMap = map;
      player.needsUpdate = true;

    } );
  }
}

export default PlayerConfiguration;

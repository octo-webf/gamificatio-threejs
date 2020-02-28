import * as THREE from 'three';

class PlayerConfiguration {

  public textureLoader!: THREE.TextureLoader;

  public playerMesh!: THREE.Mesh

  public moveDistance = 0.08;
  public rotateAngle = 90

  constructor() {
    this.textureLoader = new THREE.TextureLoader();
  }

  public configPlayerInScene(scene: THREE.Scene) {
    const playerMat = this.createPlayerMat();
    const boxGeometry = this.createBoxGeometry();

    this.playerMesh = new THREE.Mesh( boxGeometry, playerMat );
    this.playerMesh.position.set( 0, 0.25, 8 );
    this.playerMesh.rotation.y = Math.PI;
    this.playerMesh.castShadow = true;
    scene.add( this.playerMesh );
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

  updateLeft(){
    this.playerMesh.rotateOnAxis( new THREE.Vector3(0,1,0), -this.rotateAngle);
  }

  updateRight(){
    this.playerMesh.rotateOnAxis( new THREE.Vector3(0,1,0), this.rotateAngle);
  }

  updateTop(){
    this.playerMesh.translateZ(this.moveDistance)
  }

  updateBottom(){
    this.playerMesh.translateZ(-this.moveDistance)
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

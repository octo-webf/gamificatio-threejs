import * as THREE from 'three';

class PlayerConfiguration {

  public textureLoader!: THREE.TextureLoader;

  public playerMesh!: THREE.Mesh
  public sphereGroup!: THREE.Group
  private clock: THREE.Clock

  public pressed: any= {};

  public LEFT_KEY = 'ARROWLEFT'
  public RIGHT_KEY = 'ARROWRIGHT'
  public TOP_KEY = 'ARROWUP'
  public BOTTOM_KEY = 'ARROWDOWN'

  constructor(clock: THREE.Clock) {
    this.textureLoader = new THREE.TextureLoader();
    this.clock = clock
  }

  public configPlayerInScene(scene: THREE.Scene) {
    const playerMat = this.createPlayerMat();
    const boxGeometry = this.createBoxGeometry();

    this.playerMesh = new THREE.Mesh( boxGeometry, playerMat );
    this.playerMesh.position.set( 0, 0.25, 8 );
    this.playerMesh.rotation.y = Math.PI;
    this.playerMesh.castShadow = true;
    this.sphereGroup = new THREE.Group();
    this.sphereGroup.add(this.playerMesh)
    this.sphereGroup.castShadow = true;
    this.sphereGroup.position.set(0, 0.25, 100);
    this. sphereGroup.receiveShadow = false;
    scene.add( this.sphereGroup);
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

  movePlayer() {
    const delta = this.clock.getDelta(); // seconds
    const moveDistance = 20 * delta; // 200 pixels per second
    const rotateAngle = Math.PI / 2 * delta; // pi/2 radians (90 deg) per sec

    if ( this.pressed[this.TOP_KEY] ) {
      this.playerMesh.rotateOnAxis(new THREE.Vector3(1,0,0), -rotateAngle)
      this.sphereGroup.translateZ( -moveDistance );
    } else if( this.pressed[this.BOTTOM_KEY] ) {
      this.playerMesh.rotateOnAxis(new THREE.Vector3(-1,0,0), rotateAngle)
      this.sphereGroup.translateZ( moveDistance );
    }else if( this.pressed[this.LEFT_KEY] ) {
      this.sphereGroup.rotateOnAxis(new THREE.Vector3(0,-1,0), -rotateAngle);
    }else if( this.pressed[this.RIGHT_KEY] ) {
      this.sphereGroup.rotateOnAxis(new THREE.Vector3(0,1,0), -rotateAngle);
    }
  }

  private createBoxGeometry() {
    const boxGeometry = new THREE.SphereBufferGeometry( 1, 12, 9 );
    return boxGeometry;
  }

  private loadTextures(player: THREE.MeshStandardMaterial) {
    this.textureLoader.load( 'textures/octo.png', map => {
      map.anisotropy = 4;
      map.encoding = THREE.sRGBEncoding;
      player.map = map;
      player.needsUpdate = true;

    });
    this.textureLoader.load( 'textures/octo.png', map => {
      map.anisotropy = 4;
      map.encoding = THREE.sRGBEncoding;
      player.metalnessMap = map;
      player.needsUpdate = true;
    });
  }
}

export default PlayerConfiguration;

import * as THREE from 'three';

class PlayerConfiguration {

  public textureLoader!: THREE.TextureLoader;

  public playerMesh!: THREE.Mesh
  public sphereGroup!: THREE.Group
  private clock: THREE.Clock

  public pressed: any= {};

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
    this.sphereGroup.position.set(0, 24, 100);
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
    const moveDistance = 200 * delta; // 200 pixels per second
    const rotateAngle = Math.PI / 2 * delta; // pi/2 radians (90 deg) per sec

    console.log('delta', delta)
    console.log('this.pressed[\'W\']', this.pressed['W'])

    // move forwards/backwards/left/right
    if ( this.pressed['W'] ) {
      this.playerMesh.rotateOnAxis(new THREE.Vector3(1,0,0), -rotateAngle)
      this.sphereGroup.translateZ( -moveDistance );
    }
    if ( this.pressed['S'] )
      this.sphereGroup.translateZ(  moveDistance );
    if ( this.pressed['Q'] )
      this.sphereGroup.translateX( -moveDistance );
    if ( this.pressed['E'] )
      this.sphereGroup.translateX(  moveDistance );

    if ( this.pressed['A'] )
      this.sphereGroup.rotateOnAxis(new THREE.Vector3(0,1,0), rotateAngle);
    if ( this.pressed['D'] )
      this.sphereGroup.rotateOnAxis(new THREE.Vector3(0,1,0), -rotateAngle);
    if ( this.pressed['R'] )
      this.sphereGroup.rotateOnAxis(new THREE.Vector3(1,0,0), rotateAngle);
    if ( this.pressed['F'] )
      this.sphereGroup.rotateOnAxis(new THREE.Vector3(1,0,0), -rotateAngle);
  }

  private createBoxGeometry() {
    const boxGeometry = new THREE.SphereBufferGeometry( 30, 12, 9 );
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

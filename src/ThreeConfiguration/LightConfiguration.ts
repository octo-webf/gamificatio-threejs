import * as THREE from 'three';

class LightConfiguration {

  public addLightInScene(scene: THREE.Scene) {
    const bulbGeometry = new THREE.SphereBufferGeometry( 0.02, 16, 8 );
    const bulbLight = new THREE.PointLight( 0xffee88, 60, 100, 2 );

    const bulbMat = new THREE.MeshStandardMaterial( {
      emissive: 0xffffee,
      emissiveIntensity: 1,
      color: 0x000000
    } );
    bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
    bulbLight.position.set( 0, 8, 0 );
    bulbLight.castShadow = true;
    scene.add(bulbLight)

    const hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.02 );
    scene.add(hemiLight)
  }
}

export default LightConfiguration;



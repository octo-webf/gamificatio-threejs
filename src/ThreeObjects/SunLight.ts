import * as THREE from 'three';

class SunLight {

    constructor(private scene: THREE.Scene) {
        this.scene = scene;
    }

    init(): THREE.DirectionalLight {
        const sunLight = new THREE.DirectionalLight('rgb(255,255,255)', 1);
        sunLight.position.set(5, 7, -1);
        sunLight.lookAt(this.scene.position);

        return sunLight;
    }
}

export default SunLight;

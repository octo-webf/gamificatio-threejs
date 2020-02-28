import * as THREE from 'three';

class SunLightFactory {

    constructor() {
    }

    public createSunLight(scene: THREE.Scene): DirectionalLight {
        const sunLight = new THREE.DirectionalLight('rgb(255,255,255)', 1);
        sunLight.position.set(5, 7, -1);
        sunLight.lookAt(scene.position);

        return sunLight;
    }
}

export default SunLightFactory;

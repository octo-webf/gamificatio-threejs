import * as THREE from 'three';

class Scene {

    public init(): THREE.Scene {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0096ff);

        return scene;
    }
}

export default Scene;

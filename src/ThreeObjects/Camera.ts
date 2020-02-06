import * as THREE from 'three';

class Camera {

    init(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera();
        camera.position.set(0, 2.5, 10);

        return camera;
    }
}

export default Camera;

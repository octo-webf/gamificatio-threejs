import * as THREE from 'three';

class CameraFactory {

    public init(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera();
        camera.position.set(0, 2.5, 10);

        return camera;
    }
}

export default CameraFactory;

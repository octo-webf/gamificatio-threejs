import * as THREE from 'three';

class CameraFactory {

    public createCamera(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 2.5, 10);

        return camera;
    }
}

export default CameraFactory;



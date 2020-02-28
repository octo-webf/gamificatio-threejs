import * as THREE from 'three';

class CameraConfiguration {

    public moveDistance = 0.08;

    public camera!: THREE.PerspectiveCamera;

    public createCamera(): THREE.PerspectiveCamera {
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.set(0, 1, 10);

        return this.camera;
    }

    public followObject(player: THREE.Mesh) {
        const relativeCameraOffset = new THREE.Vector3(0, 1, 10)

        const cameraOffset = relativeCameraOffset.applyMatrix4(player.matrixWorld)

        this.camera.position.x = cameraOffset.x;
        this.camera.position.y = cameraOffset.y;
        this.camera.position.z = cameraOffset.z;
        this.camera.lookAt( player.position );
    }
}

export default CameraConfiguration;



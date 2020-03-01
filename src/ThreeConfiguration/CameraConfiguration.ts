import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

class CameraConfiguration {

    public Z_DISTANCE_OF_PLAYER = 20;
    public Y_HAUTEUR_OF_PLAYER = 5;

    public camera!: THREE.PerspectiveCamera;

    public createCamera(): THREE.PerspectiveCamera {
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        return this.camera;
    }

    public followObject(player: THREE.Group) {
        const relativeCameraOffset = new THREE.Vector3(0, this.Y_HAUTEUR_OF_PLAYER, this.Z_DISTANCE_OF_PLAYER);

        const cameraOffset = relativeCameraOffset.applyMatrix4(player.matrixWorld);

        this.camera.position.x = cameraOffset.x;
        this.camera.position.y = cameraOffset.y;
        this.camera.position.z = cameraOffset.z;
        this.camera.lookAt( player.position );
    }

    public getControls(renderer: THREE.WebGLRenderer) {
        const controls = new OrbitControls(this.camera, renderer.domElement);
        return controls;
    }
}

export default CameraConfiguration;



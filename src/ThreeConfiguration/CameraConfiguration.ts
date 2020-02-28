import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

class CameraConfiguration {

    public moveDistance = 0.08;

    public camera!: THREE.PerspectiveCamera;

    public createCamera(): THREE.PerspectiveCamera {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        this.camera.position.set(0,150,400);
        return this.camera;
    }

    public followObject(player: THREE.Group) {
        const relativeCameraOffset = new THREE.Vector3(0,50,200)

        const cameraOffset = relativeCameraOffset.applyMatrix4(player.matrixWorld)

        this.camera.position.x = cameraOffset.x;
        this.camera.position.y = cameraOffset.y;
        this.camera.position.z = cameraOffset.z;
        this.camera.lookAt( player.position );
    }

    public getControls(renderer: THREE.WebGLRenderer) {
        let controls = new OrbitControls(this.camera, renderer.domElement)
        return controls;
    }
}

export default CameraConfiguration;



import * as THREE from 'three';

class Cube {

    public textureLoader!: THREE.TextureLoader;
    public urlTextureCube = './img/sky1.jpg';

    constructor() {
        this.textureLoader =  new THREE.TextureLoader();
    }

    public init(): THREE.Mesh {
        const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
        const cubeMaterial = this.createMaterialCube();

        this.loadTexture(this.textureLoader, cubeMaterial);

        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.z = - 1;
        cube.position.y = 1;

        return cube;
    }

    private createMaterialCube() {
        return new THREE.MeshStandardMaterial();
    }

    private loadTexture(textureLoader: THREE.TextureLoader, cubeMaterial: THREE.MeshStandardMaterial) {
        textureLoader.load(this.urlTextureCube, map => {
            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            cubeMaterial.map = map;
            cubeMaterial.needsUpdate = true;
        }, () => {
            // do nothing
        }, (error) => {
            console.error(error);
        });
    }

}

export default Cube;

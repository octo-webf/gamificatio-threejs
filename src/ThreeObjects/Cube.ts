import * as THREE from 'three';

class Cube {
    init(): THREE.Mesh {
        const cubeGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshLambertMaterial({ color: 'rgb(255,0,0)', emissive: 0x200000 });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.z = - 1;
        cube.position.y = 1

        return cube;
    }
}

export default Cube;

import * as THREE from 'three';

class Ground {
    init(): THREE.Mesh {
        const groundGeometry = new THREE.BoxBufferGeometry(30, 0.01, 40)
        const groundMaterial = new THREE.MeshLambertMaterial({ color: 'rgb(0,130,0)' })
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
        groundMesh.position.y = 0.0  //this value must be slightly lower than the planeConstant (0.01) parameter above

        return groundMesh;
    }
}

export default Ground;

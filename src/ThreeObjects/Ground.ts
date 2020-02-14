import * as THREE from 'three';

class Ground {
    init(): THREE.Mesh {
        const groundGeometry = new THREE.BoxBufferGeometry(30, 0.01, 40)
        const groundMaterial = new THREE.MeshLambertMaterial()

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load("./img/herbe.jpg", function (map) {
            console.log("loaded Grounded", map);
            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.anisotropy = 4;
            map.repeat.set(24, 24);
            groundMaterial.map = map;
            groundMaterial.needsUpdate = true;
        }, ()=>{

        }, (error)=> {
            console.error(error)
        });

        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
        groundMesh.position.y = 0.0  //this value must be slightly lower than the planeConstant (0.01) parameter above

        return groundMesh;
    }

    initRoute(): THREE.Mesh {
        const groundGeometry = new THREE.BoxBufferGeometry(2, 0.01, 40)
        const groundMaterial = new THREE.MeshLambertMaterial()

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load("./img/sky1.jpg", function (map) {
            console.log("loaded Grounded", map);
            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.anisotropy = 4;
            map.repeat.set(24, 24);
            groundMaterial.map = map;
            groundMaterial.needsUpdate = true;
        }, ()=>{

        }, (error)=> {
            console.error(error)
        });

        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
        groundMesh.position.y = 0.1  //this value must be slightly lower than the planeConstant (0.01) parameter above

        return groundMesh;

    }
}

export default Ground;

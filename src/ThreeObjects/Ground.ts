import * as THREE from 'three';

class Ground {
    init(): THREE.Mesh {
        const textureLoader = new THREE.TextureLoader();

        const groundGeometry = new THREE.BoxBufferGeometry(30, 0.01, 40)
        const groundMaterial = new THREE.MeshLambertMaterial()


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
        const textureLoader = new THREE.TextureLoader();
        let floorMat = new THREE.MeshStandardMaterial( {
            roughness: 0.8,
            color: 0xffffff,
            metalness: 0.2,
            bumpScale: 0.0005
        } );

        var floorGeometry = new THREE.PlaneBufferGeometry( 20, 20 );


        textureLoader.load( "./img/hardwood2_diffuse.jpg", function ( map ) {

            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.anisotropy = 4;
            map.repeat.set( 10, 24 );
            map.encoding = THREE.sRGBEncoding;
            floorMat.map = map;
            floorMat.needsUpdate = true;

        } );
        textureLoader.load( "./img/hardwood2_bump.jpg", function ( map ) {

            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.anisotropy = 4;
            map.repeat.set( 10, 24 );
            floorMat.bumpMap = map;
            floorMat.needsUpdate = true;

        } );
        textureLoader.load( "./img/hardwood2_roughness.jpg", function ( map ) {

            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.anisotropy = 4;
            map.repeat.set( 10, 24 );
            floorMat.roughnessMap = map;
            floorMat.needsUpdate = true;

        } );

        var floorMesh = new THREE.Mesh( floorGeometry, floorMat );
        floorMesh.receiveShadow = true;
        floorMesh.rotation.x = - Math.PI / 2.0;

        return floorMesh;

    }
}

export default Ground;

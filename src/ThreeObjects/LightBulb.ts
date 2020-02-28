import * as THREE from 'three';

class LightBulb {

    public initLightSphere(): THREE.Mesh {
        const lightSphereGeometry = new THREE.SphereBufferGeometry(0.09);
        const lightSphereMaterial = new THREE.MeshBasicMaterial({ color: 'rgb(255,255,255)' });

        return new THREE.Mesh(lightSphereGeometry, lightSphereMaterial);
    }

    public initLightHolder(): THREE.Mesh {
        const lightHolderGeometry = new THREE.CylinderBufferGeometry(0.05, 0.05, 0.13);
        const lightHolderMaterial = new THREE.MeshBasicMaterial({ color: 'rgb(75,75,75)' });

        return new THREE.Mesh(lightHolderGeometry, lightHolderMaterial);
    }
}

export default LightBulb;

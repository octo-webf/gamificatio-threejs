import * as THREE from 'three';

class Renderer {
    SCREEN_WIDTH: number = window.innerWidth;
    SCREEN_HEIGHT: number = window.innerHeight;

    init(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

        return renderer;
    }
}

export default Renderer;

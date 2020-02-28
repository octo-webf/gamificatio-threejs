import * as THREE from 'three';

class RendererFactory {
    public SCREEN_WIDTH: number = window.innerWidth;
    public SCREEN_HEIGHT: number = window.innerHeight;

    public createRenderer(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

        return renderer;
    }
}

export default RendererFactory;

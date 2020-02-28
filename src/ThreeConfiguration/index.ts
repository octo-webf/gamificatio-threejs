import CameraFactory from './CameraFactory'
import SceneFactory from './SceneFactory'
import RendererFactory from '@/ThreeConfiguration/RendererFactory'
import CubeConfiguration from '@/ThreeConfiguration/CubeConfiguration'
import FloorConfiguration from '@/ThreeConfiguration/FloorConfiguration'
import LightConfiguration from '@/ThreeConfiguration/LightConfiguration'

export const rendererFactory = new RendererFactory();
export const cameraFactory = new CameraFactory();
export const sceneFactory = new SceneFactory();


export const cubeConfiguration = new CubeConfiguration();
export const floorConfiguration = new FloorConfiguration();
export const lightConfiguration = new LightConfiguration();

import CameraConfiguration from './CameraConfiguration'
import SceneFactory from './SceneFactory'
import RendererFactory from '@/ThreeConfiguration/RendererFactory'
import CubeConfiguration from '@/ThreeConfiguration/CubeConfiguration'
import FloorConfiguration from '@/ThreeConfiguration/FloorConfiguration'
import LightConfiguration from '@/ThreeConfiguration/LightConfiguration'
import PlayerConfiguration from '@/ThreeConfiguration/PlayerConfiguration'

export const rendererFactory = new RendererFactory();
export const cameraConfiguration = new CameraConfiguration();
export const sceneFactory = new SceneFactory();


export const cubeConfiguration = new CubeConfiguration();
export const floorConfiguration = new FloorConfiguration();
export const lightConfiguration = new LightConfiguration();
export const playerConfiguration = new PlayerConfiguration()

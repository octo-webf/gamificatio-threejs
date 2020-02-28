import CameraFactory from './CameraFactory'
import CubeFactory from './CubeFactory'
import LightBulbFactory from './LightBulbFactory'
import GroundFactory from './GroundFactory'
import SceneFactory from './SceneFactory'
import SunLightFactory from '@/ThreeObjects/SunLightFactory'
import RendererFactory from '@/ThreeObjects/RendererFactory'

export const rendererFactory = new RendererFactory();
export const cameraFactory = new CameraFactory();
export const cubeFactory = new CubeFactory();
export const lightBulbFactory = new LightBulbFactory();
export const groundFactory = new GroundFactory();
export const sceneFactory = new SceneFactory();
export const sunLightFactory = new SunLightFactory();
